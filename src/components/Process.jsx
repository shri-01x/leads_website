import { useEffect, useRef } from 'react';
import { BOOKING_URL } from '../config.js';
import { STEPS } from '../data/content.js';

export default function Process() {
  const listRef = useRef(null);
  const fillRef = useRef(null);
  const stepRefs = useRef([]);

  // Lime line fills down the timeline as you scroll; each step lights up when reached.
  useEffect(() => {
    const update = () => {
      const list = listRef.current;
      if (!list) return;
      const r = list.getBoundingClientRect();
      const mid = window.innerHeight * 0.55;
      const h = Math.max(0, Math.min(r.height - 16, mid - r.top));
      fillRef.current.style.height = `${h}px`;
      stepRefs.current.forEach((li) => {
        if (li) li.classList.toggle('on', li.getBoundingClientRect().top < mid);
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section className="sec proc" id="process" aria-labelledby="pr-h">
      <div className="wrap proc-grid">
        <div className="proc-side">
          <span className="tag"><i />Process</span>
          <h2 className="h2" id="pr-h">From first chat to a <span className="serif">full</span> pipeline.</h2>
          <p className="lead">One tool runs every channel, so your emails, SMS, blog, LinkedIn and social media all tell the same story and point to the same next step.</p>
          <a className="btn btn-lime" href={BOOKING_URL} target="_blank" rel="noopener">Get started <b>→</b></a>
        </div>
        <ol className="tl" ref={listRef}>
          <li className="fill" ref={fillRef} aria-hidden="true" />
          {STEPS.map((st, i) => (
            <li key={st.week} ref={(el) => { stepRefs.current[i] = el; }}>
              <span className="dot">{String(i + 1).padStart(2, '0')}</span>
              <span className="mono wk">{st.week}</span>
              <h3>{st.title} <span className="serif">{st.serif}</span></h3>
              <p>{st.text}</p>
              <div className="chips">{st.chips.map((c) => <span key={c}>{c}</span>)}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
