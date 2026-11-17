import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icons.jsx';
import { BOOKING_URL } from '../config.js';
import { CHANNELS, FEED } from '../data/content.js';

const WIRES = [31, 115, 200, 285, 369];
const DOT_DELAYS = ['0s', '.9s', '.4s', '1.5s', '2s'];
const MAX_ROWS = 7;

function Pipeline() {
  // Start with the first six feed items (newest on top), then add one every 2.4s.
  const counter = useRef(6);
  const [rows, setRows] = useState(() =>
    FEED.slice(0, 6).reverse().map((item, i) => ({ ...item, id: i }))
  );

  useEffect(() => {
    const t = setInterval(() => {
      const n = counter.current++;
      const item = FEED[n % FEED.length];
      setRows((prev) => [{ ...item, id: n }, ...prev].slice(0, MAX_ROWS));
    }, 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="pipe">
      <div className="pipe-h"><strong>Your pipeline</strong><span className="live">Live</span></div>
      <ul className="rows" aria-hidden="true">
        {rows.map((r) => (
          <li key={r.id}>
            <span className="ri"><Icon name={r.icon} /></span>
            <div><b>{r.title}</b><span className="s">{r.sub}</span></div>
            <span className={`st ${r.status}`}>{r.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="h1">
      <div className="wrap">
        <div className="hero-top">
          <div>
            <span className="tag"><i />Lead generation agency</span>
            <h1 id="h1">We turn cold prospects into <span className="serif">hot</span> leads.</h1>
          </div>
          <div className="hero-side">
            <p>
              Leadszz runs your <strong>email and SMS marketing</strong>, writes your <strong>blog</strong>, posts on{' '}
              <strong>LinkedIn</strong> and manages your <strong>social media</strong>. Five channels, one tool, one goal:
              more conversations with people ready to buy.
            </p>
            <div className="hero-btns">
              <a className="btn btn-lime" href={BOOKING_URL} target="_blank" rel="noopener">Book a Meeting <b>→</b></a>
              <a className="btn btn-ghost" href="#services">Explore Services <b>↓</b></a>
            </div>
          </div>
        </div>

        <div className="flow" aria-label="How five channels feed one pipeline">
          <div className="flow-label mono"><span>5 channels in</span><span><b>●</b> 1 pipeline out</span></div>

          <div className="nodes">
            {CHANNELS.map((c) => (
              <div className="node" key={c.name}>
                <span className="ni"><Icon name={c.icon} /></span>
                <b>{c.name}</b>
                <small>{c.tag}</small>
              </div>
            ))}
          </div>

          {/* Lines with lime dots flowing from each channel into the pipeline */}
          <svg className="wires" viewBox="0 0 400 400" preserveAspectRatio="none" aria-hidden="true">
            {WIRES.map((y, i) => (
              <path key={`p${i}`} id={`w${i}`} d={`M0 ${y} C 200 ${y}, 200 200, 400 200`} />
            ))}
            {WIRES.map((_, i) => (
              <circle key={`c${i}`} r="4">
                <animateMotion dur="2.6s" begin={DOT_DELAYS[i]} repeatCount="indefinite">
                  <mpath href={`#w${i}`} />
                </animateMotion>
              </circle>
            ))}
          </svg>

          <div className="drip" aria-hidden="true"><i /><i /><i /></div>
          <Pipeline />
        </div>
      </div>
    </section>
  );
}
