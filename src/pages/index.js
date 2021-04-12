import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from '../components/sidebar'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi guys</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Sidebar></Sidebar>
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <p>
      <Link to="/page-2/">graphql is coming soon!</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
