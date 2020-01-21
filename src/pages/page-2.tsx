import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Sida Två" />
    <h1>Sida två</h1>
    <p>Välkommen till den andra sidan, sida 2.</p>
    <Link to="/">Tillbaka till startsidan</Link>
  </Layout>
)

export default SecondPage
