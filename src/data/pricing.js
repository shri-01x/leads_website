// Pricing per service. All prices are per month.
// meter = how full the volume bar is (0–100). note = optional small line under the bar.
// features can be set per service (shared by all plans) or per plan (plan.features wins). The last plan in each list is highlighted.

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
      { name: 'Starter', price: 99, volume: '50,000', unit: 'emails / month', meter: 5 },
      { name: 'Growth', price: 299, volume: '250,000', unit: 'emails / month', meter: 25 },
      { name: 'Pro', price: 499, volume: '500,000', unit: 'emails / month', meter: 50 },
      { name: 'Scale', price: 899, volume: '1 million', unit: 'emails / month', meter: 100 },
    ],
  },
  sms: {
    badge: 'Save 10%',
    plans: [
      {
        name: 'Starter', price: 499, volume: '49,900', unit: 'SMS messages / month', meter: 50, note: '1.00¢ per SMS',
        features: ['SMS copy written for you','Campaigns & automations','Opt-in list management','Monthly report'],
      },
      {
        name: 'Growth', price: 899, volume: '100,000', unit: 'SMS messages / month', meter: 100, note: '0.899¢ per SMS',
        features: ['Everything in Starter','Advanced SMS automations','Audience segmentation','Priority campaign support'],
      },
    ],
  },
  blog: {
    badge: 'Best value',
    plans: [
      {
        name: 'Starter', price: 99, volume: '50', unit: 'SEO blog articles / month', meter: 36, note: '$1.98 per article',
        features: ['SEO keyword research','AI-written for your brand','Automatic website publishing','SEO titles & meta descriptions','1 connected website','Content scheduling','Monthly performance report'],
      },
      {
        name: 'Growth', price: 199, volume: '140', unit: 'SEO blog articles / month', meter: 100, note: '$1.42 per article',
        features: ['Everything in Starter','Advanced SEO keyword research','Up to 3 connected websites','Automatic internal linking','Content calendar & scheduling','Priority publishing queue','Monthly performance report','Priority email support'],
      },
    ],
  },
  li: {
    badge: 'Best value',
    plans: [
      {
        name: 'Starter', price: 99, volume: '20', unit: 'LinkedIn posts / month', meter: 33, note: '5 posts per week',
        features: ['AI-written in your brand voice','Personalized content calendar','Industry-specific content','Post scheduling & publishing','1 LinkedIn account','Monthly performance report'],
      },
      {
        name: 'Growth', price: 299, volume: '60', unit: 'LinkedIn posts / month', meter: 100, note: 'Up to 2 posts daily',
        features: ['Everything in Starter','Advanced content strategy','Up to 3 LinkedIn accounts','Thought leadership content','Post scheduling & publishing','Performance analytics','Priority support'],
      },
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
