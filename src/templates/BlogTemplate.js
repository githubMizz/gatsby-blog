import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from "../layouts/Layout"
import Head from "../components/Head"

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const BlogTemplate = props => {
  const { title, publishedDate, body } = props.data.contentfulBlogPost;

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      }
    }
  }
  return (
    <Layout>
      <Head pageTitle={ title } />
      <h1>{ title }</h1>
      <p>{ publishedDate }</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}

export default BlogTemplate
