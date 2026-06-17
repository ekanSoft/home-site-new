import type { ProjectSlug, WorkProject } from '../types/site'

/**
 * Public, freelance/contract projects only (EBCD-style work).
 * Employment/staff experience must never appear here — it belongs in
 * src/data/founder-experience.ts and is shown only as founder background.
 *
 * `href` is left empty until live/project links are collected; cards render
 * a "Link pending" state. `image` is empty until screenshots are collected;
 * cards render a branded placeholder.
 */
export const projects: WorkProject[] = [
  {
    title: 'Belles Fleurs Flowers',
    slug: 'belles-fleurs-flowers',
    category: 'ecommerce-website',
    summary:
      'E-commerce website for a Dublin florist, with occasion-based bouquet browsing, product options, gift messages, online ordering, and same-day or scheduled delivery.',
    image: '/images/projects/bellesfleurs.jpg',
    href: 'https://www.bellesfleurs.ie/',
    source: 'freelance-contract',
    tags: ['E-commerce', 'Online ordering', 'Delivery'],
  },
  {
    title: 'Parking Ireland',
    slug: 'parking-ireland',
    category: 'business-website',
    summary:
      "Public website for Ireland's parking representative body, bringing together member resources, industry news, event updates, trade directory listings, and practical parking guidance.",
    image: '/images/projects/parkingireland.jpg',
    href: 'https://www.parkingireland.ie/',
    source: 'freelance-contract',
    tags: ['Association', 'Membership', 'Industry Body'],
  },
  {
    title: 'J.W. Smyth Family Butchers',
    slug: 'jw-smyth-butchers',
    category: 'ecommerce-website',
    summary:
      'Online butcher e-commerce site with product categories, rewards messaging, cart flow, delivery information, and ready-to-order meat selections.',
    image: '/images/projects/jwsmyth.jpg',
    href: 'https://jwsmythbutchers.ie/',
    source: 'freelance-contract',
    tags: ['E-commerce', 'Online store', 'Food & retail'],
  },
  // {
  //   title: 'Custom Coins',
  //   slug: 'custom-coins',
  //   category: 'ecommerce-website',
  //   summary:
  //     'E-commerce website for custom-minted coins and commemorative pieces, with product configuration and ordering.',
  //   image: '',
  //   href: '',
  //   source: 'freelance-contract',
  //   tags: ['E-commerce', 'Custom products'],
  // },
  // {
  //   title: 'Mums & Babies Ireland',
  //   slug: 'mums-and-babies-ireland',
  //   category: 'ecommerce-website',
  //   summary:
  //     'Online store serving parents across Ireland with baby and maternity products, categories, and checkout.',
  //   image: '',
  //   href: '',
  //   source: 'freelance-contract',
  //   tags: ['E-commerce', 'Retail'],
  // },
  // {
  //   title: 'Coffeeshop.ie',
  //   slug: 'coffeeshop-ie',
  //   category: 'ecommerce-website',
  //   summary:
  //     'E-commerce platform for coffee products and accessories, built for repeat ordering and a smooth checkout.',
  //   image: '',
  //   href: '',
  //   source: 'freelance-contract',
  //   tags: ['E-commerce', 'Food & beverage'],
  // },
  // {
  //   title: 'Jim Crowley Craft Butchers',
  //   slug: 'jim-crowley-craft-butchers',
  //   category: 'ecommerce-website',
  //   summary:
  //     'Online ordering for a craft butcher, bringing a traditional local business to online customers.',
  //   image: '',
  //   href: '',
  //   source: 'freelance-contract',
  //   tags: ['E-commerce', 'Food & retail'],
  // },
  // {
  //   title: 'Katies Kombucha',
  //   slug: 'katies-kombucha',
  //   category: 'ecommerce-website',
  //   summary:
  //     'Online store for a craft kombucha brand, with product range, brand storytelling, and checkout.',
  //   image: '',
  //   href: '',
  //   source: 'freelance-contract',
  //   tags: ['E-commerce', 'Food & beverage'],
  // },
  // {
  //   title: 'Rossan Knitwear',
  //   slug: 'rossan-knitwear',
  //   category: 'ecommerce-website',
  //   summary:
  //     'E-commerce website for an Irish knitwear maker, showcasing collections with online purchasing.',
  //   image: '',
  //   href: '',
  //   source: 'freelance-contract',
  //   tags: ['E-commerce', 'Fashion & craft'],
  // },
  // {
  //   title: 'Industrial Temperature Sensors',
  //   slug: 'industrial-temperature-sensors',
  //   category: 'brochure-website',
  //   summary:
  //     'Brochure website for an industrial sensor supplier, presenting product lines and technical capability.',
  //   image: '',
  //   href: '',
  //   source: 'freelance-contract',
  //   tags: ['Brochure site', 'Industrial'],
  // },
  // {
  //   title: 'Irish Dance Dublin',
  //   slug: 'irish-dance-dublin',
  //   category: 'brochure-website',
  //   summary:
  //     'Brochure website for a Dublin dance school, with class information, schedules, and contact details.',
  //   image: '',
  //   href: '',
  //   source: 'freelance-contract',
  //   tags: ['Brochure site', 'Local business'],
  // },
]

export const projectCategoryLabels: Record<WorkProject['category'], string> = {
  'ecommerce-website': 'E-commerce website',
  'brochure-website': 'Brochure website',
  'web-platform': 'Web platform',
  'business-website': 'Business website',
}

/** Projects highlighted on the Home page featured-work section. */
export const featuredProjectSlugs = [
  'belles-fleurs-flowers',
  'parking-ireland',
  'jw-smyth-butchers',
] as const satisfies readonly ProjectSlug[]
