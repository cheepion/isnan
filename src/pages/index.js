import * as React from "react"
import { Layout, Main, Seo } from "../components"
import { Router } from "@reach/router"
import Detail from './detail'
import Articles from './articles'
import NotFound from './404'

const IndexPage = () => {
    return (
      <Layout>
        <Seo title="Home" />
        
        <Router>
        {/* <Home path="/" /> */}
        <Main path="/" />
        {/* <Detail path="/detail/" />
        <Articles path="/articles" /> */}
        {/* <Dashboard path="/dashboard" />
        // <Detail path="/" />
        <Article path="/" />
        <Invoices path="invoices">
          <InvoicesIndex path="/" />
          <Invoice path=":invoiceId" />
        </Invoices> */}
        <NotFound default />
      </Router>
    </Layout>
    )
}
export default IndexPage
