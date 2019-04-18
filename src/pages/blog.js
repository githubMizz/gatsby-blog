import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import blogStyles from "./blog.module.scss";
import Layout from "../layouts/Layout"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(post => {
          return (
            <li key={post.node.frontmatter.title} >
              <Link to={`/blog/${post.node.fields.slug}`} className={blogStyles.linkItem}>
                <h2>{post.node.frontmatter.title}</h2>
              </Link>
              <p>{post.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
