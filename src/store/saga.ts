import { call, put, takeEvery } from 'redux-saga/effects'


const fetchArticle = () => {
  return {
    a: 100,
    b: 200,
    c: 300,
    d: 'lastOne'
  }
}
interface TestArticle {
  a: number,
  b: number,
  c: number,
  d: string
} 
const API: TestArticle = {
  a: 100,
  b: 200,
  c: 300,
  d: 'lastOne'
}

type FCA = 'fetchArticle'


// interface AProps {
//   a: 100,
//   b: 200,
//   c: 300,
//   d: 'lastOne'
// }

// 用于API请求的saga
function* fetchArticles():any {
   // 使用普通的try/catch来处理函数
  try {
      const articles: any = yield fetchArticle()                                     // 调用call发起API请求
      // const article = yield call(API);                                     // 调用call发起API请求
      console.log('散发光彩', articles)
      yield put({type: "FETCH_ARTICLE", books: articles});    // 调用put将结果存入redux store
   } catch (e) {
      yield put({type: "Article_FETCH_FAILED", message: e.message});  // 错误信息，存入redux store
   }  
}

// 入口saga
function* miniSaga() {
  // 监听BOOK_FETCH_REQUESTED类型的action，如果监听到就发出API请求
  yield takeEvery("Article_FETCH_REQUESTED", fetchArticles);
}

export default miniSaga

// 直接调用的方式

// 按钮点击的处理函数
// function handleClick() {
//   // 这里就是正常的dispatch一个普通的plain object
//   store.dispatch({ type: 'BOOK_FETCH_REQUESTED' })
// }
// const Button = (<button onClick={handleClick}>
// Fetch Books
// </button>
// )