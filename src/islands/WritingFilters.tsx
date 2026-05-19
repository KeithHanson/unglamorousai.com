import { useEffect, useState } from 'react';

type Props = { tags: string[]; counts: Record<string, number> };

export default function WritingFilters({ tags, counts }: Props) {
  const [type, setType] = useState('ALL');
  const [tag, setTag] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setType(params.get('type') ?? 'ALL');
    setTag(params.get('tag') ?? '');
  }, []);

  useEffect(() => {
    const q = new URLSearchParams();
    if (type !== 'ALL') q.set('type', type);
    if (tag) q.set('tag', tag);
    const next = q.toString();
    history.replaceState({}, '', next ? `?${next}` : window.location.pathname);
    document.querySelectorAll<HTMLElement>('[data-post-row]').forEach((row) => {
      const rowType = row.dataset.type ?? '';
      const rowTags = (row.dataset.tags ?? '').split(',');
      const hide = (type !== 'ALL' && rowType !== type) || (tag && !rowTags.includes(tag));
      row.dataset.hidden = hide ? 'true' : 'false';
    });
  }, [type, tag]);

  const types = ['ALL', 'TUTORIAL', 'NOTE', 'LINK', 'STREAM'];
  return <>
    <div className="filter-row"><span>type:</span>{types.map((t)=><button type="button" className={type===t?'active':''} onClick={()=>setType(t)}>{t}{t !== 'ALL' ? ` · ${counts[t] ?? 0}` : ''}</button>)}</div>
    <div className="filter-row"><span>tag:</span><button type="button" className={tag===''?'active':''} onClick={()=>setTag('')}>all</button>{tags.map((t)=><button type="button" className={tag===t?'active':''} onClick={()=>setTag(tag===t?'':t)}>#{t}</button>)}</div>
  </>;
}
