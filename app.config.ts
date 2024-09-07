export default defineAppConfig({
  teshaneLinks: {
    site: {
      name: 'Teshane Crawford - Software Engineer',
      description: 'Teshane Crawford is a software engineer who specializes in building web applications using modern technologies.',
      domain: 'teshanecrawford.com',
      social: {
        twitter: 'https://x.com/TeshaneCrawford',
        github: 'https://github.com/TeshaneCrawford',
      },
    },
    main: {
      socialIcon: {
        instagram: '',
      },
    },
    icon: {
      size: '', // default <Icon> size applied
      class: '', // default <Icon> class applied
      mode: '', // default <Icon> mode applied
      aliases: {
        twitter: 'line-md:twitter-x-alt',
      },
      // customize: (content: string, name: string, prefix: string, provider: string) => {
      //   // ...
      // },
    },
  },
})
