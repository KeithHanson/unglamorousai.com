import { useEffect, useState } from 'react';

type Props = { counts: Record<string, number> };

export default function WritingFilters({ counts }: Props) {
  const [type, setType] = useState('ALL');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setType(params.get('type') ?? 'ALL');
  }, []);

  useEffect(() => {
    const q = new URLSearchParams();
    if (type !== 'ALL') q.set('type', type);
    const next = q.toString();
    history.replaceState({}, '', next ? `?${next}` : window.location.pathname);
    document.querySelectorAll<HTMLElement>('[data-post-row]').forEach((row) => {
      const rowType = row.dataset.type ?? '';
      const hide = type !== 'ALL' && rowType !== type;
      row.dataset.hidden = hide ? 'true' : 'false';
    });
  }, [type]);

  const types = ['ALL', 'TUTORIAL', 'NOTE', 'LINK', 'STREAM'];
  return <>
    <div className="filter-row filter-row-type"><span>type:</span>{types.map((t)=><button type="button" className={type===t?'active':''} onClick={()=>setType(t)}>{t}{t !== 'ALL' ? ` · ${counts[t] ?? 0}` : ''}</button>)}</div>
  </>;
}
