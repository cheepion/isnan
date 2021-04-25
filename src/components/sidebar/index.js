import React, {useEffect, useRef, forwardRef} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Personal, Catalog, CatalogContent } from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faNodeJs, faJs, faFedora, faGithub, faYarn } from "@fortawesome/free-brands-svg-icons"

export const Sidebar = () => {
  const domRef = useRef()
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
  React.useEffect(() => {
    console.log("ref", domRef)
    domRef.current.addEventListener('click', (e) => {
      console.log('tag', e.target.getAttribute('data-md'))
      if(e.target.tagName.toLowerCase() === 'div') {
        switch(e.target.getAttribute('data-md')) {
          case 'js':
          navigate('articles', "js");
          break;
          case 'react':
          navigate('articles', "react");
          break;
          case 'gatsbyjs':
          navigate('articles', "gatsbyjs");
          break;
          case 'nodejs':
          navigate('articles', "nodejs");
          break;
          default :
          navigate('articles');
        }
      }
    },false)
    return () => {
      domRef.current.removeEventListener("click", () => {}, false)
    }
  }, [])
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
        <Catalog ref={domRef}>
          <CatalogContent data-md='js'>
            <FontAwesomeIcon icon={faJs} size="lg" />
            <p>Javascript</p>
          </CatalogContent>
          <CatalogContent data-md='react'>
            <FontAwesomeIcon icon={faReact} size="lg" />
            <p>React</p>
          </CatalogContent>
          <CatalogContent data-md='gatsbyjs'>
            <FontAwesomeIcon icon={faFedora} size="lg" />
            <p>GatsbyJS</p>
          </CatalogContent>
          <CatalogContent data-md='nodejs'>
            <FontAwesomeIcon icon={faNodeJs} size="lg" />
            <p>NestJS</p>
          </CatalogContent>
        </Catalog>
      </Container>
    </>
  )
}