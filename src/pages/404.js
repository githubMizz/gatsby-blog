import React from 'react'
import { Link } from 'gatsby'

import Layout from "../layouts/Layout";
import Head from "../components/Head"
const NotFound = () => {
  return (
    <Layout>
      <Head pageTitle="Oops" />
      <p> Page not found .. :(( </p> 
      <Link to="/"> Would you like to try this page</Link>
    </Layout>
  )
}

export default NotFound
