import styled from 'styled-components'

export const Container = styled.div`
  width: 200px;
`
export const Personal = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 12px;
  background-color: #fff;
  .person-img {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .inline-img {
      border-radius: 100%;
      cursor: pointer;
      :hover {
        border: 1px solid #eee;
        animation: roll 5s 2;
        animation-direction: alternate;
        opacity: .8;
        @keyframes roll {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0);
          }
        }
      }
    }
  .git-icon {
      position: absolute;
      top: 84px;
      right: 13px;
      cursor: pointer;
    }
  }


`
export const Catalog = styled.div`
  position: relative;
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