import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { inject, observer} from "mobx-react"
import { Layout, Sidebar, Seo } from "../components"
import styled from 'styled-components'


// wrap Container
const Container = styled.div`
  background-color: #ededed;
`

const Articles = ({counterStore, articlesStore}) => {
  console.log("articles ", counterStore)
  console.log('articlesStore', articlesStore)
  return (
    <>
      <Layout>
        <Seo title="Articles" />
        <Container >
        <Seo title="welcome to my Articles show" />
        <p onClick={ () => articlesStore.showMsg()} >欢迎! 来到 Articles {counterStore.Count}</p>
        <div>
          <button onClick={() => counterStore.Increment()}>Add</button>
          <button onClick={() => counterStore.Decrement()}>Subtract</button>
        </div>
      </Container>
    </Layout>

    </>
  )
}

export default inject("counterStore", 'articlesStore')(observer(Articles))