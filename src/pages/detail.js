import * as React from "react"
// StaticImage
import { getImage, StaticImage, GatsbyImage } from "gatsby-plugin-image"
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
  const [img, setImg] = React.useState("../assets/images/mobx-write.png")
  const articleData = props.location.state || ""
  // 加载代码高亮
  React.useEffect( () => {
    async function inHighCodeShow() {
      try {
        const deckdeckgoHighlightCodeLoader = require("@deckdeckgo/highlight-code/dist/loader")
        await deckdeckgoHighlightCodeLoader.defineCustomElements(window);
      } catch (err) {
        console.error(err);
      }
    }
    inHighCodeShow()
  }, [])
  // 取不同文章里的图片值
  React.useEffect( () => {
    async function waitForImg() {
      await setImg(articleData.data.frontmatter.headImg)
    }
    waitForImg()
    console.log('444444', img)
  }, [])
  
  return (
    <>
    <Layout>
      <Seo title="welcome to my Article detail show" />
      <Container>
        <Content>
          <div className="detail-header__img">
            {/* { articleData && <StaticImage src={articleData.data.frontmatter.headImg} width={520} quality={80} formats={["AUTO", "WEBP", "AVIF"]} alt="focus" />} */}
            {/* <StaticImage src={img} width={520} quality={80} formats={["AUTO", "WEBP", "AVIF"]} alt="focus" /> */}
            {/* <GatsbyImage image={img} alt="focus" /> */}
          </div>
          <div className="detail-content">
            <h3 style={{textAlign: 'center'}}>{articleData && articleData.data.frontmatter.title}</h3>
            {/* 文章个人信息 */}
            <div>
              <p>{articleData && articleData.data.frontmatter.date}</p>
            </div>
            {/* 文章内容 */}
            <div className="section">
            <div dangerouslySetInnerHTML = {{ __html: articleData && articleData.data.html}}></div>
            </div>
          </div>
        </Content>
      </Container>
    </Layout>
    </>
  )
}

export default Detail
