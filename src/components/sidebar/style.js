import styled from 'styled-components'

export const Container = styled.div`
  width: 200px;
`
export const Personal = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 12px;
  background-color: #fff;
`
export const Catalog = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  p {
    margin-left: 10px;
  }
`
export const  CatalogContent = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`