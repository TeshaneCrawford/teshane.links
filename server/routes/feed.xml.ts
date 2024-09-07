import { Feed } from 'feed'
import { joinURL } from 'ufo'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const { name, website } = config.public

  const feed = new Feed({
    title: `${name} Links`,
    description: `${name}'s links`,
    id: website,
    link: website,
    language: 'en',
    image: joinURL(website, 'favicon.ico'),
    favicon: joinURL(website, 'favicon.ico'),
    copyright: `CC BY-NC-SA 4.0 ${(new Date()).getFullYear()} © ${name}`,
    feedLinks: {
      rss: `${website}/rss.xml`,
    },
  })

  appendHeader(event, 'Content-Type', 'application/xml')
  return feed.rss2()
})
