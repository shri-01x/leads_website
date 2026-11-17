// The five services shown in the "Services" explorer.
// Each one has a title, description, bullet list and a sample preview (demo).

const Serif = ({ children }) => <span className="serif">{children}</span>;

export const SERVICES = [
  {
    key: 'Email Marketing',
    tab: <>Email Marketing</>,
    title: <>Cold outreach and nurture emails that <Serif>get replies.</Serif></>,
    text: 'We build your prospect list, write every email and run multi-step sequences that follow up for you. Newsletters and nurture flows keep warm leads warm until they are ready to buy.',
    list: ['Prospect list building', 'Cold outreach sequences', 'Nurture flows & newsletters', 'Inbox-friendly sending setup'],
    demoLabel: 'Sample · cold email',
    demoSide: 'Step 2 of 4',
    demo: (
      <>
        <div className="mk-mail">
          <div className="r"><span>From</span>Alex · Northline Co.</div>
          <div className="r"><span>Subj</span>Quick idea for your Q1 pipeline</div>
          <p>Hi Dana, saw your team just opened a second location. We help businesses like yours win more customers without adding headcount. Worth a 10-minute chat?</p>
          <span className="b">Let’s talk →</span>
        </div>
        <div className="seq"><span>Day 1</span><span className="on">Day 3</span><span>Day 7</span><span>Day 14</span></div>
      </>
    ),
  },
  {
    key: 'SMS Marketing',
    tab: <>SMS <Serif>Marketing</Serif></>,
    title: <>Texts and campaigns that <Serif>get answers.</Serif></>,
    text: 'Personal one-to-one texts to new leads while interest is high, plus broadcast campaigns for offers, launches and reminders. Automated drips, opt-in lists and compliant messaging, all managed for you.',
    list: ['Two-way 1:1 texting', 'Broadcast campaigns', 'Automated drips & reminders', 'Opt-in list management'],
    demoLabel: 'Sample · SMS follow-up',
    demoSide: 'Dana K.',
    demo: (
      <>
        <div className="bub o">Hi Dana, it’s Alex from Northline. Saw you grabbed our pricing guide. Want a quick walkthrough?</div>
        <div className="bub i">Sure, tomorrow afternoon works</div>
        <div className="bub o l">Perfect. You’re booked for Tue at 2:00 PM ✓</div>
        <span className="stamp">Read · 4:02 PM</span>
      </>
    ),
  },
  {
    key: 'Blog Writing',
    tab: <>Blog Writing</>,
    title: <>Articles that bring buyers <Serif>to your door.</Serif></>,
    text: 'SEO blog posts written around what your customers actually search for, with a clear next step in every article so readers turn into leads instead of bouncing.',
    list: ['Keyword research', 'SEO articles & guides', 'Lead magnets & CTAs', 'Publishing on your site'],
    demoLabel: 'Sample · SEO article',
    demoSide: 'Search result',
    demo: (
      <>
        <div className="mk-blog">
          <div className="cov">7 ways to turn visitors into <Serif>paying customers.</Serif></div>
          <div className="bd">
            <i style={{ width: '92%' }} /><i style={{ width: '80%' }} /><i style={{ width: '86%' }} /><i style={{ width: '54%' }} />
          </div>
          <div className="ft"><span>Northline Journal</span><span>6 min read</span></div>
        </div>
        <div className="serp"><b>How to turn website visitors into customers</b>northline.co › blog › visitors-to-customers</div>
      </>
    ),
  },
  {
    key: 'LinkedIn Posts',
    tab: <>LinkedIn <Serif>Posts</Serif></>,
    title: <>A feed that makes decision-makers <Serif>notice you.</Serif></>,
    text: 'Posts and carousels written in your voice for your founder profile or company page. Consistent, credible content that builds trust and brings in inbound conversations.',
    list: ['Founder & company posts', 'Carousels', 'Content calendar', 'Comment & DM follow-up'],
    demoLabel: 'Sample · founder post',
    demoSide: 'Carousel',
    demo: (
      <div className="mk-li">
        <div className="who"><span className="av">JR</span><div><b>Jordan Reyes</b><small>Founder · Northline Co.</small></div></div>
        <p>Most sales teams give up after one follow-up. Here’s the 5-touch sequence we use instead ↓</p>
        <div className="slide"><strong>5</strong><span>touches that turn<br />cold leads warm</span></div>
        <div className="rx"><span>Like</span><span>Comment</span><span>Repost</span></div>
      </div>
    ),
  },
  {
    key: 'Social Media',
    tab: <>Social Media</>,
    title: <>Social media that keeps you <Serif>top of mind.</Serif></>,
    text: 'We plan, design and post content for Instagram, Facebook and TikTok. Posts, reels and stories that keep your brand visible and turn followers into enquiries.',
    list: ['Monthly content calendar', 'Post, reel & story design', 'Captions & hashtags', 'Comment & DM follow-up'],
    demoLabel: 'Sample · Instagram post',
    demoSide: 'Feed',
    demo: (
      <>
        <div className="mk-soc">
          <div className="sh"><span className="av">NC</span><div><b>northline.co</b><small>Sponsored</small></div><span className="dots">•••</span></div>
          <div className="img">
            <span className="kick">New this week</span>
            <strong>Spring drop is <Serif>here.</Serif></strong>
            <span className="pill">DM “SPRING” for 20% off</span>
          </div>
          <div className="ac"><span>♡</span><span>✉</span><span>↪</span></div>
          <p><b>northline.co</b> Fresh stock, fresh deals. Tap the link in bio before it’s gone.</p>
        </div>
        <div className="seq"><span className="on">Post</span><span>Reel</span><span>Story</span></div>
      </>
    ),
  },
];
