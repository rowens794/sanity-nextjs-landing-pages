export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8b7573de1d9899441f6215',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zwyxp2cu',
                  apiId: 'fbea3ad7-58ab-45ee-857c-3f2edb68f344'
                },
                {
                  buildHookId: '5f8b75742ff9409c61abec49',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-944qn11u',
                  apiId: '88383629-7feb-4b6c-b2d8-fcd36045a36b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rowens794/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-944qn11u.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
