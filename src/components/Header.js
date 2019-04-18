import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const pages = [
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "Blog", route: "/blog" },
    { id: 3, name: "About", route: "/about" },
    { id: 4, name: "Contact", route: "/contact" },
  ]

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          { data.site.siteMetadata.title }
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          {pages.map(page => (
            <li key={page.id}>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to={page.route}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
