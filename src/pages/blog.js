import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import blogStyles from "./blog.module.scss"
import Layout from "../layouts/Layout"
import Head from "../components/Head";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const { edges } = data.allContentfulBlogPost
  return (
    <Layout>
      <Head pageTitle="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {edges.map(edge => {
          return (
            <li key={edge.node.slug} className={blogStyles.post}>
              <Link
                to={`/blog/${edge.node.slug}`}
                className={blogStyles.linkItem}
              >
                <h2>{edge.node.title}</h2>
              </Link>
              <p>{edge.node.publishedDate}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
