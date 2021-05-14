import styled from 'styled-components'

export const HeaderSpace = styled.header`
  margin-top: 2rem;
`
export const Container = styled.div`
  margin: 0 auto;
  width: ${props =>props.bp.md ? "720px" : "960px"};
  padding: 0 1.0875rem 1.45rem;
  display: flex;
  flex-direction: ${props => props.bp.md ? "column" : "row"};
`

export const Footer = styled.footer`
  margin-top: 2rem;
`