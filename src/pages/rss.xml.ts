import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { postSlug } from '../lib/posts';

export async function GET(context: { site: URL }) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return rss({
    title: 'UnglamorousAI',
    description: 'The boring AI that is quietly invading every corporation.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.excerpt,
      link: p.data.type === 'LINK' ? p.data.href : `/writing/${postSlug(p)}/`,
      categories: p.data.tags,
    })),
  });
}
