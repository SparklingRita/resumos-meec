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
          children: ['0001-RN','0004-Comp','0005-PerifericosInterrupts','0006-IntroAProcessador' ],
        },
        {
          title: '👨‍💻 Laboratórios',
          collapsable: false,
          children: ['0008-labs', '0009-Lab3'],
        },
        {
          title: '👨‍💻 Problemas',
          collapsable: false,
          children: ['0002-PB2','0003-PB3','0007-PB4'],
        },
      ],
      '/cdi-ii/': [
        '',
        {
          title: '📝 Conteúdo',
          collapsable: false,
          children: ['0002-DerivadasOrdemSuperior','0003-FuncaoInversa&Implicita'],
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
          children: ['0001-intro', '0002-OeRH', '0003-microeconomia', '0004-IF', '0009-Cap5'],
        },
        {
          title: '✏️ Exercícios',
          collapsable: false,
          children: ['0005-fichas', ],
        },
        {
          title: '✏️ Testes e Exames de Anos Anteriores',
          collapsable: false,
          children: ['0006-testes','0007-exams','0008-online' ],
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
            '0005-momento-linear',
            '0006-mov-sistemas-particulas',
            '0007-momento-angular',
            '0009-Ondas'
          ],
        },
        {
          title: '✏️ Exercícios',
          collapsable: false,
          children: [],
        },
        {
          title: '✏️ Testes e Exames de Anos Anteriores',
          collapsable: false,
          children: ['0008-T&E', ],
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
            '0001-Introdução','0002-structureC', '0003-ControloFluxo', '0004-Funcoes', '0005-Arrays', '0006-Pointers', '0007-AlocacaoDinamica', '0008-FilesIO', '0009-makefiles', '0010-StructureUnionsEnumeratedTypedef', '0011-ListasStacksFilas'
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