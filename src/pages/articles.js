import * as React from "react"
import PropTypes from "prop-types"
import { inject, observer} from "mobx-react"
import { Layout, Seo } from "../components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSteam, faJs } from "@fortawesome/free-brands-svg-icons"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"

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
    .article-header__left {
      background-color: #ff2211
    }
    .article-header__right {
      background-color: #ff11ff
    }
  }
  .article-content {
    display: flex;
    flex-direction: row;
  }
`

const Articles = ({counterStore, articlesStore}) => {
  console.log("articles ", counterStore)
  return (
    <>
      <Layout>
      <Seo title="welcome to my Articles show" />
      <Container >
        {/* 文章列表 */}
        {[1,2,3,4].map((v, i) => (
          <ArticlesBlock key={i}>
          {/* 标题栏 */}
          <div className="article-header">
            {/* 标题栏 左*/}
            <div className="article-header__left">
              <FontAwesomeIcon icon={faSteam} size="lg" />
              <span >Javascript </span>
            </div>
            {/* 标题栏 右*/}
            <div className="article-header__right">
              <span>More </span>
            </div>
          </div>
          {/* 内容 */}
          {[1,2,3,4,5].map((item, index) => (
            <div className="article-content" key={index}>
              <p>日期</p>
              <p>标题头部文字{index}</p>
            </div>
          ))}
        </ArticlesBlock>
        ))}
      </Container>
    </Layout>
    </>
  )
}

export default inject("counterStore", 'articlesStore')(observer(Articles))