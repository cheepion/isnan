// const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
  siteMetadata: {
    title: `Elvis-blog`,
    description: `读博客文章, 写点心得`,
    author: `@Elvis`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/source`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `my blog`,
        short_name: `blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
        "icons": [
          {
            src: `favicon/favicon-72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },{
            src: `favicon/favicon-32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            "src": "favicon/favicon-maskable.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "maskable"
          }
        ],
        "cacheDigest": null
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
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
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // displayName: false
      },
    },
    {
      // md插件
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              theme: "one-light"
            }
          },
        ],
      },
    }
  ],
}
