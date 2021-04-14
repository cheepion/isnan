import * as React from "react"
import PropTypes from "prop-types"
import { HeaderSpace, Container, Footer } from './style'
import "./layout.css"

export const Layout = ({ children }) => (
  <>
    <HeaderSpace />
    <Container>
      <main>{children}</main>
      <Footer />
    </Container>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
