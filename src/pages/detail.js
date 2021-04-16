import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

export const Container = styled.div`

`

const Detail = ({ children }) => {
  console.log(' children输出', children)
  return (
    <>
      <p>欢迎! 来到 Detail</p>
    </>
  )
}

export default Detail
