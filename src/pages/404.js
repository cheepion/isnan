import * as React from "react"
import { Link } from 'gatsby'
import {Layout, Seo} from "../components"

const NotFoundPage = () => {
  console.log('404', Link)
  return (
    <Layout>
    <Seo title="404: Not found 大笨钟" />
    <h1>404: Not Found</h1>
    <br />
    <p >反方向的钟You just hit a route that doesn&#39;t exist... the sadness. </p>
  </Layout>
  )
}
export default NotFoundPage
