import React, {useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Personal, Catalog, CatalogContent } from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faNodeJs, faJs, faFedora, faGithub } from "@fortawesome/free-brands-svg-icons"

export const Sidebar = () => {
  
  const data =  useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                date
                icon
                title
                type
              }
            }
          }
        }
      }
    `)
    console.log("data100", data.allMarkdownRemark.edges)
  const getMeData = (typer) => data.allMarkdownRemark.edges.filter(({node}) => node.frontmatter.type == typer)
  return (
    <>
      <Container>
        {/* 个人简介 */}
        <Personal>
          <div onClick={() => navigate('/')}>
            <p >简单记点东西</p>
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
            <FontAwesomeIcon icon={faGithub} size="lg" color="#5080EC" />
          </a>
        </Personal>
        {/* 技术分类 */}
        <Catalog >
          <CatalogContent onClick={ () => navigate(`/articles`, {state: {typer: getMeData('js') }})}>
            <FontAwesomeIcon icon={faJs} size="lg" />
            <p>Javascript</p>
          </CatalogContent>
          <CatalogContent onClick={ () => navigate(`/articles`, {state: {typer: getMeData('react') }})}>
            <FontAwesomeIcon icon={faReact} size="lg" />
            <p>React</p>
          </CatalogContent>
          <CatalogContent onClick={ () => navigate(`/articles`, {state: {typer: getMeData('gatsbyjs') }})}>
            <FontAwesomeIcon icon={faFedora} size="lg" />
            <p>GatsbyJS</p>
          </CatalogContent>
          <CatalogContent onClick={ () => navigate(`/articles`, {state: {typer: getMeData('nodejs') }})}>
            <FontAwesomeIcon icon={faNodeJs} size="lg" />
            <p>NestJS</p>
          </CatalogContent>
        </Catalog>
      </Container>
    </>
  )
}