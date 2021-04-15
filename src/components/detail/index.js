import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "./style"

export const Detail = ({ children }) => {
  console.log(' children输出', children)
  return (
    <>
      <p>欢迎! 来到 Detail</p>
    </>
  )
}
