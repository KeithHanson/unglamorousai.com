import { getCollection, type CollectionEntry } from 'astro:content';

export type PostEntry = CollectionEntry<'posts'>;

export function postSlug(post: PostEntry) {
  return post.id.replace(/\.(md|mdx)$/i, '');
}

export async function getPosts() {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date, long = false) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: long ? 'long' : 'short',
    day: long ? 'numeric' : '2-digit',
  });
}

export function getReadingTime(post: PostEntry) {
  if (post.data.type === 'STREAM') {
    return post.data.readingTime ?? 0;
  }
  if (post.data.readingTime) {
    return post.data.readingTime;
  }
  const words = post.body.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}
