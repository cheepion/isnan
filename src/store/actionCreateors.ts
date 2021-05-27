import * as actionTypes from "./actionTypes"

export function getArticle(article: Article) {
  const action: ArticleAction = {
    type: actionTypes.GET_ARTICLE,
    article,
  }
  return (dispatch: DispatchType) => dispatch(action)
}

export function queryAllArticles(queryArticle: QueryArticles) {
  const action: QueryAtion = {
    type: actionTypes.QUERY_ARTICLE,
    queryArticle,
  }
  return (dispatch: DispatchQueryType) => dispatch(action)
}
// three yuan
// export const getBannerList = () => {
//   return (dispatch) => {
//     getBannerRequest ().then (data => {
//       dispatch (changeBannerList (data.banners));
//     }).catch (() => {
//       console.log ("轮播图数据传输错误");
//     }) 
//   }
// };
// export const changeBannerList = (data) => ({
//   type: actionTypes.CHANGE_BANNER,
//   data: fromJS (data)
// });

// --- case 
// const { bannerList, recommendList } = props;

// const { getBannerDataDispatch, getRecommendListDataDispatch } = props;

// useEffect (() => {
//   getBannerDataDispatch ();
//   getRecommendListDataDispatch ();
//   //eslint-disable-next-line
// }, []);



//blog
// export function simulateHttpRequest(action: ContactAction) {
//   return (dispatch: DispatchType) => {
//     setTimeout(() => {
//       dispatch(action)
//     }, 500)
//   }

// export function addContact(contact: Contact) {
//   const action: ContactAction = {
//     type: actionTypes.ADD_CONTACT,
//     contact,
//   }
//   return simulateHttpRequest(action)
// }

// export function removeContact(contact: Contact) {
//   const action: ContactAction = {
//     type: actionTypes.REMOVE_CONTACT,
//     contact,
//   }
//   return simulateHttpRequest(action)
// }

// export function simulateHttpRequest(action: ContactAction) {
//   return (dispatch: DispatchType) => {
//     setTimeout(() => {
//       dispatch(action)
//     }, 500)
//   }
// }