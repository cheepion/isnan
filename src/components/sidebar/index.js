import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Personal, Catalog, CatalogContent } from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faNodeJs, faJs, faFedora, faGithub } from "@fortawesome/free-brands-svg-icons"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

export const Sidebar = () => {
  
  const data =  useStaticQuery(graphql`
    query {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
          edges {
            node {
              frontmatter {
                date
                icon
                title
                type
                headImg
              }
              html
            }
          }
        }
      }
    `)
  const getMeData = (typer) => data.allMarkdownRemark.edges.filter(({node}) => node.frontmatter.type === typer)
  const breakpoints = useBreakpoint();
  return (
    <>
      <Container>
        {/* 个人简介 */}
        <Personal>
          <div className="person-img" aria-hidden="true">
            <StaticImage
              src="../../assets/images/pro.jpg"
              width={110}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="my photo"
              className="inline-img"
              onClick ={() => navigate('/')}
            />
            <div className="git-icon">
              <FontAwesomeIcon icon={faGithub} size="lg" color="#7d7d7d" aria-hidden="true" onClick ={() => navigate('https://github.com/cheepion')} />
            </div>
          </div>
        </Personal>
        {/* 技术分类 */}
        <Catalog>
          <CatalogContent onClick={ () => navigate(`/articles`, {state: {typer: getMeData('js') }})}>
            <FontAwesomeIcon icon={faJs} size="lg" />
            <p>Javascript</p>
          </CatalogContent>
          <CatalogContent onClick ={ () => navigate(`/articles`, {state: {typer: getMeData('react') }})}>
            <FontAwesomeIcon icon={faReact} size="lg" />
            <p>React</p>
          </CatalogContent>
          <CatalogContent onClick ={ () => navigate(`/articles`, {state: {typer: getMeData('gatsbyjs') }})}>
            <FontAwesomeIcon icon={faFedora} size="lg" />
            <p>GatsbyJS</p>
          </CatalogContent>
          <CatalogContent onClick ={ () => navigate(`/articles`, {state: {typer: getMeData('nodejs') }})}>
            <FontAwesomeIcon icon={faNodeJs} size="lg" />
            <p>NestJS</p>
          </CatalogContent>
        </Catalog>
      </Container>
    </>
  )
}