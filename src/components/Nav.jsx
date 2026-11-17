import { useEffect, useState } from 'react';
import { Logo } from './Icons.jsx';
import { BOOKING_URL, NAV_LINKS } from '../config.js';

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu if the screen becomes wide again.
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1000) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Logo />
        <nav className="links" aria-label="Sections">
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <div className="nav-r">
          <a className="btn btn-lime" href={BOOKING_URL} target="_blank" rel="noopener">Book a Meeting <b>→</b></a>
          <button
            className="burger"
            aria-expanded={open}
            aria-controls="drop"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>
      <div className="drop" id="drop" hidden={!open} onClick={(e) => { if (e.target.closest('a')) setOpen(false); }}>
        {NAV_LINKS.map((l, i) => (
          <a key={l.href} href={l.href}>{l.label} <span>{String(i + 1).padStart(2, '0')}</span></a>
        ))}
        <a className="btn btn-lime" href={BOOKING_URL} target="_blank" rel="noopener">Book a Meeting <b>→</b></a>
      </div>
    </header>
  );
}
