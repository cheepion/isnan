import React, { memo, useCallback } from "react"
import { inject, observer} from "mobx-react"
import { Layout, Seo } from "../components"
import styled from 'styled-components'
import { navigate } from "gatsby"

// wrap Container
const Container = styled.div`
  background-color: #ededed;
  width: 620px;
  margin-left: 20px;
`
const ArticlesBlock = styled.div`
  display: flex;
  flex-direction: column;
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
  }
  .other-result {
    margin-top: 1.2rem;
    color: yellowgreen;
    background-color: #fff;
     padding: 6;
  }
`

const Articles = (catalog) => {

  // console.log("catalog", catalog)
  const articlelist = catalog.location.state || ""

  const goArticleDetail = useCallback((article) => {
    navigate('/detail/', {state: { data: article}})
  }, [articlelist])

  return (
    <>
      <Layout>
      <Seo title="welcome to my Articles show" />
      <Container >
        {/* 文章列表 */}
        {
          articlelist 
          ? <ArticlesBlock>
              {/* 标题栏 */}
              <div className="article-header">
                <div className="article-header__left">
                  <span>{articlelist && articlelist.typer[0].node.frontmatter.type} </span>
                </div>
                <div className="article-header__right">
                  {/* <span>More</span> */}
                </div>
              </div>
              {/* 内容 */}
              {articlelist && articlelist.typer.map(({node}, index) => (
                <div className="article-content" key={node} aria-hidden="true"
                  style={index === articlelist.typer.length-1 ? {paddingBottom: "10px"} : null} 
                  onClick={() => goArticleDetail(node)}
                >
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

export default memo(inject('articlesStore')(observer(Articles)))