import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Container, TopArticle, ArticleList } from "./style"

export const Main = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    {/* 头部细节存在于首页 */}
      {/* <HeaderSpace /> */}
      <Container>
        {/* 热门文章 */}
        <TopArticle>
          <div>大图展示</div>
          <div>
            <div>
              <h3>文字标题</h3>
              <p>详情内容描述</p>
              <div>
                <p>预览</p>
              </div>
            </div>
          </div>
        </TopArticle>
        {/* 图文列表 */}
        <ArticleList>
          <div>图片展示</div>
          <div>
            <h3>文字标题</h3>
            <p>详情内容描述</p>
            <div>
              <p>预览</p>
            </div>
          </div>
        </ArticleList>
      </Container>
    </>
  )
}

// Main.propTypes = {
//   children: PropTypes.node.isRequired,
// }