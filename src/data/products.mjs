export const products = [
  {
    slug: 'unsecured-business-loans',
    name: 'Unsecured business loans',
    category: 'Business finance',
    hook: 'from 1.5% p/30 days',
    band: '£10k–£1m',
    term: 'up to 60 months',
    href: '/products/unsecured-business-loans/',
    cardPoints: ['No security required', 'Soft credit check at application', 'Pay early, for free'],
    meta: {
      title: 'Unsecured Business Loans | from 1.5% per 30 days | The Funding Desk',
      description:
        'Unsecured business loans from £10k–£1m. From 1.5% per 30 days, terms to 60 months, no security and free early repayment.',
    },
    hero: {
      eyebrow: 'Unsecured business loans',
      h1: 'Fund growth without tying up your assets',
      sub: 'Working capital, stock, hiring or expansion — borrowing from £10k–£1m with no security, soft credit checks at application, and rates from 1.5% per 30 days.',
      note: 'No security · Pay interest only for the days you use · Free early repayment',
    },
    stats: [
      { value: 'from 1.5%', label: 'per 30 days, accrue daily' },
      { value: '£10k–£1m', label: 'loan range' },
      { value: '60 months', label: 'maximum term' },
      { value: '24–48h', label: 'funding after approval' },
    ],
    useCases: {
      eyebrow: 'What it’s for',
      heading: 'Typical uses',
      items: [
        'Boosting stock or inventory ahead of peak season',
        'Covering supplier payments and cash-flow gaps',
        'Hiring and training as you scale',
        'Equipment and light asset purchases',
        'Consolidating more expensive finance into one facility',
      ],
    },
    benefits: {
      eyebrow: 'Why borrowers choose us',
      heading: 'Built with the borrower in mind',
      items: [
        'Daily accrual — pay interest only for the days you actually use',
        'No early-repayment fees, ever',
        'Soft eligibility check at application; no credit-score footprint',
        'Open Banking link or 12 months of statements — nothing more',
        'A named underwriter, not a call centre',
      ],
    },
    rates: {
      lead: 'Rates are set by term and amount, and accrue daily.',
      table: {
        columns: ['Loan amount', 'Term', 'Rate (per 30 days)'],
        rows: [
          ['Up to £50,000', '12–60 months', 'from 1.9%'],
          ['£50,000–£250,000', '12–60 months', 'from 1.5%'],
          ['£250,000–£1,000,000', '12–60 months', 'from 1.2%'],
        ],
      },
      note: 'Representative example: £25,000 over 24 months at 1.5% per 30 days accrues about £11,250 of interest in a typical setup; total repayable depends on actual days used. Exact pricing confirmed on application.',
    },
    criteria: {
      heading: 'Key criteria',
      items: [
        'UK registered limited company or LLP',
        'Typically 6 months of trading history',
        '£10,000 minimum loan; £1,000,000 maximum',
        '12 months of bank statements or an Open Banking link',
        'A personal guarantee is required for most facilities',
      ],
    },
    fees: {
      heading: 'Fee schedule',
      items: [
        'No application fee',
        'No early-repayment charge',
        'No brokerage fee when you deal with us directly',
        'No hidden charges — set out in writing before you sign',
      ],
    },
    example: {
      eyebrow: 'Worked example',
      heading: 'What the numbers can look like',
      ledger: [
        { label: 'Loan amount', value: '£50,000' },
        { label: 'Term', value: '24 months' },
        { label: 'Rate', value: '1.5% per 30 days' },
        { label: 'Daily interest', value: '£25' },
        { label: 'Typical repayment profile', value: 'Fixed monthly payments, free to repay early' },
      ],
      note: 'Illustrative only and not a quote.',
    },
    process: {
      heading: 'Four steps to funds',
      steps: [
        {
          n: '1',
          title: 'Apply online in minutes',
          copy: 'Tell us your amount, term and the basics about your business. A soft check that won’t affect your credit score.',
        },
        {
          n: '2',
          title: 'Decision in hours',
          copy: 'We review via Open Banking or statements. Most applications get a decision the same working day.',
        },
        {
          n: '3',
          title: 'Sign and confirm',
          copy: 'Your offer is set out with every fee and figure in writing. E-sign and verify ID to continue.',
        },
        {
          n: '4',
          title: 'Funded within 24–48 hours',
          copy: 'Money lands in your business account, and you can repay early for free whenever you like.',
        },
      ],
    },
    faqs: [
      {
        q: 'Will applying affect my credit score?',
        a: 'No. The first check is a soft eligibility check and leaves no footprint. A hard search only happens once you accept a formal offer.',
      },
      {
        q: 'Do I need security or a property?',
        a: 'No. These are unsecured facilities. A personal guarantee from the directors is typically required instead.',
      },
      {
        q: 'Can I repay early?',
        a: 'Yes, at any time, and there is no early-repayment fee. Interest accrues daily, so you only pay for the days you use.',
      },
    ],
  },
  {
    slug: 'revenue-based-finance',
    name: 'Revenue-based finance',
    category: 'Business finance',
    hook: 'single fixed cost',
    band: 'up to £2m',
    term: 'repay as % of sales',
    href: '/products/revenue-based-finance/',
    cardPoints: ['Repay when customers pay you', 'No fixed monthly payment', 'Same-day top-ups available'],
    meta: {
      title: 'Revenue-Based Finance | Repay from Card Sales | The Funding Desk',
      description:
        'Revenue-based finance repaid as a small, fixed percentage of your future card and online sales. No fixed monthly payments, no fixed term, top-ups from day one.',
    },
    hero: {
      eyebrow: 'Revenue-based finance',
      h1: 'One all-inclusive cost. You repay when customers pay you.',
      sub: 'Funding for card-taking businesses, repaid as a small percentage of future sales. No fixed monthlies, no hidden extras — just a single, agreed cost that never changes.',
      note: 'No fixed monthly payment · No APR or compounding · Top-ups as soon as you repay',
    },
    stats: [
      { value: 'single fixed cost', label: 'topped up, never compounding' },
      { value: 'up to £2m', label: 'advances (typically £3k–£1m)' },
      { value: '6–18 months', label: 'typical repayment window' },
      { value: '24h', label: 'from approval to funds' },
    ],
    useCases: {
      eyebrow: 'What it’s for',
      heading: 'Built for card-taking businesses',
      items: [
        'Retail, hospitality and online sellers with regular card or digital sales',
        'Seasonal businesses that need repayment to flex with trading',
        'Rapid stock-tops and marketing pushes ahead of peaks',
        'Franchises and multi-site operators with predictable turnover',
        'Businesses that find fixed daily loan repayments too rigid',
      ],
    },
    benefits: {
      eyebrow: 'How repayment works',
      heading: 'Repayment that flexes with your sales',
      items: [
        'You repay a small, fixed percentage of monthly card and online takings',
        'No fixed monthly amount — quiet months mean smaller payments',
        'One all-inclusive cost agreed up front; no interest, no compounding',
        'No fixed term — the length flexes with your sales',
        'Once repaid, further top-ups are typically available the same day',
      ],
    },
    rates: {
      lead: 'Instead of an interest rate, we agree a single fixed cost on the advance.',
      table: {
        columns: ['Advance', 'Fixed cost (typical)', 'Repayment mechanism'],
        rows: [
          ['£3,000–£50,000', '6–14% of the advance', 'Fixed % of monthly card sales'],
          ['£50,000–£250,000', '8–16% of the advance', 'Fixed % of monthly card sales'],
          ['£250,000–£2,000,000', '10–25% of the advance', 'Agreed % of turnover or sales'],
        ],
      },
      note: 'Worked guide: a £10,000 advance at 25% fixed cost means £12,500 repayable in total, paid as a percentage of sales. The exact cost reflects your trading history and the advance size.',
    },
    criteria: {
      heading: 'Key criteria',
      items: [
        'Typically 6+ months of trading history',
        'Weighted by card, terminal or online sales volume, not just credit score',
        'Most funding decisions run off your sales data — no business plan required',
        'Advance typically sized against monthly card turnover',
        'Same-day top-ups available once part of the facility is repaid',
      ],
    },
    fees: {
      heading: 'Fee schedule',
      items: [
        'One fixed cost in writing before you sign — never changes',
        'No interest or compounding',
        'No fixed-term penalty',
        'No administration charges',
      ],
    },
    example: {
      eyebrow: 'Worked example',
      heading: 'How the numbers flex',
      ledger: [
        { label: 'Advance', value: '£20,000' },
        { label: 'Fixed cost (20%)', value: '£4,000' },
        { label: 'Total repayable', value: '£24,000' },
        { label: 'Monthly repayment', value: '10% of monthly card sales' },
        { label: 'Expected repayment window', value: '8–12 months, flexing with sales' },
      ],
      note: 'Illustrative only and not a quote.',
    },
    process: {
      heading: 'From enquiry to funds',
      steps: [
        {
          n: '1',
          title: 'Connect your sales data',
          copy: 'Link your card processing or Open Banking — most decisions come straight off your trading data.',
        },
        {
          n: '2',
          title: 'See your all-in cost',
          copy: 'We present one figure: the advance and the fixed cost to repay it. Nothing else gets added.',
        },
        {
          n: '3',
          title: 'Funds within 24 hours',
          copy: 'Money lands in your business account, usually within a day of agreeing terms.',
        },
        {
          n: '4',
          title: 'Repay from sales',
          copy: 'A small percentage of monthly takings covers it. Pay faster by choosing a larger percentage — there is no penalty.',
        },
      ],
    },
    faqs: [
      {
        q: 'Is this a loan?',
        a: 'No — it is a form of receivables finance. You sell us a share of future card and online receipts at an agreed cost. That is why there is no APR and no fixed term.',
      },
      {
        q: 'What happens in a slow month?',
        a: 'The percentage stays fixed but the amount follows your sales. Quiet months mean smaller payments, which is why revenue-based finance suits seasonal trading.',
      },
      {
        q: 'Can I get more funding?',
        a: 'Yes. Once a portion of the facility is repaid, same-day top-ups are typically available without re-brokering the whole deal.',
      },
    ],
  },
  {
    slug: 'residential-bridging',
    name: 'Residential bridging',
    category: 'Residential bridging',
    hook: 'from 0.64% p/m',
    band: '£50k–£10m',
    term: 'up to 24 months',
    href: '/products/residential-bridging/',
    cardPoints: ['Chain-break, auction & capital raising', 'Up to 75% LTV', 'No ERC or exit fees'],
    meta: {
      title: 'Residential Bridging Loans | from 0.64% per month | The Funding Desk',
      description:
        'Residential bridging loans from 0.64% per month. Up to 75% LTV and £50k–£10m. Terms in hours, funds at completion, no exit fees.',
    },
    hero: {
      eyebrow: 'Residential bridging',
      h1: 'Keep your chain moving — bridge the gap',
      sub: 'Residential bridging for chain breaks, auction purchases, capital raising and refurbishment. Regulated where your main home is at stake, with rates from 0.64% per month and no exit fees.',
      note: 'Regulated & unregulated routes · No ERC · Interest only for the days you use',
    },
    stats: [
      { value: 'from 0.64%', label: 'per month, by LTV band' },
      { value: '75%', label: 'maximum loan-to-value' },
      { value: '£50k–£10m', label: 'loan range' },
      { value: '24 months', label: 'maximum term' },
    ],
    useCases: {
      eyebrow: 'What it’s for',
      heading: 'Typical use cases',
      items: [
        'Breaking a chain to complete your purchase without losing the property',
        'Moving on an auction or part-exchange property while your current sale closes',
        'Capital raising on a property you own',
        'Downsizing, divorce or probate where timing matters',
        'Light to heavy refurbishment before sale, refinance or rent',
      ],
    },
    benefits: {
      eyebrow: 'Why borrowers choose us',
      heading: 'Built like the lenders who win this market',
      items: [
        'One named underwriter from enquiry to completion — no hand-offs',
        'No exit fee and no early-repayment charge, ever',
        'Daily interest, so you pay only for the days you use',
        'Serviced, retained or rolled interest as your cash flow prefers',
        'Commercial and second-charge options on the same facility',
      ],
    },
    rates: {
      lead: 'First charge, residential property. Rates are fixed for the term by loan-to-value band.',
      table: {
        columns: ['Loan-to-value', 'Rate per month (first charge)', 'Notes'],
        rows: [
          ['Up to 55%', '0.64%', 'Fast Track / AVM cases welcome'],
          ['Up to 65%', '0.69%', 'Full valuation usually required'],
          ['Up to 75%', '0.74%', 'Highest available LTV band'],
        ],
      },
      note: 'Regulated bridging (your main home) is capped at 70% LTV; up to 75% is available on unregulated routes where eligible. Rates based on the lower of purchase price and valuation.',
    },
    criteria: {
      heading: 'Key criteria',
      items: [
        'Minimum loan £50,000; maximum £10,000,000',
        'Terms from 3 to 24 months',
        'Residential, semi-commercial and portfolio property accepted',
        'Regulated bridging capped at 70% LTV; up to 75% unregulated where eligible',
        'Full, AV and desktop valuations used where appropriate',
      ],
    },
    fees: {
      heading: 'Fee schedule',
      items: [
        'Arrangement fee: 2% (added to the loan where preferred)',
        'Valuation: directly paid to the panel valuer; AVM cases minimal or free',
        'Telegraphic transfer: £30 at completion',
        'No exit fee, no ERC, no monthly servicing fee',
        'Interest rebated for unused days after completion',
      ],
    },
    example: {
      eyebrow: 'Worked example',
      heading: 'What a real case can look like',
      ledger: [
        { label: 'Loan amount', value: '£850,000' },
        { label: 'LTV', value: '62%' },
        { label: 'Rate band', value: '0.69% per month (55%–65% LTV)' },
        { label: 'Monthly interest', value: '£5,865' },
        { label: 'Arrangement fee (2%)', value: '£17,000' },
        { label: 'Typical scenario', value: '12-day completion, repaid in full from the onward sale' },
      ],
      note: 'Illustrative example; standard variable terms apply on application.',
    },
    process: {
      heading: 'Four steps to funds',
      steps: [
        {
          n: '1',
          title: 'Send a quick enquiry',
          copy: 'Tell us the property, purchase price or value, and your exit strategy — by phone, email, or the one-page form. No credit impact.',
        },
        {
          n: '2',
          title: 'Credit-backed terms in hours',
          copy: 'A dedicated underwriter owns your case and returns indicative terms in as little as one hour when criteria are met.',
        },
        {
          n: '3',
          title: 'Valuation & legal work in parallel',
          copy: 'We instruct valuers and solicitors from our panels at the same time, cutting weeks out of the usual sequence.',
        },
        {
          n: '4',
          title: 'Funds release at completion',
          copy: 'Your conveyancer confirms completion and funds are released — many clients complete within days to a few weeks.',
        },
      ],
    },
    faqs: [
      {
        q: 'Is residential bridging regulated by the FCA?',
        a: 'Regulated bridging on your main residential home is provided under our FCA permissions. Above 70% LTV, and for certain commercial and portfolio cases, an unregulated facility may apply. We confirm which route your case falls into, in writing, before you commit.',
      },
      {
        q: 'Can I use bridging to break a chain?',
        a: 'Yes — chain-break and onward-purchase bridging is one of the most common uses. We include an exit strategy (usually the onward sale or refinance) in the underwriting assessment.',
      },
      {
        q: 'What does the fee schedule include?',
        a: 'A 2% arrangement fee plus standard valuation and legal costs. There is no exit fee and no early-repayment charge, and interest is rebated for any unused days after completion.',
      },
    ],
  },
  {
    slug: 'commercial-bridging',
    name: 'Commercial bridging',
    category: 'Commercial bridging',
    hook: 'from 0.89% p/m',
    band: '£100k–£10m',
    term: 'up to 24 months',
    href: '/products/commercial-bridging/',
    cardPoints: ['Commercial, semi-commercial & land', 'Up to 75% LTV', 'Dual representation available'],
    meta: {
      title: 'Commercial Bridging Loans | from 0.89% per month | The Funding Desk',
      description:
        'Commercial bridging loans from 0.89% per month on commercial, semi-commercial and land. £100k–£10m, up to 75% LTV, unregulated and built for speed.',
    },
    hero: {
      eyebrow: 'Commercial bridging',
      h1: 'Commercial property deals, funded at pace',
      sub: 'Bridging for commercial, semi-commercial, mixed-use and land from £100k–£10m. Rates from 0.89% per month, dual representation available, and unregulated so speed stays in your hands.',
      note: 'Unregulated bridging · Dual representation · Decisions in hours',
    },
    stats: [
      { value: 'from 0.89%', label: 'per month, by LTV band' },
      { value: '75%', label: 'maximum loan-to-value' },
      { value: '£100k–£10m', label: 'loan range' },
      { value: '24 months', label: 'maximum term' },
    ],
    useCases: {
      eyebrow: 'What it’s for',
      heading: 'Typical use cases',
      items: [
        'Buying commercial or mixed-use property at auction or through the market',
        'Refinancing an existing commercial position with speed',
        'Capital raising against trading property and land',
        'Purchasing or converting semi-commercial premises for owner occupation',
        'Acting where a longer-term lender is ready but moving too slowly',
      ],
    },
    benefits: {
      eyebrow: 'Why borrowers choose us',
      heading: 'Speed and certainty for commercial deals',
      items: [
        'Unregulated, so underwriting is agile and fees stay predictable',
        'Dual representation available where intermediaries need it',
        'First, second and combination charges considered',
        'Interest retained, serviced or rolled to match your project',
        'A commercial-specialist underwriter who has done these deals before',
      ],
    },
    rates: {
      lead: 'First charge, commercial and semi-commercial property. Rates fixed for the term by LTV band.',
      table: {
        columns: ['Loan-to-value', 'Rate per month (first charge)', 'Notes'],
        rows: [
          ['Up to 65%', '0.89%', 'Commercial & semi-commercial'],
          ['Up to 70%', '0.95%', 'Mixed-use and trading property'],
          ['Up to 75%', '0.99%', 'Land and higher-LTV positions'],
        ],
      },
      note: 'Second-charge pricing is slightly higher. Minimum loan £100,000; larger facilities considered by referral.',
    },
    criteria: {
      heading: 'Key criteria',
      items: [
        'Minimum loan £100,000; maximum £10,000,000',
        'Terms from 3 to 24 months',
        'Commercial, semi-commercial, mixed-use and land accepted',
        'Up to 75% LTV depending on asset and route',
        'Full or desktop valuations used case by case',
      ],
    },
    fees: {
      heading: 'Fee schedule',
      items: [
        'Arrangement fee: 2% (added to the loan where preferred)',
        'Valuation: directly paid to the panel valuer',
        'Telegraphic transfer: £30 at completion',
        'No exit fee, no ERC',
        'No joint-representation premium on levels we control',
      ],
    },
    example: {
      eyebrow: 'Worked example',
      heading: 'What a real case can look like',
      ledger: [
        { label: 'Loan amount', value: '£1,150,000' },
        { label: 'LTV', value: '55%' },
        { label: 'Rate band', value: '0.89% per month (up to 65% LTV)' },
        { label: 'Monthly interest', value: '£10,235' },
        { label: 'Arrangement fee (2%)', value: '£23,000' },
        { label: 'Typical scenario', value: 'Commercial purchase completed in seven days, exit via refinance' },
      ],
      note: 'Illustrative example; standard terms vary by case.',
    },
    process: {
      heading: 'The commercial route to funds',
      steps: [
        {
          n: '1',
          title: 'Submit the deal',
          copy: 'Via the one-page form, a broker, or a call. Tell us the asset, the purchase or value, and the exit.',
        },
        {
          n: '2',
          title: 'Terms in hours',
          copy: 'Commercial underwriting runs fast — indicative terms in as little as a few hours on clean cases.',
        },
        {
          n: '3',
          title: 'Valuation & legal in parallel',
          copy: 'Valuer and solicitors instructed together to keep the timeline tight.',
        },
        {
          n: '4',
          title: 'Complete',
          copy: 'Most commercial bridges complete in days to a couple of weeks, and the same underwriter stays on your case.',
        },
      ],
    },
    faqs: [
      {
        q: 'Is commercial bridging regulated?',
        a: 'No — commercial and semi-commercial bridging is unsecured-lending regulation territory and our commercial bridging is not FCA regulated. That keeps the process faster and simpler, and we say so in writing.',
      },
      {
        q: 'Can an intermediary represent both sides?',
        a: 'Yes. Dual representation is available on commercial bridging where it suits the transaction, subject to our panel solicitors’ requirements.',
      },
      {
        q: 'What exit strategies do you accept?',
        a: 'Refinance into a longer-term facility, sale, or a funded commercial deal. We assess the exit as part of underwriting, and will tell you honestly if a case does not stack up.',
      },
    ],
  },
  {
    slug: 'development-refurbishment',
    name: 'Development & refurbishment',
    category: 'Bridging & property',
    hook: 'from 0.74% p/m',
    band: '£100k–£10m',
    term: 'up to 24 months',
    href: '/products/development-refurbishment/',
    cardPoints: ['Light & heavy refurbishment', 'Build costs funded up front', 'Staged drawdowns'],
    meta: {
      title: 'Development & Refurbishment Finance | from 0.74% per month | The Funding Desk',
      description:
        'Development and refurbishment finance from 0.74% per month. Light and heavy refurbishment, ground-up development, refurb costs funded upfront and staged drawdowns.',
    },
    hero: {
      eyebrow: 'Development & refurbishment',
      h1: 'From shell to sale — finance the build, not just the buy',
      sub: 'Refurbishment and development finance with refurb costs funded up front and staged drawdowns through the build. Ground-up development from 0.74% per month.',
      note: 'Refurb costs funded up front · Staged drawdowns · Development exit available',
    },
    stats: [
      { value: 'from 0.74%', label: 'per month by product' },
      { value: 'up to 75%', label: 'LTV on completed value' },
      { value: '£100k–£10m', label: 'loan range' },
      { value: 'staged', label: 'drawdowns through the build' },
    ],
    useCases: {
      eyebrow: 'What it’s for',
      heading: 'Typical use cases',
      items: [
        'Light refurbishment: decoration, kitchens, bathrooms — funds up front',
        'Heavy refurbishment: structural works, extensions and conversions',
        'Ground-up development of small to mid-size schemes',
        'Development exit: refinancing a completed scheme into a longer hold',
        'Auction purchases of properties needing work',
      ],
    },
    benefits: {
      eyebrow: 'Why borrowers choose us',
      heading: 'Built around the build cycle',
      items: [
        'Refurbishment and build costs funded up front, not just the purchase',
        'Staged drawdowns matched to your build programme',
        'Interest can be serviced, retained or rolled into the facility',
        'Greener-build and energy-efficiency enhancements considered favourably',
        'Exit to sale, refinance or a longer-term product supported in-house',
      ],
    },
    rates: {
      lead: 'Rates depend on product type and level of works. Funding is sized against purchase, build costs and completed value.',
      table: {
        columns: ['Product', 'Rate per month', 'Maximum LTV'],
        rows: [
          ['Light refurbishment', 'from 0.74%', 'up to 75%'],
          ['Heavy refurbishment', 'from 0.79%', 'up to 70%'],
          ['Ground-up development', 'from 0.84%', 'up to 65% of GDV'],
          ['Development exit', 'from 0.79%', 'up to 70%'],
        ],
      },
      note: 'Build-cost funding typically up to 100% of identified works on qualifying schemes. Exact pricing reflects scope, location and experience.',
    },
    criteria: {
      heading: 'Key criteria',
      items: [
        'Minimum loan £100,000; maximum £10,000,000',
        'Terms from 6 to 24 months, longer for development-exit facilities',
        'Light, heavy and ground-up schemes considered',
        'Appraisal and build programme required for larger schemes',
        'Valuations by full surveyor teams, including in-house where useful',
      ],
    },
    fees: {
      heading: 'Fee schedule',
      items: [
        'Arrangement fee: 2%',
        'Monthly monitoring by the panel surveyor on build cases',
        'Valuation: directly paid to the panel valuer',
        'No exit fee, no ERC',
      ],
    },
    example: {
      eyebrow: 'Worked example',
      heading: 'The refurbishment numbers',
      ledger: [
        { label: 'Purchase funding', value: '£600,000' },
        { label: 'Refurb costs funded up front', value: '£150,000' },
        { label: 'Total facility', value: '£750,000' },
        { label: 'Rate', value: '0.79% per month (heavy refurbishment)' },
        { label: 'Monthly interest', value: '£5,925' },
        { label: 'Typical scenario', value: '6-month refurb, then refinance at the improved value' },
      ],
      note: 'Illustrative example; standard terms vary by scheme.',
    },
    process: {
      heading: 'From scheme to completion',
      steps: [
        {
          n: '1',
          title: 'Share the scheme',
          copy: 'Tell us about the property, the works and the exit. For larger builds we may ask for an appraisal.',
        },
        {
          n: '2',
          title: 'Facility terms',
          copy: 'We set out loan, funded works, drawdown schedule and costs in writing.',
        },
        {
          n: '3',
          title: 'Valuation & legal',
          copy: 'Panel surveyor assesses value and build; solicitors handle security in parallel.',
        },
        {
          n: '4',
          title: 'Drawdown & build',
          copy: 'Funds release in stages as the works progress, with a surveyor monitoring against budget.',
        },
      ],
    },
    faqs: [
      {
        q: 'Can refurb costs be included in the loan?',
        a: 'Yes — on qualifying schemes, identified refurbishment or build costs can be funded up front (up to 100% of works in some cases) rather than coming out of your own pocket.',
      },
      {
        q: 'How do staged drawdowns work?',
        a: 'Drawdowns release against progress, confirmed by our panel surveyor, matching the build programme so you never pay interest on money you haven’t spent.',
      },
      {
        q: 'Do you fund ground-up development?',
        a: 'Yes, small to mid-size schemes, with an appraisal of GDV, build programme and a realistic exit. We also provide development-exit finance once a scheme completes.',
      },
    ],
  },
  {
    slug: 'bridge-to-let',
    name: 'Bridge-to-let & exit finance',
    category: 'Bridging & property',
    hook: 'from 0.64% p/m',
    band: '£50k–£10m',
    term: 'up to 24 months',
    href: '/products/bridge-to-let/',
    cardPoints: ['Bridge straight into a longer-term facility', 'One underwriter for the whole journey', 'Refurbishment add-ons'],
    meta: {
      title: 'Bridge-to-Let & Exit Finance | The Funding Desk',
      description:
        'Bridge-to-let and exit finance from 0.64% per month. Purchase now, steady into a longer-term buy-to-let or commercial mortgage with the same team.',
    },
    hero: {
      eyebrow: 'Bridge-to-let & exit finance',
      h1: 'Buy now, exit smoothly — one team for both stages',
      sub: 'Bridge-to-let combines a short-term bridge with a clear route into a longer-term facility. One underwriter, one set of documents, and refurbishment add-ons when you need them.',
      note: 'Seamless exit to BTL or commercial · No ERC · Refurb add-ons',
    },
    stats: [
      { value: 'from 0.64%', label: 'per month on the bridge' },
      { value: 'up to 75%', label: 'LTV on the bridge' },
      { value: '£50k–£10m', label: 'loan range' },
      { value: 'one team', label: 'bridge to exit, same underwriter' },
    ],
    useCases: {
      eyebrow: 'What it’s for',
      heading: 'When this helps',
      items: [
        'Purchasing a buy-to-let now and steadying into a longer-term mortgage later',
        'Buying at auction, then letting after light refurbishment',
        'Creating a pending bond for STL or letting meanwhile you refinance',
        'Exiting a development into a hold position on your own terms',
        'Property investors who want certainty across two stages, not two lenders',
      ],
    },
    benefits: {
      eyebrow: 'Why borrowers choose us',
      heading: 'Two products, one relationship',
      items: [
        'Agreed terms for the exit facility from day one, not a hope',
        'Same underwriter across both stages — no re-telling the story',
        'Refurbishment add-ons funded as part of the facility',
        'No ERC and no exit fee on the bridge',
        'Interest options that suit landlords, from retained to serviced',
      ],
    },
    rates: {
      lead: 'The bridge is priced by LTV band; the exit facility is agreed at the start.',
      table: {
        columns: ['Stage', 'Rate', 'Term'],
        rows: [
          ['Bridge', 'from 0.64% per month', 'up to 12 months'],
          ['Bridge with refurbishment', 'from 0.69% per month', 'up to 18 months'],
          ['Exit (buy-to-let / commercial)', 'agreed at outset', 'up to 25 years'],
        ],
      },
      note: 'Exit terms are indicative at the bridge stage and confirmed against the completed asset and rent roll.',
    },
    criteria: {
      heading: 'Key criteria',
      items: [
        'Minimum loan £50,000; maximum £10,000,000',
        'Residential or commercial investment property',
        'Regulated route where your main home is involved',
        'Exit route assessed at underwriting so there are no surprises',
        'Standard landlord or investor structures accepted',
      ],
    },
    fees: {
      heading: 'Fee schedule',
      items: [
        'Arrangement fee: 2%',
        'No exit fee and no ERC on the bridge',
        'Valuation: directly paid to the panel valuer',
        'Exit facility priced without a second arrangement fee on day one',
      ],
    },
    example: {
      eyebrow: 'Worked example',
      heading: 'The numbers across both stages',
      ledger: [
        { label: 'Bridge', value: '£400,000 at 0.64% per month' },
        { label: 'Refurb add-on', value: '£60,000 at 0.69% per month' },
        { label: 'Bridge monthly interest', value: '£2,974' },
        { label: 'Exit', value: '75% LTV long-term buy-to-let, agreed at outset' },
        { label: 'Typical scenario', value: '5-month refurb, then let and refine into exit' },
      ],
      note: 'Illustrative example; standard terms vary by case.',
    },
    process: {
      heading: 'One journey, two stages',
      steps: [
        {
          n: '1',
          title: 'Agree both stages up front',
          copy: 'Tell us the purchase, the work and the long-term plan, and we underwrite the exit alongside the bridge.',
        },
        {
          n: '2',
          title: 'Complete the bridge',
          copy: 'Funds release on completion of the purchase, with drawdowns for approved refurbishment works.',
        },
        {
          n: '3',
          title: 'Steady into the exit',
          copy: 'When the bridge is repaid by sale or refinance, the exit facility converts on the agreed terms.',
        },
        {
          n: '4',
          title: 'Stay with the same team',
          copy: 'The same underwriter handles servicing, top-ups and questions in both stages.',
        },
      ],
    },
    faqs: [
      {
        q: 'How is this different from a normal bridge?',
        a: 'Bridge-to-let wraps the exit into the original underwriting, so you know what happens after the bridge instead of hoping the market will still be there.',
      },
      {
        q: 'Can I just take the bridge and refinance elsewhere?',
        a: 'Yes. There is no tie-in — no ERC and no exit fee. The agreed exit is an option, not a constraint.',
      },
      {
        q: 'What if my property needs work before it lets?',
        a: 'Refurbishment add-ons can be funded as part of the facility, with staged drawdowns approved by our surveyors.',
      },
    ],
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}

export function productLinks() {
  return products.filter((p) => p.href !== '#');
}