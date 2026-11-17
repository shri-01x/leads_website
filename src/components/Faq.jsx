import { FAQS } from '../data/content.js';

export default function Faq() {
  return (
    <section className="sec faq-sec" id="faq" aria-labelledby="faq-h">
      <div className="wrap faq-grid">
        <div className="rv">
          <span className="tag"><i />FAQ</span>
          <h2 className="h2" id="faq-h">Good <span className="serif">questions.</span></h2>
          <p className="lead" style={{ marginTop: 22 }}>Something else on your mind? Ask us in a quick meeting.</p>
        </div>
        <div className="faq rv">
          {FAQS.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}<span className="pl">+</span></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
