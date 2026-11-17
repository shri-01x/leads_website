// SVG sprite: rendered once at the top of the page, then referenced with <Icon name="mail" />.

export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <symbol id="logo-zz" viewBox="31 0 128 72">
          <g fill="currentColor" transform="skewX(-16)">
            <path transform="translate(54 0)" d="M0 0H56V13L19 59H56V72H0V59L37 13H0Z" />
            <path transform="translate(104 0)" d="M0 0H56V13L19 59H56V72H0V59L37 13H0Z" />
          </g>
        </symbol>
        <symbol id="i-mail" viewBox="0 0 100 100"><rect x="12" y="24" width="76" height="54" rx="6" /><path d="M12 30l38 27 38-27" /></symbol>
        <symbol id="i-sms" viewBox="0 0 100 100"><rect x="28" y="8" width="44" height="84" rx="10" /><path d="M44 16h12" /><path d="M38 36h24M38 48h24M38 60h14" /><circle cx="50" cy="80" r="3" /></symbol>
        <symbol id="i-pen" viewBox="0 0 100 100"><path d="M22 10h38l18 18v62H22z" /><path d="M60 10v18h18" /><path d="M34 46h32M34 58h32M34 70h20" /></symbol>
        <symbol id="i-soc" viewBox="0 0 100 100"><rect x="14" y="14" width="72" height="72" rx="20" /><path d="M50 68c-14-8-17-17-12-21 4-3 9-1 12 4 3-5 8-7 12-4 5 4 2 13-12 21z" /><circle cx="70" cy="30" r="3" /></symbol>
        <symbol id="i-net" viewBox="0 0 100 100"><circle cx="50" cy="32" r="12" /><path d="M28 74a22 22 0 0 1 44 0" /><circle cx="18" cy="52" r="7" /><circle cx="82" cy="52" r="7" /></symbol>
      </defs>
    </svg>
  );
}

export function Icon({ name }) {
  return (
    <svg className="ic" viewBox="0 0 100 100" aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}

export function Logo({ className = '' }) {
  return (
    <a href="#top" className={`logo ${className}`.trim()} aria-label="Leadszz home">
      <svg className="zz" aria-hidden="true"><use href="#logo-zz" /></svg>
      Leadszz
    </a>
  );
}
