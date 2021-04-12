import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "./style"

const Sidebar = ({ children }) => (
  <>
    <Container>
      <p>欢迎! 来到 Sidebar, red color is show under the bottom</p>
    </Container>
    
  </>
)

export default Sidebar
