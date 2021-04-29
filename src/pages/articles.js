import * as React from "react"
import { inject, observer} from "mobx-react"
import { Layout, Seo } from "../components"
import styled from 'styled-components'
import {  navigate } from "gatsby"

// wrap Container
const Container = styled.div`
  background-color: #ededed;
  margin-left: 20px;
`
const ArticlesBlock = styled.div`
  display: flex;
  flex-direction: column;
  .article-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 600px;
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
    padding: 6px 16px 0px;
    background-color: #fff;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
    :hover {
      color: #5080ec;
    }
    label {
      cursor: pointer;
    }
  }
`

const Articles = (catalog) => {

  const [itemData, setData] = React.useState([])
  console.log("catalog", catalog)

  React.useEffect(() => {
    if(!catalog.location.state.typer) navigate('/')
    setData(catalog.location.state.typer)
  }, [catalog.location.state])

  const goArticleDetail = (article) => {
    navigate('/detail/', {state: { data: article}})
  }

  return (
    <>
      <Layout>
      <Seo title="welcome to my Articles show" />
      <Container >
        {/* 文章列表 */}
          <ArticlesBlock>
          {/* 标题栏 */}
          <div className="article-header">
            <div className="article-header__left">
              <span>{ itemData.length && itemData[0].node.frontmatter.type} </span>
            </div>
            <div className="article-header__right">
              <span>More </span>
            </div>
          </div>
          {/* 内容 */}
          {itemData.map(({node}, index) => (
            <div className="article-content" key={index} aria-hidden="true"
              style={index === itemData.length-1 ? {paddingBottom: "10px"} : null} 
              onClick={() => goArticleDetail(node)}
            >
              <label style={{fontWeight: 'bold', marginRight: '8px'}}>{node.frontmatter.date}</label>
              <label>{node.frontmatter.title}</label>
            </div>
          ))}
        </ArticlesBlock>
      </Container>
    </Layout>
    </>
  )
}

export default inject("counterStore", 'articlesStore')(observer(Articles))