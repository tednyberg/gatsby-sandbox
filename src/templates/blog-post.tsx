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
    <small>Publicerad: {props.pageContext.post.date}</small>
    <small><strong style={ {textTransform: "uppercase", display: "block", marginBottom: 10, marginTop: 20 } }>Introduktion:</strong></small>
    <p>{props.pageContext.post.description}</p>
    <small><strong style={ {textTransform: "uppercase", display: "block", marginBottom: 10 } }>Redaktörsinnehåll:</strong></small>
    <p dangerouslySetInnerHTML={{ __html: props.pageContext.post.mainBody }}></p>
    <small><strong style={ {textTransform: "uppercase", display: "block", marginBottom: 10, marginTop: 20 } }>Sidfot:</strong></small>
    <Link to="/blog">Tillbaka till bloggen</Link>
  </Layout>
)

export default BlogPost