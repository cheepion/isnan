import React, {useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Personal, Catalog, CatalogContent } from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faNodeJs, faJs, faFedora, faGithub } from "@fortawesome/free-brands-svg-icons"

export const Sidebar = () => {
  
  // const getMdData = (type) => {
    // $slug: String!
    const GetMdData =(typer) => useStaticQuery(graphql`
    query ($typer: String!) {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: $typer} }}) {
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
    // console.log("data100", data.allMarkdownRemark.edges)
    // return data
  // }
  console.log('data', GetMdData)
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
            {/* <span>Elvis github</span> */}
          </a>
        </Personal>
        {/* 技术分类 */}
        <Catalog >
          <CatalogContent onClick={ () => navigate(`/articles`, {state: {typer: 'js'}})}>
          {/* <CatalogContent onClick={ () => navigate(`/articles`, {state: {typeData: GetMdData('js')}})}> */}
            <FontAwesomeIcon icon={faJs} size="lg" />
            <p>Javascript</p>
          </CatalogContent>
          <CatalogContent onClick={ () => navigate("/articles", 'react')}>
            <FontAwesomeIcon icon={faReact} size="lg" />
            <p>React</p>
          </CatalogContent>
          <CatalogContent onClick={ () => navigate("/articles", 'gatsbyjs')}>
            <FontAwesomeIcon icon={faFedora} size="lg" />
            <p>GatsbyJS</p>
          </CatalogContent>
          <CatalogContent onClick={ () => navigate("/articles", 'nodejs')}>
            <FontAwesomeIcon icon={faNodeJs} size="lg" />
            <p>NestJS</p>
          </CatalogContent>
        </Catalog>
      </Container>
    </>
  )
}