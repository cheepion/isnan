import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "./style"

const Sidebar = () => {
  // const Sidebar = ({ children }) => (.
  const data = useStaticQuery(graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            title
          }
          excerpt
        }
      }
      totalCount
    }
  }
  `)
  console.log('data', data)
  return (
    <>
      <Container>
        <p>欢迎! 来到 Sidebar, red color is show under the bottom</p>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            {/* <h3 css={css` margin-bottom: ${rhythm(1 / 4)}; `} > */}
            {node.frontmatter.title}{" "}
            {/* <span  css={css`  color: #bbb; `} >  — {node.frontmatter.date}
              </span> */}
            {/* </h3> */}
            <p>{node.excerpt}</p>
          </div>
        ))}
      </Container>

    </>
  )
}

export default Sidebar
