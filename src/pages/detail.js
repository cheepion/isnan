import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Layout, Seo } from "../components"
import styled from 'styled-components'

export const Container = styled.div`

`

const Detail = ({ children }) => {
  console.log(' children输出', children)
  return (
    <>
    <Layout>
      <div>
        <h1>标题内容</h1>
        {/* <h1>{post.frontmatter.title}</h1> */}
        <p>内容文本</p>
        {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      </div>
    </Layout>
    </>
  )
}

export default Detail
