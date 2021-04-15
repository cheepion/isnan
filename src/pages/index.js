import * as React from "react"
import { Layout, Main, Sidebar, Seo, Articles, Detail } from "../components"

const IndexPage = () => {

    return (
      <Layout>
        <Seo title="Home" />
        <Sidebar />
        {/* <Main /> */}
        <Articles />
        {/* <Detail /> */}
    </Layout>
    )
}
export default IndexPage
