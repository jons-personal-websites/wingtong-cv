const SURGE_BASE = 'https://wingtong.surge.sh/assets/images/';

const PROJECTS = {
  dashboard: {
    color: '#E17055',
    label: 'Case Study',
    title: 'Redesigning the POS management experience for multi-location restaurants',
    subtitle: 'Designer & Product Manager · F&B Technology',
    banner: SURGE_BASE + 'dashboard-banner2.jpg',
    sections: [
      {
        heading: 'Overview',
        text: 'A central POS management dashboard web app enabling IT executives to update menu and point-of-sale configurations across multiple restaurant locations. The client operates 20 quick-service restaurant chains in Singapore.',
      },
      {
        heading: 'The Problem',
        items: [
          { bold: 'Inefficient Menu Updates:', text: 'Required multiple steps to update menu data per outlet per product. When price adjustments affected multiple locations, executives updated each outlet individually. CSV imports required separate files per category per outlet.' },
          { bold: 'Inflexible Update Timing:', text: 'Any action on the dashboard took immediate effect, forcing updates only before business hours or at midnight.' },
          { bold: 'Offline Accessibility Issues:', text: 'Web-based system became unavailable when cashiers refreshed pages offline, with intermittent internet creating escalations.' },
        ],
      },
      {
        heading: 'The Solution',
        items: [
          { bold: 'Master Categories:', text: 'Update product lists across outlets simultaneously instead of one-by-one.' },
          { bold: 'Localised Pricing:', text: 'Each product displays its default price with all outlets. Outlets can override the default or hide products. Only overridden outlets are shown.' },
          { bold: 'Manual Sync Control:', text: 'Universal Sync Button appears when unsynced POSs exist, with bulk actions for multiple devices.' },
        ],
        images: [
          { src: SURGE_BASE + 'dashboard-bulk-edit2.jpg', alt: 'Bulk edit interface' },
          { src: SURGE_BASE + 'dashboard-localised-pricing.jpg', alt: 'Localised pricing view' },
          { src: SURGE_BASE + 'dashboard-universal-sync.jpg', alt: 'Universal sync control' },
        ],
      },
      {
        heading: 'Design Process',
        images: [
          { src: SURGE_BASE + 'dashboard-user-journey-update-price.jpg', alt: 'User journey map for price updates' },
          { src: SURGE_BASE + 'dashboard-menu-lofi.jpg', alt: 'Low-fidelity wireframes' },
          { src: SURGE_BASE + 'dashboard-import-csv.png', alt: 'CSV import flow' },
        ],
      },
    ],
    metrics: [
      { value: '0', label: 'CSV Imports Needed' },
      { value: '20', label: 'Restaurant Chains Served' },
      { value: '1x', label: 'Single Update for All Outlets' },
    ],
  },

  pos: {
    color: '#6C5CE7',
    label: 'Case Study',
    title: 'Optimising the checkout process for quick service restaurants',
    subtitle: 'Sole Designer · Experience design, visual interface, design system',
    banner: SURGE_BASE + 'POS-banner.jpg',
    sections: [
      {
        heading: 'Overview',
        text: 'An Android POS app for quick service restaurant cashiers to take orders and process payment. Transitioning from cloud-based to a hybrid POS system storing data locally while syncing to the cloud.',
      },
      {
        heading: 'The Problem',
        items: [
          { bold: 'Limited Customisation:', text: 'Only one product variant could be recorded, preventing multiple modifications like "no chilli".' },
          { bold: 'Interface Usability:', text: 'Quantity stepper located far from cart items and close to clear cart button, causing accidental presses.' },
          { bold: 'Payment Screen Confusion:', text: 'Pay, clear, and cancel buttons too close together.' },
          { bold: 'Receipt Discovery:', text: 'Cashiers had to key in exact receipt numbers to locate receipts.' },
          { bold: 'Accessibility:', text: 'Majority of cashiers had Chinese as native language with limited English literacy. Truncated product names, untranslated errors, small fonts.' },
        ],
      },
      {
        heading: 'User Research',
        text: 'Conducted field interviews with cashiers at restaurant outlets to understand pain points firsthand.',
        images: [
          { src: SURGE_BASE + 'WTHafiInterview.jpg', alt: 'User interview at restaurant' },
          { src: SURGE_BASE + 'HafiWTInterview.jpg', alt: 'Field research session' },
          { src: SURGE_BASE + 'customerJourney-FSPOS.png', alt: 'Customer journey map' },
        ],
      },
      {
        heading: 'The Solution',
        items: [
          { bold: 'Multiple Customisations:', text: 'One-page scroll option (fewer taps), optional with defaults.' },
          { bold: 'Simplified Cart Controls:', text: 'Quantity stepper relocated to individual cart items, swipe to delete.' },
          { bold: 'Display Labels:', text: 'Physical counter numbers on product cards.' },
          { bold: 'Payment Optimization:', text: 'Voucher button relocated to payment screen, "exact" button for precise amounts.' },
          { bold: 'Receipt Browsing:', text: 'Changed from search to browse mode with daily receipt list.' },
          { bold: 'Design System:', text: 'Comprehensive system developed during high-fidelity phases.' },
        ],
        images: [
          { src: SURGE_BASE + 'pos-optiongroup1.jpg', alt: 'Option group customisation' },
          { src: SURGE_BASE + 'pos-optiongroup2.jpg', alt: 'Multiple option groups' },
          { src: SURGE_BASE + 'pos-cart.jpg', alt: 'Redesigned cart interface' },
          { src: SURGE_BASE + 'pos-displaylabel.jpg', alt: 'Display labels on products' },
          { src: SURGE_BASE + 'pos-reprint-receipt.png', alt: 'Receipt browsing' },
          { src: SURGE_BASE + 'pos-design-system.png', alt: 'POS design system' },
        ],
      },
    ],
    metrics: [
      { value: '10%', label: 'Decreased Avg Transaction Time' },
      { value: '20%', label: 'Decreased User Error Rate' },
    ],
  },

  accountancy: {
    color: '#0984E3',
    label: 'Case Study',
    title: 'Helping accountants upskill with courses',
    subtitle: 'Experience & Interface Designer · Institute of Singapore Chartered Accountants',
    banner: SURGE_BASE + 'isca-cover4.jpg',
    sections: [
      {
        heading: 'Overview',
        text: 'A redesign for the Institute of Singapore Chartered Accountants (ISCA) — Singapore\'s accountancy body with over 32,000 members. Corporate website redesign and app prototype completed within seven months.',
      },
      {
        heading: 'The Problem',
        items: [
          { bold: 'Poor Search Relevance:', text: 'Results sorted alphabetically, overwhelming filters, calendar view on separate page.' },
          { bold: 'Poor Wayfinding:', text: 'Deep navigation, confusing terminology, excessive weekly inquiries.' },
          { bold: 'Irrelevant Content for Non-Members:', text: 'Website tailored to existing members, not prospective accountants.' },
          { bold: 'Lengthy Add-to-Cart Process:', text: 'Course-specific declarations plus personal details forms, cumbersome with SSG/SFC funding.' },
        ],
        images: [
          { src: SURGE_BASE + 'isca-cpe-listing.jpg', alt: 'Original CPE course listing' },
          { src: SURGE_BASE + 'isca-cpe-calendar.jpg', alt: 'Original calendar view' },
        ],
      },
      {
        heading: 'Research & Personas',
        text: 'Based on 15 interviews, we identified four key user personas and their primary search criteria: topic/keyword, date availability, and CPE hours.',
        images: [
          { src: SURGE_BASE + 'isca-persona1.jpg', alt: 'Persona 1' },
          { src: SURGE_BASE + 'isca-persona2.jpg', alt: 'Persona 2' },
          { src: SURGE_BASE + 'isca-persona3.jpg', alt: 'Persona 3' },
          { src: SURGE_BASE + 'isca-persona4.jpg', alt: 'Persona 4' },
        ],
      },
      {
        heading: 'The Solution',
        items: [
          { bold: 'Flattened IA:', text: 'Reduced from 7 to 3 layers, renamed ambiguous terminology.' },
          { bold: 'Improved Search:', text: 'Based on 15 interviews — top criteria: topic/keyword, date availability, CPE hours. Added calendar view alongside list view.' },
          { bold: 'Persona-Based Segmentation:', text: 'Four user types (junior, experienced, students, private). Added persona filter on homepage.' },
          { bold: 'Streamlined Purchase:', text: 'Combined date and funding selection, moved declarations to checkout, auto-fill from profile.' },
        ],
        images: [
          { src: SURGE_BASE + 'isca-redesigned-IA.jpg', alt: 'Redesigned information architecture' },
          { src: SURGE_BASE + 'isca-calendar.jpg', alt: 'New calendar view' },
          { src: SURGE_BASE + 'isca-segmented-content.jpg', alt: 'Segmented content by persona' },
          { src: SURGE_BASE + 'isca-cart-checkout.jpg', alt: 'Streamlined checkout' },
          { src: SURGE_BASE + 'isca-course-search-app.jpg', alt: 'Course search app' },
          { src: SURGE_BASE + 'isca-phone.jpg', alt: 'Mobile app prototype' },
        ],
      },
    ],
    metrics: [
      { value: '10%', label: 'Reduced Bounce Rate' },
      { value: '5,000+', label: 'App Downloads' },
      { value: '4/5', label: 'Usability Score' },
    ],
  },

  biz360: {
    color: '#00B894',
    label: 'Case Study',
    title: 'Guiding entrepreneurs to start businesses',
    subtitle: 'Designer · Government Digital Services',
    banner: SURGE_BASE + 'Biz360-cover.jpg',
    sections: [
      {
        heading: 'Overview',
        text: 'A portal consolidating government business applications into one unified platform where Singapore business owners can submit and track applications centrally.',
      },
      {
        heading: 'The Problem',
        items: [
          { bold: 'Fragmented Government Services:', text: 'Business owners had to bounce between government agencies for various applications.' },
          { bold: 'Knowledge Gap:', text: 'Novice entrepreneurs lacked business knowledge, risking operational delays from missed prerequisite licenses.' },
        ],
      },
      {
        heading: 'The Solution',
        items: [
          { bold: 'Guided Journey:', text: 'Sequential progress tracker guiding users through business tasks toward goals.' },
          { bold: 'Compliance Integration:', text: 'Each step provides application forms with compliance requirements, reducing rejection likelihood.' },
          { bold: 'Intuitive Design:', text: '100% participant comprehension in usability testing.' },
        ],
        images: [
          { src: SURGE_BASE + 'Biz360-1.jpg', alt: 'Biz360 guided journey' },
          { src: SURGE_BASE + 'Biz360-2.jpg', alt: 'Business setup flow' },
          { src: SURGE_BASE + 'Biz360-6.jpg', alt: 'Application tracking' },
        ],
      },
      {
        heading: 'Design Process',
        images: [
          { src: SURGE_BASE + 'biz360-storyboard.jpg', alt: 'Storyboard' },
          { src: SURGE_BASE + 'Biz360-mansory1.jpg', alt: 'Design explorations' },
          { src: SURGE_BASE + 'Biz360-mansory2.jpg', alt: 'Interface designs' },
          { src: SURGE_BASE + 'Biz360-mansory3.jpg', alt: 'Final screens' },
          { src: SURGE_BASE + 'Biz360-mansory4.jpg', alt: 'Additional screens' },
        ],
      },
    ],
    metrics: [
      { value: 'S$500', label: 'Reduced Total Fees' },
      { value: '10-14d', label: 'Reduced Turnaround Time' },
      { value: '547K+', label: 'Businesses Adopted' },
    ],
  },

  gateway: {
    color: '#FDCB6E',
    label: 'Case Study',
    title: 'Building an emotional connection for a gateway & catering brand',
    subtitle: 'Lead Designer · Team of 7, 7-month project',
    banner: SURGE_BASE + 'sats-cover.jpg',
    sections: [
      {
        heading: 'Overview',
        text: 'A corporate website redesign for an aviation, healthcare, and hospitality services company operating across 55+ locations.',
      },
      {
        heading: 'The Problem',
        items: [
          { bold: 'Scalability Issues:', text: 'Existing site couldn\'t scale with hypergrowth.' },
          { bold: 'Brand Communication Gap:', text: 'Needed to communicate expansion into gateway and catering services.' },
          { bold: 'Poor Navigation:', text: 'Navigation for services and global contacts was poor.' },
        ],
        images: [
          { src: SURGE_BASE + 'SATS-before.jpg', alt: 'Original website' },
        ],
      },
      {
        heading: 'The Solution',
        items: [
          { bold: 'People-First Storytelling:', text: 'Foregrounded staff through authentic articles, videos, photos, and emotional messaging.' },
          { bold: 'Simplified Service Architecture:', text: 'Tested two-way filter but found it introduced friction. Reverted to straightforward two-category structure for 60+ services.' },
        ],
        images: [
          { src: SURGE_BASE + 'sats-early-designs.jpg', alt: 'Early design explorations' },
          { src: SURGE_BASE + 'sats-stories.jpg', alt: 'People-first storytelling' },
          { src: SURGE_BASE + 'sats-map.jpg', alt: 'Global locations map' },
          { src: SURGE_BASE + 'sats-megamenu2.jpg', alt: 'Mega menu navigation' },
          { src: SURGE_BASE + 'sats-2choices.jpg', alt: 'Service category structure' },
        ],
      },
      {
        heading: 'Brand & Mobile',
        images: [
          { src: SURGE_BASE + 'sats-phone.jpg', alt: 'Mobile responsive design' },
          { src: SURGE_BASE + 'sats-history.png', alt: 'Company history timeline' },
        ],
      },
    ],
    metrics: [
      { value: '78%', label: 'Increased Website Visits' },
      { value: '55+', label: 'Global Locations Served' },
    ],
  },

  scs: {
    color: '#E84393',
    label: 'Case Study',
    title: 'Making trip planning to Science Centre a breeze',
    subtitle: 'Interface Designer · Team with lead designer, PM, researcher, 3 developers',
    banner: SURGE_BASE + 'scs-plan-my-visit.jpg',
    sections: [
      {
        heading: 'Overview',
        text: 'A scientific institution corporate website redesign expanding the target audience from parents to young adults, over a 6-month period.',
      },
      {
        heading: 'The Problem',
        items: [
          { bold: 'Information Overload:', text: 'Content-heavy site made finding key exhibition info difficult. Some exhibits required advanced science literacy unsuitable for young children.' },
          { bold: 'Outdated Visual Identity:', text: 'Target audience shifted to include young adults, but design still targeted children.' },
        ],
        images: [
          { src: SURGE_BASE + 'scsold.jpg', alt: 'Original Science Centre website' },
          { src: SURGE_BASE + 'scspersona.jpg', alt: 'User personas' },
          { src: SURGE_BASE + 'scs-userflow.jpg', alt: 'User flow diagram' },
        ],
      },
      {
        heading: 'The Solution',
        items: [
          { bold: 'Itinerary Planner:', text: 'Smart generator creating personalized itineraries based on visit duration, children\'s ages, and interests.' },
          { bold: 'Interactive Map:', text: 'SVG-based 2D map with exhibition pins for building navigation.' },
          { bold: 'Visual Rebrand:', text: 'Retained orange, introduced dark blue, refined typography, immersive photography for young adults.' },
        ],
        images: [
          { src: SURGE_BASE + 'scs-merge.jpg', alt: 'Redesigned Science Centre website' },
          { src: SURGE_BASE + 'scs-findbydate.jpg', alt: 'Find by date feature' },
        ],
      },
    ],
    metrics: [
      { value: 'STEVIE', label: '2018 Best UX Award', small: true },
      { value: '6mo', label: 'Project Duration' },
    ],
  },
};
