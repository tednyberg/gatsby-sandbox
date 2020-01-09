import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ pageContext }) => (
  <Layout>
    <SEO title={pageContext.post.title} />
    <h1>{pageContext.post.title}</h1>
    <p>{pageContext.post.description}</p>
    <Link to="/blog">Tillbaka till bloggen</Link>
  </Layout>
)

export default BlogPost