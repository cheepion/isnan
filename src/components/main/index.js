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
          <div className="hot-article-left">
            <StaticImage src="../../assets/images/page1.png" width={220} quality={90} formats={["AUTO", "WEBP", "AVIF"]} alt="focus" />
          </div>
          <div className="hot-article-right">
            <h4>styled-components is the result of wondering how we could enhance CSS for styling React component systems.</h4>
            <p>Apart from the improved experience for developers, styled-components provides:</p>
            {/* <div>
              <p>Apart from the improved experience for developers, styled-components provides:</p>
            </div> */}
          </div>
        </TopArticle>
        {/* 图文列表 */}
        <ArticleList >
          {[1, 2, 3].map((v, i) => (
            <div className="article-content" key={i}>
              <div className="article-top">
                <StaticImage src="../../assets/images/page2.png" width={200} quality={90} formats={["AUTO", "WEBP", "AVIF"]} alt="focus" />
              </div>
              <div className="article-bottom">
                <h4>styled-components is the result of wondering how we could enhance CSS </h4>
                <p>Apart from the improved experience for developers</p>
                {/* <p>详情内容描述</p>
                  <div>
                    <p>预览</p>
                  </div> */}
              </div>
            </div>
          ))}
        </ArticleList>
      </Container>
    </>
  )
}