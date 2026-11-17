// Text content used across the page.

// Hero: the five channel boxes on the left of the pipeline.
export const CHANNELS = [
  { icon: 'mail', name: 'Email', tag: 'Inbox' },
  { icon: 'sms', name: 'SMS', tag: 'Text' },
  { icon: 'pen', name: 'Blog', tag: 'SEO' },
  { icon: 'net', name: 'LinkedIn', tag: 'B2B' },
  { icon: 'soc', name: 'Social Media', tag: 'Feeds' },
];

// Hero: rows that keep dropping into the "Your pipeline" box (illustration only).
export const FEED = [
  { icon: 'mail', title: 'Dana K. replied', sub: '“Can we talk Thursday?”', status: 'replied', label: 'Replied' },
  { icon: 'sms', title: 'Marcus T. booked', sub: 'Tue · 2:00 PM meeting', status: 'booked', label: 'Booked' },
  { icon: 'net', title: 'Head of Sales, Arcline', sub: 'Commented on your post', status: 'new', label: 'New' },
  { icon: 'soc', title: 'New DMs on Instagram', sub: 'From your latest reel', status: 'new', label: 'New' },
  { icon: 'pen', title: 'Form fill from blog', sub: '“7 ways to turn visitors…”', status: 'new', label: 'New' },
  { icon: 'mail', title: 'Priya S. replied', sub: '“Send over the proposal.”', status: 'replied', label: 'Replied' },
  { icon: 'sms', title: '42 SMS opt-ins', sub: 'Spring offer campaign', status: 'new', label: 'New' },
  { icon: 'soc', title: 'Leo R. booked', sub: 'Thu · 11:30 AM meeting', status: 'booked', label: 'Booked' },
];

// Database section: example industries in the two sliding rows.
export const INDUSTRIES_ROW_1 = ['Restaurants', 'Real Estate', 'Healthcare', 'Retail', 'Construction', 'Legal', 'Automotive', 'Insurance', 'Software & SaaS', 'Manufacturing'];
export const INDUSTRIES_ROW_2 = ['Fitness', 'Education', 'Logistics', 'Hospitality', 'Finance', 'Beauty & Salons', 'Dental', 'Home Services', 'E-commerce', 'Accounting'];

// Why section
export const BEFORE = [
  'One email sent, no follow-up, no reply',
  'New leads wait days for a reply',
  "Blog hasn't been updated in months",
  'LinkedIn profile goes silent between deals',
  'Social pages look abandoned',
  'No idea which channel actually works',
];
export const AFTER = [
  'Email sequences that follow up for you',
  'SMS reaches new leads while interest is high',
  'Fresh SEO articles that bring in buyers',
  'Steady LinkedIn posts in your own voice',
  'Social media that keeps you top of mind',
  "Monthly reporting on what's working",
];

// Process timeline
export const STEPS = [
  { week: 'Week 1', title: 'Discovery', serif: 'meeting', text: 'We learn your offer, your ideal customer and what a good lead looks like for your business.', chips: ['Offer', 'Ideal customer', 'Goals'] },
  { week: 'Week 1–2', title: 'Strategy &', serif: 'setup', text: 'We choose the right channels, build your lists and write the first round of emails, SMS and posts for your approval.', chips: ['Channel plan', 'Lists', 'First drafts'] },
  { week: 'Week 2+', title: 'Go', serif: 'live', text: 'Campaigns launch across email, SMS, your blog, LinkedIn and social media. Replies and leads come straight to you.', chips: ['Launch', 'Follow-ups', 'Lead hand-off'] },
  { week: 'Every month', title: 'Report &', serif: 'improve', text: "You see what's working. We sharpen the messaging and double down on the channels that bring the best leads.", chips: ['Reporting', 'Testing', 'Optimising'] },
];

// FAQ
export const FAQS = [
  { q: 'Do I need all five channels?', a: "No. Many clients start with one or two channels and add more once they see results. In our first meeting we'll recommend where to start based on who you sell to." },
  { q: 'Which social media platforms do you cover?', a: 'Instagram, Facebook and TikTok, alongside LinkedIn. We plan, design and post your content, and follow up on comments and DMs so interested followers become leads.' },
  { q: 'Are the prices monthly?', a: 'Yes. Every plan is billed per month. You can run a single service or combine several, and change plans as you grow.' },
  { q: 'Who writes the content?', a: "We do. Our team writes every email, SMS, blog post, LinkedIn post and social media post in your brand's voice, and you approve the first round before anything goes out." },
  { q: 'Is your SMS and email outreach compliant?', a: 'We build campaigns around opt-in lists, clear opt-out options and sending best practices, so your messages stay compliant and your sender reputation stays healthy.' },
  { q: "How do I know it's working?", a: "You get a monthly report covering replies, leads and meetings booked by channel, plus what we're changing next month to improve results." },
];
