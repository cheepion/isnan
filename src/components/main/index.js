import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "./style"

const Main = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <HeaderSpace />
      <Container>
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main