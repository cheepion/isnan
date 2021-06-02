import * as actionTypes from "./actionTypes"
import practice from '../components/practice/store/reducer'
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
            case actionTypes.FETCH_ARTICLE:
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
const initialQueryState:ArticleState = {
    article: [ {
        title: "文件标题",
        subTitle: "文章副标题",
        date: "2021-04-12",
        icon: "faReact",
        type:"react",
        headImg: "url",
      } ],
}

const queryArticle = (
    state: ArticleState = initialQueryState,
    action: SimpleAction
    ): ArticleState => {
        switch (action.type) {
            case actionTypes.FETCH_ARTICLE:
                // const newArticle: Article = {
                    // title: action.article.title,
                    // subTitle: action.article.subTitle,
                    // date: action.article.date,
                    // icon: action.article.icon,
                    // type: action.article.type,
                    // headImg: action.article.headImg
                // }
                // const newQueryArticle: ArticleState = []
                return {
                    ...state,
                    // SimpleArticles: state.article.concat(newArticle),
                }
        }
    return state
}

const reducer = combineReducers({
    useArticle,
    pra: practice,
    queryArticle
})

export default reducer