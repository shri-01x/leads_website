import { Logo } from './Icons.jsx';
import { CONTACT, OFFICES } from '../config.js';
import { SERVICES } from '../data/services.jsx';

export default function Footer({ onPickService }) {
  return (
    <footer className="foot" id="contact">
      <div className="wrap">
        <div className="foot-grid">
          <div className="about">
            <Logo />
            <p>Lead generation marketing agency. Email, SMS, blog, LinkedIn and social media, done for you.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><span className="k">Direct</span><a href={CONTACT.phoneHref}>{CONTACT.phoneLabel}</a></li>
              <li><span className="k">WhatsApp</span><a href={CONTACT.whatsappHref} target="_blank" rel="noopener">{CONTACT.whatsappLabel}</a></li>
              <li><span className="k">Email</span><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            </ul>
          </div>
          <div>
            <h4>Offices</h4>
            <ul>
              {OFFICES.map((o) => (
                <li key={o.name}>
                  <address><span className="k">{o.name}</span>{o.lines[0]}<br />{o.lines[1]}</address>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {SERVICES.map((s, i) => (
                <li key={s.key}><a href="#services" onClick={() => onPickService(i)}>{s.key}</a></li>
              ))}
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} Leadszz. All rights reserved.</span>
          <span>More leads. Less chasing.</span>
        </div>
      </div>
    </footer>
  );
}
