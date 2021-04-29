import * as React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, TopArticle, ArticleList } from "./style"

export const Main = () => {

  return (
    <>
      {/* 头部细节存在于首页 */}
      {/* <HeaderSpace /> */}
      <Container>
        {/* 热门文章 */}
        <TopArticle>
          <div className="hot-article-left">
            <StaticImage src="../../assets/images/page1.png" width={220} quality={90} formats={["AUTO", "WEBP", "AVIF"]} alt="focus" />
          </div>
          <div className="hot-article-right">
            <h4>如何编写干净的代码单元</h4>
            <p>应用程序边缘的代码单元应该很小，独立并且只能做一件事。当调用它时，执行结果与你预想一致并且不会破坏其它东西。
              它就像已导入项目的经过良好测试的库。做一些细小而特定的事情，并正确的发挥作用。</p>
          </div>
        </TopArticle>
        {/* 图文列表 */}
        <ArticleList >
          <div className="article-content">
            <div className="article-top">
              <StaticImage src="../../assets/images/page2.png" width={200} quality={90} formats={["AUTO", "WEBP", "AVIF"]} alt="focus" />
            </div>
            <div className="article-bottom">
              <h4>如何使用useRef</h4>
              <p> 提供对DOM元素的引用 and 返回可变值，该可变值在渲染器中持久</p>
            </div>
          </div>
          <div className="article-content">
            <div className="article-top">
              <StaticImage src="../../assets/images/uc1.png" width={200} quality={90} formats={["AUTO", "WEBP", "AVIF"]} alt="focus" />
            </div>
            <div className="article-bottom">
              <h4>hook时代下的类组件 </h4>
              <p>ReactJS是一个足够成熟的库，成为开发人员的首选。当ReactJS启动时，它就具有很强的*类组件*概念。</p>
            </div>
          </div>
          <div className="article-content">
            <div className="article-top">
              <StaticImage src="../../assets/images/uc2.png" width={200} quality={90} formats={["AUTO", "WEBP", "AVIF"]} alt="focus" />
            </div>
            <div className="article-bottom">
              <h4>自动化GitHub：使用Node.js </h4>
              <p>拥有一个简单的CLI工具，该工具可以自动执行将本地git存储库推送到GitHub的过程</p>
            </div>
          </div>
        </ArticleList>
      </Container>
    </>
  )
}