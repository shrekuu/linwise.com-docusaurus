// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const docCategories = ['react', 'vue', 'angular', 'laravel', 'linux']

const capitalize = s => s.replace(/./, c => c.toUpperCase())

const docNavBarItems = docCategories.map((e) => ({
  type: 'doc',
  docId: `${e}/intro`,
  label: capitalize(e),
  position: 'left'
}))

const footerDocLinkItems = docCategories.map((e) => ({
  label: capitalize(e),
  to: `/docs/${e}/intro`,
}))

const redirects = [
  {
    to: `/docs/${docCategories[0]}/intro`,
    from: '/docs',
  },
  ...docCategories.map((e) => ({
    to: `/docs/${e}/intro`,
    from: `/docs/${e}`,
  }))
]

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '温柔的码农的开发笔记',
  tagline: '温柔的码农的开发笔记, 前端开发, 后端开发, 移动端 App 开发, 移动端混合开发, 小程序开发, Linux 服务器配置笔记. React 技术分享. Vue 技术分享. Angular 技术分享.',
  url: 'https://www.linwise.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'linwise', // Usually your GitHub org/user name.
  projectName: 'linwise.com', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Linwise',
        logo: {
          alt: 'Home',
          src: 'img/logo-300x300.png',
        },
        items: [
          ...docNavBarItems,
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/shrekuu',
            className: 'header-github-link',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              ...footerDocLinkItems,
            ],
          },
          {
            title: 'Community',
            items: [
              {
                html: '<a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=UVdB_AIQUvsWlKWHukDSNIANAeYJ-xa3&jump_from=webapi"><img border="0" src="//pub.idqqimg.com/wpa/images/group.png" alt="西安高级Web前端工程师" title="西安高级Web前端工程师"></a>'
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/shrekuu',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} linwise.com. Built with Docusaurus. <br/> <a href="https://beian.miit.gov.cn" target="_blank">陕ICP备2020018633号-1</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      'pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        // This is ridiculous. 
        pwaHead: [
          {
            tagName: 'link', rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png'
          }, {
            tagName: 'link', rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png'
          }, {
            tagName: 'link', rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png'
          }, {
            tagName: 'link', rel: 'manifest', href: '/favicon/site.webmanifest'
          }, {
            tagName: 'link', rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#5bbad5'
          }, {
            tagName: 'link', rel: 'shortcut icon', href: '/favicon/favicon.ico'
          }, {
            tagName: 'meta', name: 'msapplication-TileColor', content: '#da532c'
          }, {
            tagName: 'meta', name: 'msapplication-config', content: '/favicon/browserconfig.xml'
          }, {
            tagName: 'meta', name: 'theme-color', content: '#ffffff'
          }
        ],
      },
    ],
    [
      'client-redirects',
      {
        redirects: [
          ...redirects
        ]
      }
    ],
    'docusaurus-tailwindcss',
  ],
};

module.exports = config;
