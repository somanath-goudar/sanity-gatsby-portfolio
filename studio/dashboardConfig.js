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
                  buildHookId: '62d2b69294f05f06efe8185d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2p17f2ba',
                  apiId: '88fc7665-49cf-4201-ad36-5f35e5523c8b'
                },
                {
                  buildHookId: '62d2b692f459cd04d510d715',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ejskky5n',
                  apiId: '7d66ac7a-8b13-417b-8799-bf6c3edd36f2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/somanath-goudar/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ejskky5n.netlify.app',
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
