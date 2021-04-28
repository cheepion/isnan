import * as React from "react"
import { Layout, Main, Seo } from "../components"
import { Link } from 'gatsby'

const IndexPage = () => {
    console.log('link', Link)
    return (
      <Layout>
        <Seo title="Home" />
        <Main />
    </Layout>
    )
}
export default IndexPage
