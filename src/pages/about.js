import React from "react"
import { Link } from "gatsby"
import Layout from "../layouts/Layout"
import Head from "../components/Head"
const about = () => {
  return (
    <Layout>
      <Head pageTitle="About" />
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
        temporibus ullam nobis sapiente esse exercitationem, iure sit deserunt
        vitae, ratione earum incidunt minus natus eius commodi nihil nulla modi
        autem!
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        recusandae ullam, consectetur aperiam dolorum aliquam dolorem, eum optio
        rerum pariatur cum iusto similique. Quam, natus provident! Enim officia
        porro eaque?
      </p>

      <Link to="/contact">Contact me!</Link>
    </Layout>
  )
}

export default about
