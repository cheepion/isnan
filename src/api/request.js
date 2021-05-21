import { useStaticQuery, graphql } from "gatsby"

// 文章全查
const QueryAll = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
          edges {
            node {
              frontmatter {
                title
                subTitle
                date
                icon
                type
                headImg
              }
              html
            }
          }
        }
      }
    `)
  // console.log("全数据", allMarkdownRemark)
  return allMarkdownRemark
}

export const checkout = () => {
  const qll = QueryAll()
  return qll
}