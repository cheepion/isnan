import styled from 'styled-components'

export const Container = styled.div`
  width: 740px;
  margin-left: 20px;
`
export const TopArticle = styled.div`
  display: flex;
  width: 600px;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 1px 2px 10px #ccc;
  .hot-article-left {
    display: flex;
    align-items: center;
  }
  .hot-article-right {
    display: flex;
    flex-direction: column;
    width: 360px;
    h4 {
      color: #2F3035;
      padding: 10;
    }
    p {
      color: #677F8E;
      font-size: 14px;
      padding: 10;
    }
  }
`
export const ArticleList = styled.div`
  display: flex;
  flex-direction: row;

  .article-content {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin-top: 20px;
    margin-right: 10px;
    padding: 10px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 1px 2px 10px #ccc;
    .article-top {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  .article-bottom {
    h4 {
      color: #2F3035;
      padding: 10;
    }
    p {
      color: #677F8E;
      font-size: 14px;
      padding: 10;
    }
  }
  }

`
