import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Personal, Catalog, CatalogContent } from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faNodeJs, faJs, faFedora, faGithub, faYarn } from "@fortawesome/free-brands-svg-icons"

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
          </div>
          <a href="https://github.com/cheepion" style={{color: "blue"}}>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </Personal>
        {/* 技术分类 */}
        <Catalog>
          <CatalogContent to="articles">
            <FontAwesomeIcon icon={faJs} size="lg" />
            <p>Javascript</p>
          </CatalogContent>
          <CatalogContent>
            <FontAwesomeIcon icon={faReact} size="lg" />
            <p>React</p>
          </CatalogContent>
          <CatalogContent>
            <FontAwesomeIcon icon={faFedora} size="lg" />
            <p>GatsbyJS</p>
          </CatalogContent>
          <CatalogContent>
            <FontAwesomeIcon icon={faNodeJs} size="lg" />
            <p>NestJS</p>
          </CatalogContent>
        </Catalog>
      </Container>
    </>
  )
}