import About from "../components/about"
import Contact from "../components/contact"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import React from "react"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Joseph Henry Passineau" keywords={[`portfolio`, `resume`, `project`]} />
    <Hero />
    <Portfolio />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
