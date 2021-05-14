import * as React from "react"
import PropTypes from "prop-types"
import { Sidebar } from '../index'
import { HeaderSpace, Container, Footer } from './style'
import "./layout.css"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

export const Layout = ({ children }) => {
  const breakpoints = useBreakpoint();
  return (
    <>
      <HeaderSpace />
        <Container bp={ breakpoints }>
          <Sidebar />
          <main>{children}</main>
        </Container>
      <Footer />
    </>
  )

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
