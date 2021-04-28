import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Layout, Seo } from "../components"
import styled from 'styled-components'

const Container = styled.div`
  width: 740px;
  background-color: #ededed;
  margin-left: 20px;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: #f6f6f6;
  .detail-header__img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  .detail-content {
    z-index: 10;
    width: 660px;
    margin-top: -10px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
  }
`

const Detail = (props) => {
  console.log(' props输出', props)
  const articleData = props.location.state || ""
  return (
    <>
    <Layout>
      <Seo title="welcome to my Article detail show" />
      <Container>
        <Content>
          <div className="detail-header__img">
            <StaticImage src="../assets/images/mobx-write.png" width={520} quality={80} formats={["AUTO", "WEBP", "AVIF"]} alt="focus" />
          </div>
          <div className="detail-content">
            <h4>{articleData && articleData.data.frontmatter.title}</h4>
            {/* 文章个人信息 */}
            <div>
              <span>{articleData && articleData.data.frontmatter.date}</span>
            </div>
            {/* 文章内容 */}
            <div className="section">
              {articleData && articleData.data.excerpt}
            </div>
          </div>
        </Content>
      </Container>
    </Layout>
    </>
  )
}

export default Detail
