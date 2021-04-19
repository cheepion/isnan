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
`

const Articles = ({counterStore, articlesStore}) => {
  console.log("articles ", counterStore)
  // console.log('articlesStore', articlesStore.getArticles)
  // const goods = useStaticQuery(articlesStore.getArticles)
  // console.log('goods date', goods)
  return (
    <>
      <Layout>
      <Seo title="welcome to my Articles show" />
      <Container >
        {/* 文章列表 */}
        <div>
          {/* 标题栏 */}
          <div>
            {/* 标题栏 左*/}
            <div>
              <FontAwesomeIcon icon={faSteam} size="lg" />
              <span >Javascript </span>
              {/* <span onClick={articlesStore.getArticles}>Javascript </span> */}
            </div>
            {/* 标题栏 右*/}
            <div>
              <span>More </span>
            </div>
          </div>
          {/* 内容 */}
          <div>
            <p>日期</p>
            <p>标题头部文字</p>
          </div>
        </div>
      </Container>
    </Layout>

    </>
  )
}

export default inject("counterStore", 'articlesStore')(observer(Articles))

{/* <p onClick={ () => articlesStore.showMsg()} >欢迎! 来到 Articles {counterStore.Count}</p>
<div>
  <button onClick={() => counterStore.Increment()}>Add</button>
  <button onClick={() => counterStore.Decrement()}>Subtract</button>
</div> */}