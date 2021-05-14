import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Personal, Catalog } from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faNodeJs, faJs, faFedora, faGithub } from "@fortawesome/free-brands-svg-icons"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

export const Sidebar = () => {
  
  const breakpoints = useBreakpoint();
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
  
  return (
    <>
      <Container bp={breakpoints}>
        {/* 个人简介 */}
        <Personal bp={breakpoints}>
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
        <Catalog bp={breakpoints}>
          <div onClick={ () => navigate(`/articles`, {state: {typer: getMeData('js') }})}  aria-hidden="true">
            <FontAwesomeIcon icon={faJs} size="lg" />
            <p>Javascript</p>
          </div>
          <div onClick ={ () => navigate(`/articles`, {state: {typer: getMeData('react') }})}  aria-hidden="true">
            <FontAwesomeIcon icon={faReact} size="lg" />
            <p>React</p>
          </div>
          <div onClick ={ () => navigate(`/articles`, {state: {typer: getMeData('gatsbyjs') }})}  aria-hidden="true">
            <FontAwesomeIcon icon={faFedora} size="lg" />
            <p>GatsbyJS</p>
          </div>
          <div onClick ={ () => navigate(`/articles`, {state: {typer: getMeData('nodejs') }})}  aria-hidden="true">
            <FontAwesomeIcon icon={faNodeJs} size="lg" />
            <p>NestJS</p>
          </div>
        </Catalog>
      </Container>
    </>
  )
}