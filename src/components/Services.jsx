import { useRef } from 'react';
import { SERVICES } from '../data/services.jsx';

export default function Services({ active, setActive }) {
  const tabRefs = useRef([]);
  const s = SERVICES[active];
  const n = SERVICES.length;

  const onKey = (e, i) => {
    let next = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (i + 1) % n;
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (i + n - 1) % n;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section className="sec exp-sec" id="services" aria-labelledby="svc-h">
      <div className="wrap">
        <div className="exp-head rv">
          <div>
            <span className="tag"><i />Services</span>
            <h2 className="h2" id="svc-h">Five channels. <span className="serif">One</span> pipeline.</h2>
          </div>
          <p className="lead">Pick a channel to see what we do and what it looks like when it lands.</p>
        </div>

        <div className="exp">
          <div className="tabs" role="tablist" aria-label="Services">
            {SERVICES.map((svc, i) => (
              <button
                key={svc.key}
                ref={(el) => { tabRefs.current[i] = el; }}
                className="tab"
                role="tab"
                id={`t${i}`}
                aria-controls="panel"
                aria-selected={i === active}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKey(e, i)}
              >
                <span className="n">{String(i + 1).padStart(2, '0')}</span>
                <span className="t">{svc.tab}</span>
                <span className="go">→</span>
              </button>
            ))}
          </div>

          {/* key={active} remounts the panel so its fade-in animation replays */}
          <div className="panel" id="panel" role="tabpanel" aria-labelledby={`t${active}`} key={active}>
            <div className="p-copy">
              <span className="mono" style={{ color: 'var(--ink-soft)' }}>
                {String(active + 1).padStart(2, '0')} / {String(n).padStart(2, '0')} · {s.key}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>{s.list.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="p-demo">
              <div className="mono"><span>{s.demoLabel}</span><span>{s.demoSide}</span></div>
              {s.demo}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
