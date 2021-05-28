import React, { useCallback, FC, useState, useEffect } from "react"
import { Layout, Seo } from "../components"
import styled from 'styled-components'
import { navigate, PageProps } from "gatsby"

// wrap Container
const Container = styled.div`
  background-color: #ededed;
  width: 620px;
  margin-left: 20px;
`
const ArticlesBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 800px;
  .article-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #5080ec;
    color: #fff;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    .article-header__left {
      margin-left: 10px;
      padding: 6px;
    }
    .article-header__right {
      margin-right: 10px;
      padding: 6px;
      .article-more {
        cursor: pointer;
      }
    }
  }
  .article-content {
    display: flex;
    flex-direction: row;
    padding: 8px 16px 0px;
    background-color: #fff;
    overflow: hidden;
    .articleDate {
      font-family: sans-serif;
      font-weight: 500;
      font-size: 14px;
      margin-right: 8px;
    }
    :hover {
      color: #5080ec;
    }
    label {
      cursor: pointer;
    }
  }
  .article-content:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding-bottom: 12px
  }
  .other-result {
    margin-top: 1.2rem;
    color: yellowgreen;
    background-color: #fff;
     padding: 6;
  }
`

const Articles:FC<PageProps> = (props) => {

  console.log("props", props)
  const [catalog, setCatalog] = useState<any>(props.location.state)
  const [reload, setLoad] = useState(false)
  const [articles, setArticles] = useState<Array<any> | null>(null)
  
  useEffect(() => {
    if(catalog) {
      setArticles(catalog.typer)
      setLoad(false)
    }
  }, [articles, reload])

  console.log("articles", articles)
  // let articlelist = catalog.location.state || ""
  // const hasTyper = !!articlelist.typer || ""

  // const { queryTypeAritcles } = catalog.articlesStore
  // const artilceList = queryTypeAritcles(hasTyper)
  // console.log('llsi', artilceList)
  const readomSortArticles = () => {
    const sortArticle = articles && articles.sort(() => Math.random()>.5 ? -1 : 1)
    console.log('11234', sortArticle)
    setArticles(sortArticle)
    setLoad(true)
  }

  const goArticleDetail = useCallback((article) => {
    navigate('/detail/', {state: { data: article}})
  }, [])

  return (
    <>
      <Layout>
      <Seo title="welcome to my Articles show" />
      <Container >
        {/* 文章列表 */}
        {
          articles 
          ? <ArticlesBlock>
              {/* 标题栏 */}
              <div className="article-header">
                <div className="article-header__left">
                  <span>{articles && articles[0].node.frontmatter.type} </span>
                </div>
                <div className="article-header__right">
                  <span className="article-more" onClick={readomSortArticles} aria-hidden="true">Readom</span>
                </div>
              </div>
              {/* 内容 */}
              {articles && articles.map(({node}, index) => (
                <div className="article-content" key={index} aria-hidden="true"onClick={() => goArticleDetail(node)}>
                  <label className="articleDate">{node.frontmatter.date}</label>
                  <label>{node.frontmatter.title}</label>
                </div>
              ))}
            </ArticlesBlock>
          : <ArticlesBlock><p className="other-result">喜提鸭蛋, 但没鸭喜!</p></ArticlesBlock>
        }
      </Container>
    </Layout>
    </>
  )
}

export default Articles