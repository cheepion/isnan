import * as React from "react"
import { Layout, Seo } from "../components"
import styled from 'styled-components'

const Detail = (props) => {
  const articleData = props.location.state || ""
  // console.log('默认值', props)
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
  
  return (
    <>
      <Layout>
        <Seo title="welcome to my Articles which a detail show" />
        <Container>
          {
            articleData
            ?  <Content>
                {/* 顶部图片 */}
                <div className="detail-header__img">
                  <img src={articleData && articleData.data.frontmatter.headImg} alt="内容精简图"/>
                </div>
                <div className="detail-content">
                  <h3 style={{textAlign: 'center'}}>{articleData && articleData.data.frontmatter.title}</h3>
                  {/* 文章日期 */}
                  <div>
                    <p>{articleData && articleData.data.frontmatter.date}</p>
                  </div>
                  {/* 文章内容 */}
                  <div className="section">
                  <div dangerouslySetInnerHTML = {{ __html: articleData && articleData.data.html}}></div>
                  </div>
                </div>
              </Content>
            : <Content><p style={{marginTop: "1.2rem", color: 'yellowgreen'}}>喜提鸭蛋, 但没鸭喜!</p></Content>
          }
        </Container>
      </Layout>
    </>
  )
}

export default Detail

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
    img {
      width: 100%;
      padding: 10px 20px;
      border-radius: 30px;
    }
  }
  .detail-content {
    width: 660px;
    margin-top: -300px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    opacity: 0.9;
  }
`