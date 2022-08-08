export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '62f1013a45349f7d0939b981',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5sdbijkq',
                  apiId: '8e67b313-5013-4d6b-915a-0b8b0d164f46'
                },
                {
                  buildHookId: '62f1013a8b5f9f778c325107',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-t9843794',
                  apiId: 'e4425922-5262-4cd6-9b95-5d08f32f2499'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/melroser/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-t9843794.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
