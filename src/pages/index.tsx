import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Clock from "../components/clock"

const IndexPage = () => (
  <Layout>
    <SEO title="Gatsby-test" />
    <h1>Välkommen.</h1>
    <p>Det här är en statisk hemsida byggd med Gatsby.</p>
    <p>Klockan är just nu: <Clock /></p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h2>Meny</h2>
    <ul>
      <li><Link to="/page-2/">Gå till sida 2</Link></li>
      <li><Link to="/blog/">Gå till bloggen</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
