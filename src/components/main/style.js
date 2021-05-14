import styled from 'styled-components'

export const Container = styled.div`
  width: 720px;
  margin-left: 20px;
`
export const TopArticle = styled.div`
  display: flex;
  width: 620px;
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
    cursor: pointer;
    h4 {
      color: #2F3035;
      padding: 10px;
      margin-bottom: 0;
    }
    p {
      color: #677F8E;
      font-size: 14px;
      padding: 8px;
      margin-bottom: 4px;
      line-height: 1.3;
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
    cursor: pointer;
    .article-top {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  .article-bottom {
    h4 {
      color: #2F3035;
      padding: 6px;
      margin-bottom: 0;
      font-size: 15px;
    }
    p {
      color: #677F8E;
      font-size: 13px;
      padding: 6px;
      margin-bottom: 4px;
      line-height: 1.3;
    }
  }
  }

`
