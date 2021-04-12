import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "../assets/styles/articlesStyle"
import SiderBar from "../components/sidebar"

const Articles = ({ children }) => (
  <>
    <Container >
    <p>欢迎! 来到 Articles</p>
    <SiderBar></SiderBar>
    </Container>
    
  </>
)

export default Articles
