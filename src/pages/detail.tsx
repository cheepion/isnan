import React, { useState, useEffect, FC } from "react"
import { Layout, Seo } from "../components"
import styled from 'styled-components'
import { PageProps } from "gatsby"
import { useBreakpoint, BreakpointsObject } from 'gatsby-plugin-breakpoints';

const Detail: FC<PageProps> = (props) => {

  const breakpoints = useBreakpoint();
  const [localState, setLocalState] = useState<any>(props.location.state)
  const [articleData, setArticleData] = useState<IMarkdown | null>(null)

  // console.log('articleData', articleData)
  // 加载代码高亮
  useEffect( () => {
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

  useEffect(() => {
    if(localState) {
      setArticleData(localState.data)
    }
  }, [])
  
  return (
    <>
      <Layout>
        <Seo title="welcome to my Articles which a detail show" />
        <Container bp={breakpoints}>
          {
            articleData
            ?  <Content>
                {/* 顶部图片 */}
                <div className="detail-header__img">
                  <img src={articleData && articleData.frontmatter.headImg} alt="内容精简图"/>
                </div>
                <div className="detail-content">
                  <h4 style={{textAlign: 'center'}}>{articleData && articleData.frontmatter.title}</h4>
                  {/* 文章日期 */}
                  <div>
                    <p>{articleData && articleData.frontmatter.date}</p>
                  </div>
                  {/* 文章内容 */}
                  <div className="section">
                  <div dangerouslySetInnerHTML = {{ __html: articleData && articleData.html}}></div>
                  </div>
                </div>
              </Content>
            : <Content><p style={{marginTop: "1.2rem", color: 'yellowgreen', backgroundColor: '#fff', padding: 6}}>喜提鸭蛋, 但没鸭喜!</p></Content>
          }
        </Container>
      </Layout>
    </>
  )
}

export default Detail

const Container = styled.div<{bp: BreakpointsObject}>`
  width: 720px;
  background-color: #ededed;
  margin-left: ${props => props.bp.md ? "0" : "20px"};
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