import React, { memo } from "react"
import { Layout, Main, Seo } from "../components"
// import { Main } from "../components/main"
import { Router } from "@reach/router"
import NotFound from './404'

const IndexPage = () => {
    return (
      <Layout>
        <Seo title="Home" />
        <Router>
          <Main path="/" />
          <NotFound default />
        </Router>
      </Layout>
    )
}
export default memo(IndexPage)
