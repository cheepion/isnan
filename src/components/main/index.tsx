import React, { memo, useState } from "react"
import { navigate, PageProps, useStaticQuery, graphql } from "gatsby"
import { Container, TopArticle, ArticleList } from "./style"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import uc0 from '/static/img/uc0.png'
import uc1 from '/static/img/uc1.png'
import uc2 from '/static/img/uc2.png'
import topPic from '/static/img/page1.png'

const Main = (props: any) => {

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query title {
      allMarkdownRemark(
        filter: {frontmatter: {type: {eq: "react"}}}
        sort: {fields: frontmatter___date, order: DESC}
      ) {
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
  const [top, setTop] = useState(allMarkdownRemark.edges[0].node)
  const [sub, setSub] = useState(allMarkdownRemark.edges.filter((_: any, index: number) => index > 0 && index < 4))
  const [imgGroup, setImgGroup] = useState([uc0, uc1, uc2])
  const breakpoints = useBreakpoint();

  const goArticleDetail = (article: any) => {
    navigate('/detail/', { state: { data: article } })
  }

  return (
    <>
      <Container bp={breakpoints}>
        {/* 热门文章 */}
        <TopArticle>
          <div className="hot-article-left">
            <img src={topPic} alt="focus" style={{ width: '220px', marginBottom: 0 }} />
          </div>
          {top &&
            <div className="hot-article-right" aria-hidden="true" onClick={() => goArticleDetail(top)} >
              <h4>{top.frontmatter.title}</h4>
              <p>{top.frontmatter.subTitle}</p>
            </div>
          }
        </TopArticle>
        {/* 图文列表 */}
        <ArticleList >
          {sub && sub.map(({ node }: any, i: number) => (
            <div key={i} className="article-content" aria-hidden="true" onClick={() => goArticleDetail(node)}>
              <div className="article-top">
                <div style={{ width: `220px` }}>
                  <img src={imgGroup[i]} alt="react subtitle" />
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

export default memo(Main)