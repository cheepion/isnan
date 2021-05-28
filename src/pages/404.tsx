import React, { memo, FC } from "react"
import {Layout, Seo} from "../components"
import { PageProps } from "gatsby"

interface IProps {
  default: boolean
}
const NotFoundPage: FC<PageProps | IProps> = (props) => {
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
