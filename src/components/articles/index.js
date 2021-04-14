import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "./styles"
import { SiderBar } from "../sidebar"

export const Articles = ({ children }) => (
  <>
    <Container >
      <p>欢迎! 来到 Articles</p>
      <SiderBar></SiderBar>
    </Container>
  </>
)
