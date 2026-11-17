import { BOOKING_URL } from '../config.js';

export default function Cta() {
  return (
    <section className="cta" aria-labelledby="cta-h">
      <div className="wrap cta-in">
        <div>
          <span className="tag"><i />Ready when you are</span>
          <h2 id="cta-h">Let's fill your <span className="serif">pipeline.</span></h2>
        </div>
        <div>
          <p>Book a quick meeting, tell us who you want to reach, and we'll show you the fastest way to get them talking to you.</p>
          <a className="btn btn-ink" href={BOOKING_URL} target="_blank" rel="noopener">Book a Meeting <b>→</b></a>
        </div>
      </div>
    </section>
  );
}
