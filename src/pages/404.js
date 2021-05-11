import * as React from "react"
import { Link } from 'gatsby'
import {Layout, Seo} from "../components"

const NotFoundPage = () => {
  console.log('404', Link)
  return (
    <Layout>
    <Seo title="404: Not found" />
    <h1>404: 无无无, 别开脑洞!</h1>
    <br />
    <p >反方向的钟</p>
  </Layout>
  )
}
export default NotFoundPage
