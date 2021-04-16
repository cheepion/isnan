import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Personal, Catalog, CatalogContent } from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faNodeJs, faJs, faAudible } from "@fortawesome/free-brands-svg-icons"

export const Sidebar = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            title
          }
          excerpt
        }
      }
      totalCount
    }
  }
  `)
  console.log('data', data)
  return (
    <>
      <Container>
        {/* 个人简介 */}
        <Personal>
          <div>
            <p>Elvis</p>
            <StaticImage
                src="../../assets/images/gatsby-icon.png"
                width={60}
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="my photo"
                style={{ marginBottom: `1.45rem` }}
              />
            <div>图片加描述</div>
          </div>
          <a href="https://github.com/cheepion" style={{color: "blue"}}>contact me</a>
        </Personal>
        {/* 技术分类 */}
        <Catalog>
          <CatalogContent>
            <FontAwesomeIcon icon={faJs} size="lg" />
            <p>Javascript</p>
          </CatalogContent>
          <CatalogContent>
            <FontAwesomeIcon icon={faReact} size="lg" />
            <p>React</p>
          </CatalogContent>
          <CatalogContent>
            <FontAwesomeIcon icon={faAudible} size="lg" />
            <p>GatsbyJS</p>
          </CatalogContent>
          <CatalogContent>
            <FontAwesomeIcon icon={faNodeJs} size="lg" />
            <p>NestJS</p>
          </CatalogContent>
        </Catalog>
        {/* 主题文章切换 */}
        {/* <Footer>
          <div>左边箭头</div>
          <div>右边头箭</div>
        </Footer> */}
      </Container>
    </>
  )
}