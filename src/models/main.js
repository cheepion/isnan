import { makeAutoObservable } from "mobx"
import { checkout } from '../api/request'

class MainModel {

  localStore = {
    queryArticle: '123',
    hotList: [],
    subList: [],
  }
  queryArticle1= '456'

  constructor() {
    makeAutoObservable(this)
    // console.log('checkout', checkout)
  }

  // queryArticle = checkout()
  // hotList = []
  // subList = []

  //  首页热点文章
  getArticles = () => {
    // this.localStore.queryArticle = checkout().edges.filter(( { node }, index) => (node.frontmatter.type == 'react') && (index === 0))
    console.log('checkout', checkout)
    this.localStore.queryArticle = checkout()
    this.queryArticle1 = '新奇'
    // this.hotList = this.queryArticle.edges.filter(( { node }, index) => (node.frontmatter.type == 'react') && (index === 0))
    // this.subList = this.queryArticle.edges.filter(( { node }, index) => (node.frontmatter.type == 'react') && (index > 0 && index < 4))
    // this.queryArticle.edges.filter(( { node }, index) => (node.frontmatter.type == 'react') && (index === 0))
  }

  // // 首页前四热门文章
  // getSubTitle = () => this.queryArticle.edges.filter(( { node }, index) => (node.frontmatter.type == 'react') && (index > 0 && index < 4))

}
export const mainStore = new MainModel()