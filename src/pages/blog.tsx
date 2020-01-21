import React from "react"

import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import BlogPost from "../models/BlogPost"
import BlogService from "../services/blog-service"

interface Props {
  data: any;
}

const BlogListing = (props: Props) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blogg med {props.data.allSitePage.edges.length} inlägg</h1>
    <ul>
      {props.data.allSitePage.edges.map((edge: any) =>
        <li><Link to={BlogService.getBlogPostUrl(edge.node.context.post as BlogPost)}>{edge.node.context.post.title}</Link> <small>{edge.node.context.post.date}</small></li>
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