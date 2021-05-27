/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// import mobxProvider from "./mobxProvider"
// export const wrapRootElement = mobxProvider
import wrapWithProvider  from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider 
