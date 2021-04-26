// import { useStaticQuery, graphql } from "gatsby"
// const gql = String.raw

// export const getJsArticles = async ( ) => {
//   return await graphql`
//     {
//       allMarkdownRemark(filter: {frontmatter: {type: {eq: "js"}}}) {
//         totalCount
//         edges {
//           node {
//             frontmatter {
//               type
//             }
//           }
//         }
//       }
//     }
//   `
//   }  

// export const getReactArticles =  graphql`
//   query react {
//     allMarkdownRemark(filter: {frontmatter: {type: {eq: "react"}}}) {
//       totalCount
//       edges {
//         node {
//           frontmatter {
//             type
//           }
//         }
//       }
//     }
//   }
// `
