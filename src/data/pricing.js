// Pricing per service. All prices are per month.
// meter = how full the volume bar is (0–100). The last plan in each list is highlighted.

export const PRICING_TABS = [
  { key: 'email', label: 'Email', icon: 'mail' },
  { key: 'sms', label: 'SMS', icon: 'sms' },
  { key: 'blog', label: 'Blog', icon: 'pen' },
  { key: 'li', label: 'LinkedIn', icon: 'net' },
  { key: 'soc', label: 'Social Media', icon: 'soc' },
];

export const PRICING = {
  email: {
    badge: 'Best value',
    features: ['Email copy written for you', 'Campaign setup & sending', 'Monthly report'],
    plans: [
      { name: 'Starter', price: 99, volume: '50,000', unit: 'emails / month', meter: 5, note: '≈ $1.98 per 1,000 emails' },
      { name: 'Growth', price: 299, volume: '250,000', unit: 'emails / month', meter: 25, note: '≈ $1.20 per 1,000 emails' },
      { name: 'Pro', price: 499, volume: '500,000', unit: 'emails / month', meter: 50, note: '≈ $1.00 per 1,000 emails' },
      { name: 'Scale', price: 899, volume: '1 million', unit: 'emails / month', meter: 100, note: '≈ $0.90 per 1,000 emails' },
    ],
  },
  sms: {
    badge: 'Best value',
    features: ['SMS copy written for you', 'Campaigns & automations', 'Opt-in list management', 'Monthly report'],
    plans: [
      { name: 'Starter', price: 499, volume: '50,000', unit: 'SMS / month', meter: 33, note: '≈ 1.0¢ per SMS' },
      { name: 'Growth', price: 999, volume: '150,000', unit: 'SMS / month', meter: 100, note: '≈ 0.67¢ per SMS' },
    ],
  },
  blog: {
    badge: 'Most output',
    features: ['SEO keyword research', 'Written for your brand', 'Published on your site'],
    plans: [
      { name: 'Starter', price: 99, volume: '60', unit: 'blog articles / month', meter: 40, note: '2 articles every day' },
      { name: 'Growth', price: 299, volume: '150', unit: 'blog articles / month', meter: 100, note: '5 articles every day' },
    ],
  },
  li: {
    badge: 'Most output',
    features: ['Written in your voice', 'Content calendar', 'Posted for you'],
    plans: [
      { name: 'Starter', price: 99, volume: '60', unit: 'LinkedIn posts / month', meter: 40, note: '2 posts every day' },
      { name: 'Growth', price: 299, volume: '150', unit: 'LinkedIn posts / month', meter: 100, note: '5 posts every day' },
    ],
  },
  soc: {
    badge: 'Most output',
    features: ['Designed for your brand', 'Short-form vertical videos', 'Captions & hashtags'],
    plans: [
      { name: 'Starter', price: 199, volume: '4 posts + 1 video', unit: 'every week', meter: 45, note: '≈ 16 posts + 4 videos a month' },
      { name: 'Growth', price: 299, volume: '5 posts + 3 videos', unit: 'every week', meter: 100, note: '≈ 20 posts + 12 videos a month' },
    ],
  },
};
