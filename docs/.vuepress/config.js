const { path } = require('@vuepress/utils')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { searchPlugin } = require('@vuepress/plugin-search')
const { localTheme } = require('../../emiyl-theme')

require('../../generatePageData')

module.exports = {
    lang: 'en-US',
    title: 'AppleDB',
    description: 'A database of Apple software and devices.',
  
    theme: localTheme({
      repo: 'emiyl/appledb',
      selectLanguageText: '<i class="fas fa-globe"/>',
      logo: 'https://img.appledb.dev/device@256/logo/0.png',
      logoDark: 'https://img.appledb.dev/device@256/logo/0_dark.png',
      repoLabel: '<i class="fab fa-github icon"></i>',
      adUnits: [
        "13840",
        "13841"
      ],
      navbar: [
        {
          text: 'Devices',
          link: '/device-selection/'
        },
        {
          text: 'Firmwares',
          link: '/firmwares.html'
        },
        {
          text: 'Credits',
          link: '/credits.html'
        },
        {
          text: 'iOS Guide',
          link: 'https://ios.cfw.guide/'
        }
      ]
    }),

    plugins: [
      searchPlugin({
        locales: {
          '/': {
            placeholder: 'Search',
          },
        }
      }),
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components'),
      }),
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components/device'),
      }),
      require('./plugins/deviceListPages/lib'),
      require('./plugins/devicePages/lib'),
      //require('./plugins/firmwarePages/lib'),
      require('./plugins/jailbreakPages/lib'),
      require('./plugins/redirectPlugin/lib'),
      require('./plugins/writeTemp/lib/')
    ],

    shouldPrefetch: false,
  
    head: [
      [ 'meta', { property: 'og:image', content: '/assets/images/splash-23aaron-logo.jpg' } ],
      [ 'script', { type: 'text/javascript', src: '//cdn.thisiswaldo.com/static/js/13821.js' }],
      [ 'link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css' } ],
      [ 'link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
      [ 'link', { rel: 'icon', href: '/favicon-32x32.png', sizes: '32x32' }],
      [ 'link', { rel: 'icon', href: '/favicon-16x16.png', sizes: '16x16' }],
      [ 'link', { rel: 'manifest', href: '/site.webmanifest' }]
    ],
}