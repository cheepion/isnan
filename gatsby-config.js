// const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: `查询头`,
    description: `测试数据111111111111`,
    author: `@测试数据321`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // 排版插件
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // typescript 插件
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    // 样式插件
    // `gatsby-plugin-styled-components`,
    'gatsby-plugin-styled-components',
    // {
    //   resolve: `gatsby-plugin-styled-components`,
      // options: {
        // ssr: false
        // displayName: false
      //   name: `src`,
      //   path: `${__dirname}/src/assets/styles`
      // },
    // },
    // md插件
    `gatsby-transformer-remark`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `src`,
    //     path: `${__dirname}/src/source/`
    //   }
    // }
  ],
}
