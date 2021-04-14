import styled from 'styled-components'

export const Container = styled.div`
  width: 200px;
`
export const Personal = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: #fff;
`
export const Catalog = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10;
  background-color: #fff;
  div {
    flex: 1;
    flex-direction: row;
  }
`
export const Footer = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 90
  }
`