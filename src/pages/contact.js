import React from "react"
import Layout from "../layouts/Layout"
import Head from "../components/Head"
const contact = () => {
  return (
    <Layout>
    <Head pageTitle="Contact" />
      <h1>Contact</h1>

      <p>The best way to reach me is: ...</p>
      <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
        {" "}
        Google me!
      </a>
    </Layout>
  )
}

export default contact
