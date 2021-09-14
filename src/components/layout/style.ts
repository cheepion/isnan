import styled from 'styled-components'
import { BreakpointsObject } from 'gatsby-plugin-breakpoints';


export const HeaderSpace = styled.header`
  margin-top: 2rem;
`
export const Container = styled.div<{bp: BreakpointsObject}>`
  margin: 0 auto;
  width: ${props =>props.bp.md ? "720px" : "960px"};
  padding: ${props =>props.bp.md ? "0" : "0 1.0875rem 1.45rem"};
  display: flex;
  flex-direction: ${props => props.bp.md ? "column" : "row"};
`

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  padding: .8rem .5rem;
  background-color: #fafafa;
  opacity: 0.8;
  .footer-link {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: #343434;
    text-decoration: none;
    letter-spacing: 1px;
    text-shadow: 3px 1px 1px #e4e4e4;
  }
`