import React from "react"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Personal, Catalog } from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faNodeJs, faJs, faFedora, faGithub } from "@fortawesome/free-brands-svg-icons"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

export const Sidebar = () => {

  const breakpoints = useBreakpoint();
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
          <div onClick={ () => navigate(`/articles`, {state: {typer: 'js' }})}  aria-hidden="true">
            <FontAwesomeIcon icon={faJs} size="lg" />
            <p>Javascript</p>
          </div>
          <div onClick ={ () => navigate(`/articles`, {state: {typer: 'react' }})} aria-hidden="true">
            <FontAwesomeIcon icon={faReact} size="lg" />
            <p>React</p>
          </div>
          <div onClick ={ () => navigate(`/articles`, {state: {typer: 'gatsbyjs' }})} aria-hidden="true">
            <FontAwesomeIcon icon={faFedora} size="lg" />
            <p>GatsbyJS</p>
          </div>
          <div onClick ={ () => navigate(`/articles`, {state: {typer: 'nodejs' }})} aria-hidden="true">
            <FontAwesomeIcon icon={faNodeJs} size="lg" />
            <p>NestJS</p>
          </div>
        </Catalog>
      </Container>
    </>
  )
}