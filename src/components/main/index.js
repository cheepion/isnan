import React, { memo, useEffect } from "react"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, TopArticle, ArticleList } from "./style"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { inject, observer} from "mobx-react"
import uc0 from '/static/img/uc0.png'
import uc1 from '/static/img/uc1.png'
import uc2 from '/static/img/uc2.png'


const Main = ( { mainStore } ) => {
  
  console.log('本地数据', mainStore )
  let imgGroup = [uc0, uc1, uc2]
  const breakpoints = useBreakpoint();
  const { localStore } = mainStore

  console.log('localStore', localStore.queryArticle)
  console.log('localStore1', mainStore.queryArticle1)
  // console.log('subList', subList)

  const goArticleDetail = (article) => {
    navigate('/detail/', {state: { data: article}})
  }

  const goStore = () => {
    console.log('12456', localStore)
    mainStore.getArticles()
    console.log('32134', localStore)
  }

  // useEffect(() => {
  //   mainStore.getArticles()
  // }, [])

  return (
    <>
      <Container bp={breakpoints}>
        {/* 热门文章 */}
        <TopArticle>
          <div className="hot-article-left" onClick={goStore}>
            <StaticImage src="../../assets/images/page1.png" width={220} quality={90} formats={["AUTO", "WEBP", "AVIF"]} alt="focus" />
          </div>
          {/* { getHotTitle && getHotTitle().map(({node}, i) => (
            <div key={i} className="hot-article-right" aria-hidden="true" onClick={() => goArticleDetail(node)} >
              <h4>{node.frontmatter.title}</h4>
              <p>{node.frontmatter.subTitle}</p>
            </div>
          )) } */}

        </TopArticle>
        {/* 图文列表 */}
        <ArticleList >
          {/* { getSubTitle && getSubTitle().map(({node}, i) => (
            <div key={i} className="article-content" aria-hidden="true" onClick={() => goArticleDetail(node)}>
              <div className="article-top">
                <div style={{ width: `220px` }}>
                  <img src={imgGroup[i]} alt="react subtitle" />
                </div>
              </div>
              <div className="article-bottom">
                <h4>{node.frontmatter.title}</h4>
                <p>{node.frontmatter.subTitle}</p>
              </div>
            </div>
          ))} */}
        </ArticleList>
      </Container>
    </>
  )
}

export default memo(inject('mainStore')(observer(Main)))