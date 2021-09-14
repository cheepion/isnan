import React, { FC }  from "react"
import PropTypes from "prop-types"
import { Sidebar } from '../index'
import { HeaderSpace, Container, Footer } from './style'
import "./layout.css"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { Link } from "gatsby"

export const Layout:FC = ({ children }) => {

  const breakpoints = useBreakpoint();
  return (
    <>
      <HeaderSpace />
        <Container bp={ breakpoints }>
          <Sidebar />
          <main>{children}</main>
        </Container>
      <Footer>
        <Link to="https://beian.miit.gov.cn/" className={"footer-link"}>粤ICP备2021064856号</Link>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
