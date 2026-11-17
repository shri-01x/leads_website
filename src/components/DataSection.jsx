import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icons.jsx';
import { INDUSTRIES_ROW_1, INDUSTRIES_ROW_2 } from '../data/content.js';

/* Counts from 0 up to `to` (fast at first, slowing at the end) each time `run` changes.
   run === 0 means "reset to 0". */
function Counter({ to, suffix, run, delay = 0, big = true }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const paint = (v) => {
      el.innerHTML = big ? `${v}<small>${suffix}</small>` : `${v}${suffix}`;
    };
    if (!run) { paint(0); return; }
    let raf;
    let t0 = null;
    const dur = 2200;
    const step = (t) => {
      if (t0 === null) t0 = t + delay;
      let k = Math.max(0, Math.min(1, (t - t0) / dur));
      k = k === 1 ? 1 : 1 - Math.pow(2, -10 * k); // ease-out-expo
      paint(Math.round(to * k));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, to, suffix, delay, big]);

  // Content is painted by the effect above (React leaves the inside alone).
  return big ? <div className="num" ref={ref} /> : <b ref={ref} />;
}

/* A row of chips that slides continuously (slows down on hover). */
function ChipRow({ items, speed, reverse }) {
  const ref = useRef(null);

  useEffect(() => {
    const row = ref.current;
    const wrap = row.parentNode;
    let half = 0;
    let off = 0;
    let hover = false;
    let last = performance.now();
    let raf;
    const dir = reverse ? -1 : 1;
    const measure = () => { half = row.scrollWidth / 2; };
    measure();
    if (reverse) off = half / 2;
    const enter = () => { hover = true; };
    const leave = () => { hover = false; };
    window.addEventListener('resize', measure);
    wrap.addEventListener('mouseenter', enter);
    wrap.addEventListener('mouseleave', leave);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      off += speed * (hover ? 0.3 : 1) * dt * dir;
      if (half) off = ((off % half) + half) % half;
      row.style.transform = `translate3d(${-off}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', measure);
      wrap.removeEventListener('mouseenter', enter);
      wrap.removeEventListener('mouseleave', leave);
    };
  }, [speed, reverse]);

  // Items are rendered twice so the loop is seamless.
  return (
    <div className={`chip-row${reverse ? ' r2' : ''}`} ref={ref} aria-hidden={reverse || undefined}>
      {[...items, ...items].map((x, i) => <span key={i}>{x}</span>)}
    </div>
  );
}

export default function DataSection() {
  const gridRef = useRef(null);
  const [run, setRun] = useState(0);

  // Start counting when 30% of the grid is visible; reset when it leaves the screen.
  useEffect(() => {
    const grid = gridRef.current;
    if (!('IntersectionObserver' in window)) { setRun(1); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setRun((r) => r + 1);
      else if (e.boundingClientRect.top > 0 || e.boundingClientRect.bottom < 0) setRun(0);
    }, { threshold: 0.3 });
    io.observe(grid);
    return () => io.disconnect();
  }, []);

  return (
    <section className="sec" id="data" aria-labelledby="data-h">
      <div className="wrap">
        <div className="data-head rv">
          <div>
            <span className="tag"><i />Our database</span>
            <h2 className="h2" id="data-h">120 million businesses. <span className="serif">Ready</span> to reach.</h2>
          </div>
          <p className="lead">Our database powers your email and SMS campaigns, so we can target exactly the businesses, industries and locations you want to sell to.</p>
        </div>

        <div className={`dgrid${run ? ' in' : ''}`} ref={gridRef}>
          <article className="dc big">
            <div className="dc-top">
              <span className="mono">Total businesses</span>
              <span className="mono" style={{ color: 'var(--lime)', opacity: 1 }}>● Database</span>
            </div>
            <div>
              <Counter to={120} suffix="M" run={run} />
              <div className="lbl" style={{ marginTop: 14 }}>business records</div>
            </div>
            <div>
              <div className="split" aria-hidden="true"><i /><i /></div>
              <div className="legend" style={{ marginTop: 14 }}>
                <span><Counter to={70} suffix="M" run={run} delay={480} big={false} />{' '}email IDs</span>
                <span><Counter to={50} suffix="M" run={run} delay={600} big={false} />{' '}mobile numbers</span>
              </div>
            </div>
          </article>

          <article className="dc">
            <div className="dc-top"><span className="mono">Email IDs</span><span className="ico"><Icon name="mail" /></span></div>
            <Counter to={70} suffix="M" run={run} delay={120} />
            <p>Business email addresses for cold outreach and nurture campaigns.</p>
          </article>

          <article className="dc">
            <div className="dc-top"><span className="mono">Mobile Numbers</span><span className="ico"><Icon name="sms" /></span></div>
            <Counter to={50} suffix="M" run={run} delay={240} />
            <p>Business mobile numbers for SMS campaigns and one-to-one texting.</p>
          </article>

          <article className="dc ind">
            <div className="row">
              <div>
                <span className="mono">Industries covered</span>
                <div style={{ marginTop: 12 }}><Counter to={400} suffix="+" run={run} delay={360} /></div>
              </div>
              <p style={{ opacity: 0.8 }}>Whoever your ideal customer is, they're very likely in here.</p>
            </div>
            <div className="ichips" aria-label="Example industries">
              <ChipRow items={INDUSTRIES_ROW_1} speed={40} />
              <ChipRow items={INDUSTRIES_ROW_2} speed={32} reverse />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
