import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.bp.md ? 'row' : 'column'};
  width: ${props => props.bp.md ? '720px' : '200px'};
  /* width: ${props =>props.bp.md ? "45rem" : "12.5rem"}; */
  /* width: 200px; */
`
export const Personal = styled.div`
  display: flex;
  flex-direction: ${props => props.bp.md ? 'row' : 'column'};
  ${props => props.bp.md ? 'margin: 0 20px 20px' : 'margin-bottom: 20px;'};
  padding: 10px;
  border-radius: 12px;
  background-color: #fff;
  .person-img {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .inline-img {
      width: 110px;
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
  flex-direction: ${props => props.bp.md ? 'row' : 'column'};
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  ${props => props.bp.md ? "max-height: 60px" : null};
  div {
    display: flex;
    flex-direction: row;
    ${props => props.bp.md ? "margin-left: 10px" : null};
    cursor: pointer;
  }
  p {
    margin-left: 10px;
  }
`