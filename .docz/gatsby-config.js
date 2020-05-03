const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: '@sugut/c',
    description: 'component library used in sugut app',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: ['Getting Started', 'Components'],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/home/lucas/Projects/sugutapp/c/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: '@sugut/c',
        description: 'component library used in sugut app',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/home/lucas/Projects/sugutapp/c',
          templates:
            '/home/lucas/Projects/sugutapp/c/node_modules/docz-core/dist/templates',
          docz: '/home/lucas/Projects/sugutapp/c/.docz',
          cache: '/home/lucas/Projects/sugutapp/c/.docz/.cache',
          app: '/home/lucas/Projects/sugutapp/c/.docz/app',
          appPackageJson: '/home/lucas/Projects/sugutapp/c/package.json',
          appTsConfig: '/home/lucas/Projects/sugutapp/c/tsconfig.json',
          gatsbyConfig: '/home/lucas/Projects/sugutapp/c/gatsby-config.js',
          gatsbyBrowser: '/home/lucas/Projects/sugutapp/c/gatsby-browser.js',
          gatsbyNode: '/home/lucas/Projects/sugutapp/c/gatsby-node.js',
          gatsbySSR: '/home/lucas/Projects/sugutapp/c/gatsby-ssr.js',
          importsJs: '/home/lucas/Projects/sugutapp/c/.docz/app/imports.js',
          rootJs: '/home/lucas/Projects/sugutapp/c/.docz/app/root.jsx',
          indexJs: '/home/lucas/Projects/sugutapp/c/.docz/app/index.jsx',
          indexHtml: '/home/lucas/Projects/sugutapp/c/.docz/app/index.html',
          db: '/home/lucas/Projects/sugutapp/c/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
