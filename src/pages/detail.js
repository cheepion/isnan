import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Layout, Seo } from "../components"
import styled from 'styled-components'

const Container = styled.div`
  background-color: #ededed;
  margin-left: 20px;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
  .detail-header__img {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
`

const Detail = (props) => {
  console.log(' props输出', props)
  return (
    <>
    <Layout>
      <Seo title="welcome to my Article detail show" />
      <Container>
        <Content>
          <div className="detail-header__img">
            <StaticImage src="../../assets/images/mobx-write.png" width={420} quality={120} formats={["AUTO", "WEBP", "AVIF"]} alt="focus" />
          </div>
          <div>
            <h4>Because a Styled Component is the combination of the element and the rules that style it</h4>
            {/* 文章个人信息 */}
            <div>
              <span>头像和日期</span>
            </div>
            {/* 文章内容 */}
            <div>
              <div>结论说明</div>
              <div>详细文章展示</div>
            </div>
          </div>
        </Content>
      </Container>
    </Layout>
    </>
  )
}

export default Detail
