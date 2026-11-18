import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icons.jsx';
import { BOOKING_URL } from '../config.js';
import { PRICING, PRICING_TABS } from '../data/pricing.js';

export default function Pricing() {
  const [service, setService] = useState('email');
  const [slide, setSlide] = useState(0); // which card is in view on mobile (swipe)
  const plansRef = useRef(null);
  const data = PRICING[service];
  const count = data.plans.length;

  // Back to the first card whenever the service changes.
  useEffect(() => {
    if (plansRef.current) plansRef.current.scrollLeft = 0;
    setSlide(0);
  }, [service]);

  const onScroll = () => {
    const el = plansRef.current;
    const first = el.firstElementChild;
    const w = first ? first.offsetWidth + 12 : 1;
    setSlide(Math.min(Math.round(el.scrollLeft / w), count - 1));
  };

  return (
    <section className="sec" id="pricing" aria-labelledby="price-h">
      <div className="wrap">
        <div className="pr-head rv">
          <div>
            <span className="tag"><i />Pricing</span>
            <h2 className="h2" id="price-h">Simple monthly <span className="serif">pricing.</span></h2>
          </div>
          <p className="lead">Pick a service, then pick the volume that fits. Every plan is billed per month.</p>
        </div>

        <div className="seg" role="tablist" aria-label="Pricing by service">
          {PRICING_TABS.map((t) => (
            <button key={t.key} role="tab" aria-selected={t.key === service} onClick={() => setService(t.key)}>
              <Icon name={t.icon} />{t.label}
            </button>
          ))}
        </div>

        <div
          className={`plans${count === 2 ? ' two' : ''}`}
          role="tabpanel"
          aria-live="polite"
          ref={plansRef}
          onScroll={onScroll}
          key={service}
        >
          {data.plans.map((p, i) => {
            const hi = i === count - 1;
            return (
              <article className={`plan${hi ? ' hi' : ''}`} key={p.name}>
                <div className="plan-top">
                  <span className="mono">{p.name}</span>
                  {hi && <span className="bdg">{data.badge}</span>}
                </div>
                <div className="amt"><span className="c">$</span><span className="n">{p.price}</span><span className="m">/ month</span></div>
                <div className="vol">
                  <b>{p.volume}</b>
                  <span>{p.unit}</span>
                  <div className="meter"><i style={{ width: `${p.meter}%` }} /></div>
                  {p.note && <span className="unit">{p.note}</span>}
                </div>
                <ul>{(p.features || data.features).map((f) => <li key={f}>{f}</li>)}</ul>
                <a className={`btn ${hi ? 'btn-lime' : 'btn-ink'}`} href={BOOKING_URL} target="_blank" rel="noopener">Get started <b>→</b></a>
              </article>
            );
          })}
        </div>

        {/* Shown on phones only (see .swipe in styles.css) */}
        <div className="swipe mono" aria-hidden="true">
          <span>Swipe for more plans →</span>
          <span className="dots">{data.plans.map((_, i) => <i key={i} className={i === slide ? 'on' : ''} />)}</span>
        </div>

        <p className="pr-note">
          Want more than one service, or bigger volume? <a href={BOOKING_URL} target="_blank" rel="noopener">Book a meeting</a> and we'll put together a package for you.
        </p>
      </div>
    </section>
  );
}
