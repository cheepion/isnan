import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Container, Personal, Catalog, Footer } from "./style"

export const Sidebar = () => {
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
        {/* 个人简介 */}
        <Personal>
          <div>作者信息
            <Link to={"/articles"}>前往502</Link>
          </div>
          <div>图片加描述</div>
          <div>github 连接</div>
        </Personal>
        {/* 技术分类 */}
        <Catalog>
          <div>
            <p>icon</p>
            <p>Javascript</p>
          </div>
          <div>
            <p>icon</p>
            <p>React</p>
          </div>
          <div>
            <p>icon</p>
            <p>GatsbyJS</p>
          </div>
          <div>
            <p>icon</p>
            <p>NestJS</p>
          </div>
        </Catalog>
        {/* 主题文章切换 */}
        <Footer>
          <div>左边箭头</div>
          <div>右边头箭</div>
        </Footer>
      </Container>
    </>
  )
}