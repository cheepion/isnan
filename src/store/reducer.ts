import * as actionTypes from "./actionTypes"
import { combineReducers } from 'redux'

const initialArticleState: ArticleState = {
  article: [ {
      title: "文件标题",
      subTitle: "文章副标题",
      date: "2021-04-12",
      icon: "faReact",
      type:"react",
      headImg: "url",
    } ],
}

const useArticle = (
    state: ArticleState = initialArticleState,
    action: ArticleAction
    ): ArticleState => {
        switch (action.type) {
            case actionTypes.GET_ARTICLE:
                const newArticle: Article = {
                    title: action.article.title,
                    subTitle: action.article.subTitle,
                    date: action.article.date,
                    icon: action.article.icon,
                    type: action.article.type,
                    headImg: action.article.headImg
                }
                return {
                    ...state,
                    article: state.article.concat(newArticle),
                }
            // case actionTypes.REMOVE_CONTACT:
            //     const updatedContacts: Contact[] = state.contacts.filter(
            //         contact => contact.id !== action.contact.id
            //     )
            //     return {
            //         ...state,
            //         contacts: updatedContacts,
            //     }
        }
    return state
}
const initialQueryState: QueryArticles = []

const queryArticle = (
    state: QueryArticles = initialQueryState,
    action: ArticleAction
    ): QueryArticles => {
        switch (action.type) {
            case actionTypes.QUERY_ARTICLE:
                // const newArticle: Article = {
                //     title: action.article.title,
                //     subTitle: action.article.subTitle,
                //     date: action.article.date,
                //     icon: action.article.icon,
                //     type: action.article.type,
                //     headImg: action.article.headImg
                // }
                const newQueryArticle: QueryArticles = []
                return {
                    ...state,
                    // QueryArticles: state.QueryArticles.concat(newArticle),
                }
        }
    return state
}

const reducer = combineReducers({
    useArticle,
    queryArticle
})

export default  reducer