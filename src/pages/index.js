import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/Layout"

const Index = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>
        I'm Sebastian, a wannabe developer living in the Netherlands.
      </h2>
      <p>
        Need a cheap amateur developer? <Link to="/contact">Contact me!!</Link>
      </p>
    </Layout>
  )
}

export default Index
