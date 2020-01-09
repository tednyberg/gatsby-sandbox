import React from "react"

import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import BlogService from "../services/blog-service"

const BlogListing = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blogg med {data.allSitePage.edges.length} inlägg</h1>
    <ul>
      {data.allSitePage.edges.map((edge) =>
        <li><Link to={BlogService.getBlogPostUrl(edge.node.context.post)}>{edge.node.context.post.title}</Link></li>
      )}
    </ul>
  </Layout>
)

export default BlogListing

export const query = graphql`
query BlogPosts {
  allSitePage(filter: {path: {regex: "/blog/\\\\d{4}/" }}) {
    edges {
      node {
        context {
          post {
            date
            id
            slug
            title
          }
        }
        path
      }
    }
  }
}
`