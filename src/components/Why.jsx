import { AFTER, BEFORE } from '../data/content.js';

export default function Why() {
  return (
    <section className="sec" id="why" style={{ borderTop: '1px solid var(--ink-line)' }} aria-labelledby="why-h">
      <div className="wrap">
        <div className="cmp-head rv">
          <div>
            <span className="tag"><i />Why Leadszz</span>
            <h2 className="h2" id="why-h">Leads don't vanish. They just go <span className="serif">quiet.</span></h2>
          </div>
          <p className="lead">Most prospects need several touches before they reply. Without a system, they slip away. With one, they end up on your calendar.</p>
        </div>
        <div className="cmp">
          <article className="card off rv">
            <div className="card-h"><h3>Doing it alone</h3><span className="tag" style={{ color: 'var(--ink-soft)' }}>Before</span></div>
            <ul>{BEFORE.map((x) => <li key={x}><span className="mk">✕</span><span>{x}</span></li>)}</ul>
          </article>
          <article className="card on rv">
            <div className="card-h"><h3>With <span className="serif">Leadszz</span></h3><span className="tag" style={{ color: 'var(--lime)' }}>After</span></div>
            <ul>{AFTER.map((x) => <li key={x}><span className="mk">✓</span><span>{x}</span></li>)}</ul>
          </article>
        </div>
      </div>
    </section>
  );
}
