import Hero from "../components/hero"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`portfolio`, `resume`, `project`]} />
    <Hero />
  </Layout>
)

export default IndexPage
