import * as React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, TopArticle, ArticleList } from "./style"
import Image from '../../utils/Image';

export const Main = () => {

  const data =  useStaticQuery(graphql`
    query title {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "react"}}}) {
        edges {
          node {
            frontmatter {
              title
              subTitle
              date
              icon
              type
              headImg
            }
            html
          }
        }
      }
    }
  `)
  const getHotTitle = () => data.allMarkdownRemark.edges.filter(( _, index) => index === 0)
  const getSubTitle = () => data.allMarkdownRemark.edges.filter(( _, index) => index > 0 && index < 4)

  const goArticleDetail = (article) => {
    navigate('/detail/', {state: { data: article}})
  }

  return (
    <>
      <Container>
        {/* 热门文章 */}
        <TopArticle>
          <div className="hot-article-left">
            <StaticImage src="../../assets/images/page1.png" width={220} quality={90} formats={["AUTO", "WEBP", "AVIF"]} alt="focus" />
          </div>
          {getHotTitle && getHotTitle().map(({node}, i) => (
            <div key={i} className="hot-article-right" aria-hidden="true" onClick={() => goArticleDetail(node)} >
              <h4>{node.frontmatter.title}</h4>
              <p>{node.frontmatter.subTitle}</p>
            </div>
          )) }

        </TopArticle>
        {/* 图文列表 */}
        <ArticleList >
          {getSubTitle && getSubTitle().map(({node}, i) => (
            <div key={i} className="article-content" aria-hidden="true" onClick={() => goArticleDetail(node)}>
              <div className="article-top">
                <div style={{ width: `220px` }}>
                  <Image alt="Gatsby in Space" filename={`uc${i}.png`} />
                </div>
              </div>
              <div className="article-bottom">
                <h4>{node.frontmatter.title}</h4>
                <p>{node.frontmatter.subTitle}</p>
              </div>
            </div>
          ))}
        </ArticleList>
      </Container>
    </>
  )
}