import { createClient } from '@sanity/client';
import { gowns, type Gown, type SanityImage } from './gowns';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '6sgzy01k';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
});

export type NavItem = {
  label: string;
  href: string;
};

export type SiteSettings = {
  siteName: string;
  tagline: string;
  siteUrl: string;
  description: string;
  keywords: string[];
  footerTitle: string;
  footerBlurb: string;
  location: string;
  email: string;
  instagramUrl: string;
  whatsappNumber: string;
  whatsappUrl: string;
  logo?: SanityImage;
  logoShort?: SanityImage;
};

export type RichTextBlock = {
  _type?: string;
  children?: { text?: string }[];
};

export type HomepageContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaLabel: string;
  heroCtaHref: string;
  manifestoEyebrow: string;
  manifestoHeadline: string;
  manifestoBody: string;
  featuredEyebrow: string;
  featuredTitle: string;
  featuredLinkLabel: string;
  featuredGownSlugs: string[];
  studioEyebrow: string;
  studioHeading: string;
  studioBody: string;
  studioButtonLabel: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaButtonLabel: string;
  heroImage?: SanityImage;
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  intro: string;
  body: RichTextBlock[];
  stats: { value: string; label: string }[];
  valuesEyebrow: string;
  values: { title: string; text: string }[];
  timelineSteps: { index: string; title: string; text: string }[];
  images?: SanityImage[];
};

export type ContactContent = {
  eyebrow: string;
  title: string;
  intro: string;
  buttonLabel: string;
  channels: { label: string; value: string; href: string }[];
  successTitle: string;
  successText: string;
  formButtonLabel: string;
  fields: {
    fullName: string;
    email: string;
    weddingDate: string;
    message: string;
  };
};

export type DressCollection = {
  eyebrow: string;
  title: string;
  intro: string;
  items: Gown[];
};

type SanityDress = Omit<Gown, 'slug'> & {
  slug?: { current?: string } | string | null;
};

const fallbackSiteSettings: SiteSettings = {
  siteName: 'סטודיו נמל',
  tagline: 'יחד, תמיד',
  siteUrl: 'https://studionamal.com',
  description:
    'סטודיו נמל הוא אטלייה כלות בעבודת קוטור, היוצר שמלות של אלגנטיות שקטה ומתמשכת. יחד, תמיד.',
  keywords: ['סטודיו נמל', 'שמלות כלה קוטור', 'שמלות כלה יוקרתיות', 'אטלייה כלות'],
  footerTitle: 'סטודיו נמל',
  footerBlurb: 'יחד, תמיד. אטלייה כלות בעבודת קוטור, המוקדש ליצירת שמלה אחת בכל פעם.',
  location: 'תל אביב — בתיאום מראש בלבד',
  email: 'namal@studionamal.com',
  instagramUrl: 'https://instagram.com',
  whatsappNumber: '+972 00 000 0000',
  whatsappUrl: 'https://wa.me/972000000000',
};

const fallbackHomepage: HomepageContent = {
  heroEyebrow: 'סטודיו נמל',
  heroTitle: 'סטודיו נמל',
  heroSubtitle:
    'שמלות כלה בעבודת קוטור, מעוצבות ומוגמרות בעבודת יד באטלייה שלנו בתל אביב — עבור נשים שלובשות אותן פעם אחת, וזוכרות אותן לתמיד.',
  heroCtaLabel: 'להכיר את השמלות',
  heroCtaHref: '/our-gowns',
  manifestoEyebrow: 'התפיסה שלנו',
  manifestoHeadline:
    'אנחנו מאמינות ששמלת כלה אינה צריכה להתחרות על תשומת הלב. היא פשוט צריכה להישאר — בחדר, בתצלומים, בזיכרון — הרבה אחרי שהערב תם.',
  manifestoBody:
    'כל שמלה של סטודיו נמל מתחילה בשיחה ומסתיימת כמורשת שעוברת מדור לדור. אנחנו עובדות במספרים קטנים, בתיאום מראש, כדי שכל שמלה תקבל את השעות שהיא מבקשת.',
  featuredEyebrow: 'מבחר עבודות',
  featuredTitle: 'השמלות',
  featuredLinkLabel: 'לצפייה בקולקציה המלאה',
  featuredGownSlugs: ['aria', 'celeste', 'marlowe'],
  studioEyebrow: 'הסטודיו',
  studioHeading: 'אטלייה של שלושים שמלות בשנה.',
  studioBody:
    'אין שתי כלות שיוצאות מהאטלייה שלנו נראות אותו הדבר. סטודיו נמל נוסד מתוך אמונה שקוטור הוא מלאכה של ריסון, ומגביל את עצמו במכוון — פחות שמלות, יותר שעות, תשומת לב קרובה יותר.',
  studioButtonLabel: 'לקריאת הסיפור שלנו',
  ctaEyebrow: 'בתיאום מראש בלבד',
  ctaTitle: 'השמלה שלך מתחילה בשיחה.',
  ctaButtonLabel: 'לתיאום פגישת ייעוץ',
};

const fallbackAbout: AboutContent = {
  eyebrow: 'נוסד ב־2015 — תל אביב',
  title: 'בית שנבנה סביב רעיון אחד.',
  intro:
    'סטודיו נמל נוסד מתוך אמונה אחת: ששמלת כלה ראויה לאותה קפדנות כמו כל בגד שעולה למסלול, ולאותה אינטימיות של דבר שנלבש פעם אחת בלבד, על ידי מישהי שאנחנו מכירים היטב.',
  body: [
    { _type: 'block', children: [{ text: 'מה שהתחיל בשולחן גזירה אחד בבית דפוס ישן ליד הנמל צמח, לאט ובכוונה, לאטלייה שלם — חדר גזרות, שולחן רקמה, חדר מדידות — מבלי לאבד לרגע את הממדים של סטודיו קטן. אנחנו עדיין מקיימות בעצמנו כל פגישה ראשונה. אנחנו עדיין גוזרות ביד כל מוסלין.' }] },
    { _type: 'block', children: [{ text: 'השם שלנו נולד מהמילה נמל — המקום שאליו חוזרות הספינות. וכך, כך אנו אוהבות לחשוב, הופכת גם שמלת כלה: דבר שאישה חוזרת אליו, בזיכרון, הרבה אחרי שהיום עצמו חלף. יחד, תמיד, כפי שמבטיחה שורת המחץ שלנו — לא רק בני הזוג, אלא האישה והשמלה שבה בחרה להינשא.' }] },
  ],
  stats: [
    { value: '2015', label: 'שנת הקמה' },
    { value: '30', label: 'שמלות בשנה' },
    { value: '+210', label: 'שעות עבודה בשמלה' },
  ],
  valuesEyebrow: 'איך אנחנו עובדות',
  values: [
    { title: 'שמלה אחת, כלה אחת', text: 'אף גזרה אינה חוזרת על עצמה אצל שתי כלות באותה עונה. השמלה שלך משורטטת לפי המידות שלך בלבד.' },
    { title: 'יד לפני מכונה', text: 'חריזה, דראפינג וגימור נעשים בעבודת יד בחדר העבודה שלנו בתל אביב, לעולם לא במיקור חוץ.' },
    { title: 'זמן, לא טרנד', text: 'אנחנו מעצבות עבור התצלומים שתביטי בהם בעוד שלושים שנה, לא עבור העונה שבה אנחנו נמצאות כרגע.' },
  ],
  timelineSteps: [
    { index: '01', title: 'פגישת ייעוץ', text: 'אנחנו מתחילות בסלון, בלי סקיצות ובלי בדים — רק שיחה על היום שאת מדמיינת ועל האישה שתהיי בו.' },
    { index: '02', title: 'עיצוב', text: 'מתוך אותה שיחה נולדת גזרה. אנחנו משרטטות את הדפוס שלך לפי המידות שלך בלבד, ומציגות לך את הסקיצה הראשונה פנים אל פנים.' },
    { index: '03', title: 'מלאכת יד', text: 'השמלה שלך נגזרת, עוברת דראפינג ומוגמרת בעבודת יד לאורך סדרת מדידות — לרוב שלושה עד חמישה חודשים של עבודה שקטה וקפדנית.' },
    { index: '04', title: 'יום החתונה שלך', text: 'השמלה מגיעה אל דלתך בצורתה הסופית. אנחנו מבקשות דבר אחד בתמורה: תצלום, לארכיון שלנו של הנשים שלבשו אותה.' },
  ],
};

const fallbackContact: ContactContent = {
  eyebrow: 'ביקור באטלייה',
  title: 'יצירת קשר',
  intro: 'בתיאום מראש בלבד, מיום ראשון עד חמישי. ספרי לנו על התאריך שלך, ונמצא יחד זמן להיפגש בסלון או בשיחה.',
  buttonLabel: 'לתיאום פגישת ייעוץ',
  channels: [
    { label: 'אינסטגרם', value: '@studionamal', href: 'https://instagram.com' },
    { label: 'וואטסאפ', value: '+972 00 000 0000', href: 'https://wa.me/972000000000' },
    { label: 'אימייל', value: 'namal@studionamal.com', href: 'mailto:namal@studionamal.com' },
  ],
  successTitle: 'הפנייה התקבלה',
  successText: 'נחזור אלייך מהאטלייה בתוך שני ימי עסקים כדי לתאם את הפגישה.',
  formButtonLabel: 'שליחת הפנייה',
  fields: {
    fullName: 'שם מלא',
    email: 'כתובת אימייל',
    weddingDate: 'תאריך החתונה (רשות)',
    message: 'ספרי לנו על היום שלך',
  },
};

const fallbackDressCollection: DressCollection = {
  eyebrow: 'הקולקציות',
  title: 'השמלות שלנו',
  intro: 'ארכיון חי של הגזרות שאנחנו חוזרות אליהן. כל שמלה זמינה כפי שהיא, או כנקודת פתיחה למשהו שנתפר כולו סביבך.',
  items: gowns,
};

function normalizeDress(dress: SanityDress): Gown {
  const slug = typeof dress.slug === 'string' ? dress.slug : dress.slug?.current ?? '';

  return {
    slug,
    name: dress.name,
    description: dress.description,
    year: dress.year,
    collection: dress.collection,
    sketch: dress.sketch,
    size: dress.size,
  };
}

const fallbackNavigation: NavItem[] = [
  { label: 'בית', href: '/' },
  { label: 'הסטודיו', href: '/the-studio' },
  { label: 'השמלות', href: '/our-gowns' },
  { label: 'החוויה', href: '/the-experience' },
  { label: 'יצירת קשר', href: '/contact' },
];

async function fetchFromSanity<T>(query: string, fallback: T, params: Record<string, unknown> = {}): Promise<T> {
  try {
    const result = await sanityClient.fetch<T | null>(query, params, { cache: 'no-store' });
    return result ?? fallback;
  } catch {
    return fallback;
  }
}

async function fetchRequiredFromSanity<T>(query: string, params: Record<string, unknown> = {}): Promise<T> {
  const result = await sanityClient.fetch<T | null>(query, params, { cache: 'no-store' });

  if (result === null) {
    throw new Error('Required Sanity document was not found');
  }

  return result;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return fetchFromSanity<SiteSettings>(`*[_type == "siteSettings"][0]{ siteName, tagline, siteUrl, description, keywords, footerTitle, footerBlurb, location, email, instagramUrl, whatsappNumber, whatsappUrl, logo, logoShort }`, fallbackSiteSettings);
}

export async function getNavigation(): Promise<NavItem[]> {
  return fetchFromSanity<{ items: NavItem[] }>(`*[_type == "navigation"][0]{ items }`, { items: fallbackNavigation }).then((data) => data.items ?? fallbackNavigation);
}

export async function getHomepage(): Promise<HomepageContent> {
  return fetchRequiredFromSanity<HomepageContent>(`*[_type == "homepage" && _id == "homepage"][0]{ heroEyebrow, heroTitle, heroSubtitle, heroCtaLabel, heroCtaHref, heroImage, manifestoEyebrow, manifestoHeadline, manifestoBody, featuredEyebrow, featuredTitle, featuredLinkLabel, featuredGownSlugs, studioEyebrow, studioHeading, studioBody, studioButtonLabel, ctaEyebrow, ctaTitle, ctaButtonLabel }`);
}

export async function getAbout(): Promise<AboutContent> {
  return fetchFromSanity<AboutContent>(`*[_type == "about"][0]{ eyebrow, title, intro, body, images, stats, valuesEyebrow, values, timelineSteps }`, fallbackAbout);
}

export async function getContact(): Promise<ContactContent> {
  return fetchFromSanity<ContactContent>(`*[_type == "contact"][0]{ eyebrow, title, intro, buttonLabel, channels, successTitle, successText, formButtonLabel, fields }`, fallbackContact);
}

export async function getDresses(): Promise<DressCollection> {
  const items = await fetchFromSanity<SanityDress[]>(`*[_type == "dress"] | order(_createdAt asc) { slug, name, description, year, collection, sketch, size, coverImage, galleryImages }`, gowns as SanityDress[]);

  return {
    ...fallbackDressCollection,
    items: items.map(normalizeDress),
  };
}

export async function getDressBySlug(slug: string): Promise<Gown | null> {
  const dress = await fetchFromSanity<SanityDress | null>(
    `*[_type == "dress" && slug.current == $slug][0]{ slug, name, description, year, collection, sketch, size, coverImage, galleryImages }`,
    null,
    { slug }
  );

  if (!dress) return null;

  return normalizeDress(dress);
}

export function getSanityText(blocks?: RichTextBlock[] | null): string {
  if (!blocks) return '';
  return blocks
    .flatMap((block) => block.children ?? [])
    .map((child) => child.text ?? '')
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}
