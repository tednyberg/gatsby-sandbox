import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {
  pageContext: any
}

const BlogPost = (props: Props) => (
  <Layout>
    <SEO title={props.pageContext.post.title} />
    <h1>{props.pageContext.post.title}</h1>
    <p>{props.pageContext.post.description}</p>
    <Link to="/blog">Tillbaka till bloggen</Link>
  </Layout>
)

export default BlogPost