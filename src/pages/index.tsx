import React, { memo, FC } from "react"
import { Layout, Main, Seo } from "../components"
import { Router } from "@reach/router"
import { PageProps } from "gatsby"
import NotFoundPage from './404'

const IndexPage: FC<PageProps> = () => {
    return (
      <Layout>
        <Seo title="Home" />
        <Router>
          <Main path="/" />
          <NotFoundPage default />
        </Router>
      </Layout>
    )
}
export default memo(IndexPage)
