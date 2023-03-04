import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

export async function get(context) {
  const blog = await getCollection('blog');
  blog.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      tags: post.data.tags,
      pubDate: post.data.pubDate.toLocaleString('en-US', { timeZone: 'UTC' }),
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    stylesheet: '/rss-style.xsl',
  });
}
