const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Resumos MEEC',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#00a0e4' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  theme: 'default-prefers-color-scheme',

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    overrideTheme: 'dark',
    repo: 'SparklingRita/resumos-meec',
    editLinks: true,
    docsDir: 'src',
    docsBranch: 'main',
    editLinkText: '',
    lastUpdated: true,
    smoothScroll: true,
    nav: [
      {
        text: 'IST',
        link: 'https://tecnico.ulisboa.pt',
      },
    ],
    sidebar: {
      '/acomp/': [
        '',
        {
          title: '📝 Conteúdo',
          collapsable: false,
          children: ['0001-RN','0004-Comp', ],
        },
        {
          title: '👨‍💻 Laboratórios',
          collapsable: false,
          children: ['labs'],
        },
        {
          title: '👨‍💻 Problemas',
          collapsable: false,
          children: ['0002-PB2','0003-PB3'],
        },
      ],
      '/cdi-ii/': [
        '',
        {
          title: '📝 Conteúdo',
          collapsable: false,
          children: ['0002-DerivadasOrdemSuperior'],
        },
        {
          title: '✏️ Exercícios',
          collapsable: false,
          children: ['0001-fichas'],
        },
        {
          title: '📒 Cheat Sheets',
          collapsable: false,
          children: ['cheat-sheet'],
        },
      ],
      '/ges/': [
        '',
        {
          title: '📝 Conteúdo',
          collapsable: false,
          children: ['0001-intro', '0002-OeRH', '0003-microeconomia', '0004-IF'],
        },
        {
          title: '✏️ Exercícios',
          collapsable: false,
          children: ['0005-fichas', ],
        },
        {
          title: '✏️ Testes de Anos Anteriores',
          collapsable: false,
          children: ['0006-testes', ],
        },
      ],
      '/mo/': [
        '',
        {
          title: '📝 Conteúdo',
          collapsable: false,
          children: [
            '0001-cinematica',
            '0002-leisnewton',
            '0003-simetrias-leis-conservacao',
            '0004-campo-gravitico',
            '0005-momento-linear'
          ],
        },
        {
          title: '✏️ Exercícios',
          collapsable: false,
          children: [],
        },
        {
          title: '📃 Cheat Sheets',
          collapsable: false,
          children: [],
        },
      ],
      '/prog/': [
        '',
        {
          title: '📝 Conteúdo',
          collapsable: false,
          children: [
            
          ],
        },
        {
          title: '✏️ Laboratórios',
          collapsable: false,
          children: ['0001-labs','0002-labs', ],
        },
        {
          title: '🖥️ Práticas',
          collapsable: false,
          children: ['0002-Praticas', ],
        },
        {
          title: '📃 Cheat Sheets',
          collapsable: false,
          children: [],
        },
      ],
      '/': [
        {
          title: '1º Ano 2º Semestre',
          collapsable: false,
          children: [
            ['acomp/', 'ACOMP'],
            ['cdi-ii/', 'CDI-II'],
            ['ges/', 'GES'],
            ['mo/', 'MO'],
            ['prog/', 'PROG'],
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-seo',
    '@maginapp/vuepress-plugin-katex',

    [
      require('./plugins/umami-analytics'),
      {
        websiteId: '9322a623-79cd-4cd8-977f-8908231ead0a',
        jsUrl: 'https://umami.diogotc.com/umami.js',
      },
    ],
   
  ],
  markdown: {
    extendMarkdown: (md) => {
      md.use(require('markdown-it-color').default);
    },
  },
};