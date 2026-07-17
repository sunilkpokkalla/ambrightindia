// Structured content for every standard page, keyed by its ORIGINAL URL path
// so no existing link ever breaks.
//
// NOTE: this is professionally written draft copy based on each page's
// purpose. To restore the site's original wording verbatim, import the
// WordPress export (Tools → Export) and replace the strings below.
// Stats are positioning statements / commitments — edit freely.

export interface PageSection {
  heading: string
  body: string
  points?: string[]
}

export interface PageStat {
  value: string
  label: string
}

export interface PageLink {
  label: string
  to: string
  desc: string
}

export interface PageDef {
  path: string
  badge: string
  title: string
  intro: string
  /** Hero illustration (from /images/heroes/) */
  image?: string
  stats?: PageStat[]
  sections: PageSection[]
  /** Card grid linking to child pages (hub pages) */
  links?: PageLink[]
  linksTitle?: string
  quote?: { text: string; attribution?: string }
  cta?: { label: string; to: string }
}

export const PAGES: PageDef[] = [
  {
    path: '/aboutus',
    image: '/images/heroes/people.webp',
    badge: 'About Us',
    title: 'A bright partner for people and businesses in tech.',
    intro:
      'AmBrightTech LLC is a staffing agency and IT consulting firm headquartered in McKinney, Texas — built for job seekers who want brighter futures and employers who want brighter teams. We believe technology careers should be launchpads, not treadmills, and that every growing business deserves enterprise-grade talent without enterprise-grade friction.',
    stats: [
      { value: '2', label: 'Connected practices: consulting & staffing' },
      { value: '7', label: 'Focused technology practice areas' },
      { value: '100%', label: 'E-Verify certified onboarding' },
      { value: 'TX', label: 'Proudly headquartered in McKinney' },
    ],
    sections: [
      {
        heading: 'Our story',
        body: 'AmBrightTech was founded by Girija Bhagavantha on a conviction most firms forget: behind every requisition is a person, and behind every resume is a future. What began as a Texas staffing agency has grown into a dual-practice firm — IT consulting on one side, workforce solutions on the other — serving businesses across the Dallas–Fort Worth metroplex and beyond. We call our community AmBright-Techies, and the name is a promise: everyone who works with us should leave brighter than they arrived.',
      },
      {
        heading: 'Our mission',
        body: 'To be the bridge between exceptional technology talent and the companies that need it — and to give growing businesses the same caliber of consulting that Fortune 500 firms take for granted. We measure success in careers launched, teams transformed and platforms that keep delivering long after we leave the room.',
        points: [
          'Put people first — candidates, consultants and clients alike',
          'Deliver outcomes, not just hours',
          'Stay honest about scope, timelines and trade-offs',
          'Keep learning — technology never stands still, and neither do we',
        ],
      },
      {
        heading: 'What we do',
        body: 'Our two practices reinforce each other. The consulting side keeps us sharp on how modern platforms are actually built and run, which makes our technical screening genuinely technical. The staffing side keeps us connected to thousands of professionals, which means our consulting teams assemble faster and stronger. One firm, two engines, a single standard of quality.',
        points: [
          'IT consulting, delivery and seven technology practices',
          'Contract, project and direct-hire staffing',
          'Career coaching and support for technology professionals',
          'Applied AI experimentation through AmBrightTech Labs',
        ],
      },
      {
        heading: 'Why choose AmBrightTech',
        body: 'We are an E-Verify certified employer with comprehensive health insurance and wellness programs for our people, a compliance-first back office, and a founder-led vision of global expansion that keeps small businesses at the center. When you work with AmBrightTech, you get big-firm rigor with small-firm care — and a partner who picks up the phone.',
      },
    ],
    quote: {
      text: 'Everyone who works with us should leave brighter than they arrived. That is the standard, and it is not negotiable.',
      attribution: 'Girija Bhagavantha, Founder',
    },
    cta: { label: 'Work with us', to: '/contact' },
  },
  {
    path: '/it-services',
    image: '/images/heroes/code.webp',
    badge: 'IT Consulting & Services',
    title: 'End-to-end IT consulting that moves the needle.',
    intro:
      'Great technology decisions compound. So do bad ones. From strategy to delivery to long-term support, our consultants help growing businesses plan, build and run modern technology — with the clarity of a boutique and the discipline of an enterprise firm. No bloated teams, no black boxes, no invoices that outrun outcomes.',
    stats: [
      { value: '1', label: 'Accountable delivery lead per engagement' },
      { value: '7', label: 'Practices behind every project team' },
      { value: 'Weekly', label: 'Transparent progress reporting' },
      { value: '0', label: 'Black boxes — your team learns as we build' },
    ],
    sections: [
      {
        heading: 'Advisory & strategy',
        body: 'Every engagement starts with the same question: what outcome are we buying? Our advisory work turns ambiguous ambitions into concrete technology roadmaps — platform selection, architecture reviews, build-vs-buy analysis and modernization sequencing that align every IT dollar with a business result. You leave with decisions you can defend to your board and a plan your team can actually execute.',
        points: [
          'Technology roadmaps tied to business outcomes',
          'Platform and vendor selection with documented trade-offs',
          'Architecture and technical-debt assessments',
          'Modernization sequencing and budget planning',
        ],
      },
      {
        heading: 'Build & modernize',
        body: 'Strategy without delivery is a slide deck. Our senior engineers — drawn from our Cloud, DevOps, Data & Analytics and Architecture practices — build the platforms the roadmap calls for: application development, cloud migration, data pipelines and the integrations that make them one system. We ship in small increments, demo every week and leave your codebase better documented than we found it.',
        points: [
          'Cloud & DevOps engineering',
          'Data & analytics platforms',
          'Enterprise application development and integration',
          'Architecture & modernization programs',
        ],
      },
      {
        heading: 'Run & support',
        body: 'Launch day is the beginning, not the end. Managed delivery, quality engineering and ongoing support keep the platforms we build performing — patched, monitored and evolving with your business. And because our workforce practice sits next door, we can staff the long-term team that takes over when our engagement winds down.',
      },
      {
        heading: 'Who we serve',
        body: 'Growing businesses that have outgrown improvisation but not their budgets: funded startups scaling past their first platform, mid-market companies modernizing legacy systems, and small enterprises that want a technology partner instead of a vendor. If your last consulting experience felt like being billed for a mystery, we built this practice for you.',
      },
    ],
    quote: {
      text: 'The best consulting engagement is the one your own team could not tell apart from their proudest internal project.',
    },
    cta: { label: 'Book a strategy call', to: '/contact' },
  },
  {
    path: '/workforce-solutions',
    image: '/images/heroes/people.webp',
    badge: 'Workforce Solutions',
    title: 'The right people, at the right time, on the right terms.',
    intro:
      'Hiring technology talent is the highest-stakes decision most teams make — and the one they get the least help with. AmBrightTech workforce solutions connect exceptional professionals with the teams that need them most, as contractors, complete project pods or permanent hires. Staffing built on trust, screened by practitioners, backed by E-Verify certified compliance.',
    stats: [
      { value: '3', label: 'Engagement models: contract, project, direct hire' },
      { value: '100%', label: 'E-Verify certified employment' },
      { value: 'Practitioner', label: 'Led technical screening — not keyword matching' },
      { value: '1', label: 'Point of contact from search to onboarding' },
    ],
    sections: [
      {
        heading: 'Contract staffing',
        body: 'When workload spikes or a skill gap opens, speed matters — but so does fit. Our contract staffing places vetted technology professionals into your team in days, with AmBrightTech handling payroll, benefits, compliance and ongoing support. Your managers get capacity; your new teammate gets an employer who actually takes care of them. Everybody does better work.',
      },
      {
        heading: 'Project staffing',
        body: 'Some outcomes need more than a seat filled — they need a team assembled. Our project staffing builds complete delivery pods around a defined scope: engineers, analysts, QA and a delivery lead who owns the outcome. One contract, one accountable partner, one team that arrives already knowing how to work together.',
      },
      {
        heading: 'Direct hire',
        body: 'Permanent hires shape your company for years, so we treat every search like it matters that much. Retained and contingent options, sourcing from our AmBright-Techie network, technical screening by people who have done the job, and honest candidate presentations — strengths and growth areas alike. Placements that last, because they were right from the start.',
        points: [
          'Technical screening by practitioners, not keyword filters',
          'Culture and expectation matching in both directions',
          'E-Verify certified onboarding support',
          'Transparent, employer-friendly terms with replacement guarantees',
        ],
      },
      {
        heading: 'For job seekers',
        body: 'You are not a resume in a database to us. AmBright-Techies get straight talk about roles and rates, preparation before every interview, and an advocate who keeps working for them after placement. Whether you want your next contract or your forever company, start the conversation — most careers change with one.',
      },
    ],
    quote: {
      text: 'A placement only counts when it lasts. We would rather present three right candidates than thirty fast ones.',
    },
    cta: { label: 'Start hiring', to: '/contact' },
  },
  {
    path: '/technology-practices',
    image: '/images/heroes/gears.webp',
    badge: 'Technology Practices',
    title: 'Deep practices, not shallow coverage.',
    intro:
      'Generalists give you availability. Specialists give you outcomes. Our consultants organize into seven focused practices — each with its own playbooks, accelerators and hiring bench — so every engagement is staffed by people who have solved your exact class of problem before. This page is the map; each practice has its own story.',
    stats: [
      { value: '7', label: 'Focused practice areas' },
      { value: '1', label: 'Delivery lead coordinating them all' },
      { value: 'Shared', label: 'Playbooks and accelerators across practices' },
      { value: 'Weekly', label: 'Cross-practice knowledge exchange' },
    ],
    sections: [
      {
        heading: 'The seven practices',
        body: 'Each practice is a community of specialists with its own standards, tooling and continuing education — because "full-stack everything" is how quality quietly dies:',
        points: [
          'Technology — engineering foundations, modern stacks and delivery standards',
          'Architecture — systems design, modernization roadmaps and technical governance',
          'Cloud — migration, platform engineering and cost optimization',
          'DevOps — automation, CI/CD pipelines and reliability engineering',
          'Data & Analytics — pipelines, warehouses and decision-grade reporting',
          'Agile — delivery coaching, team enablement and honest metrics',
          'Labs — prototypes, proofs of concept and emerging technology',
        ],
      },
      {
        heading: 'How practices work together',
        body: 'Real projects do not respect practice boundaries — a cloud migration needs DevOps automation, data replatforming and architectural guardrails all at once. That is why every engagement draws specialists from multiple practices under one delivery lead. You get an integrated team with a single point of accountability, not a parade of siloed experts billing in parallel.',
      },
      {
        heading: 'Practices power our staffing too',
        body: 'The same practice leads who run our consulting engagements design the technical screens for our workforce solutions. When we say a candidate is strong in Kubernetes or dimensional modeling, that judgment comes from someone who does that work — which is why our shortlists are short.',
      },
    ],
    quote: {
      text: 'Depth is a choice. We chose seven things to be excellent at instead of seventy things to be adequate at.',
    },
    cta: { label: 'Explore a practice', to: '/technology' },
  },
  {
    path: '/technology',
    image: '/images/heroes/code.webp',
    badge: 'Practice — Technology',
    title: 'Modern engineering, built to last.',
    intro:
      'The Technology practice is our engineering core: full-stack development, platform engineering and the standards that keep quality high across every AmBrightTech project. Trends come and go; the discipline of building software that people can maintain, extend and trust does not. That discipline is what this practice exists to protect.',
    sections: [
      {
        heading: 'What we build',
        body: 'Web applications, APIs, integrations and enterprise systems using proven modern stacks — React and TypeScript on the front, battle-tested platforms on the back, chosen for your team and your future, never for our preferences. Every system ships with tests, documentation and a handover your engineers will thank us for.',
        points: [
          'Web and mobile application development',
          'API design and system integration',
          'Enterprise platform engineering',
          'Legacy system stabilization and extension',
        ],
      },
      {
        heading: 'How we work',
        body: 'Small senior teams over large junior ones. Continuous delivery over big-bang releases. Automated testing over hope. Honest status over green-shifted dashboards. We demo working software every week, surface risks the moment we see them and write code as if the next person to read it matters — because they do.',
      },
      {
        heading: 'Engineering standards that travel',
        body: 'This practice maintains the coding standards, review checklists and delivery templates used across all of AmBrightTech — so whether your project is a two-week prototype or a two-year modernization, it inherits the same quality floor. Consistency is not glamorous. It is just how good software happens repeatedly.',
      },
    ],
    quote: {
      text: 'We write code as if the next person to read it matters — because they do, and someday they will be yours.',
    },
    cta: { label: 'Discuss your project', to: '/contact' },
  },
  {
    path: '/architecture',
    image: '/images/heroes/stack.webp',
    badge: 'Practice — Architecture',
    title: 'Systems designed for where you are going.',
    intro:
      'Architecture is the art of making the expensive decisions well. Our Architecture practice delivers reviews, target-state designs and modernization roadmaps that de-risk big technology bets before you commit budget — so the platform you build this year still serves the company you become in five.',
    sections: [
      {
        heading: 'Assessment & review',
        body: 'You cannot chart a course without knowing where you stand. Our current-state assessments map your systems, data flows and technical debt with unflinching honesty — what is solid, what is fragile and what is quietly costing you money every month. One to three weeks, and you hold a document your whole leadership team can reason from.',
        points: [
          'Current-state architecture assessments',
          'Technical debt inventories with cost-of-delay estimates',
          'Security and scalability reviews',
          'Pre-acquisition technical due diligence',
        ],
      },
      {
        heading: 'Target design & roadmaps',
        body: 'From that foundation we design where you are going: target architectures, integration and API strategy, platform consolidation and the migration sequence that gets you there without stopping the business. Every recommendation comes with documented trade-offs — because an architecture you cannot question is an architecture you cannot trust.',
      },
      {
        heading: 'Embedded architects',
        body: 'For multi-year modernizations, we embed architects who guide the work sprint by sprint: reviewing designs, coaching your engineers and keeping a hundred small decisions aligned with the big one. The goal is not dependence — it is an internal team that eventually makes our architects unnecessary.',
      },
    ],
    quote: {
      text: 'Good architecture is invisible in year one and priceless in year five.',
    },
    cta: { label: 'Request an assessment', to: '/contact' },
  },
  {
    path: '/cloud',
    image: '/images/heroes/cloud.webp',
    badge: 'Practice — Cloud',
    title: 'Cloud that pays for itself.',
    intro:
      'The cloud was supposed to make things simpler and cheaper. For many businesses it became a second data center with a subscription. Our Cloud practice delivers migration, platform engineering and cost optimization across AWS, Azure and Google Cloud — sized for growing businesses and measured by one number: what the cloud gives back.',
    stats: [
      { value: '3', label: 'Major platforms: AWS, Azure, Google Cloud' },
      { value: 'Waves', label: 'Planned migrations with rollback paths' },
      { value: 'IaC', label: 'Everything as code, nothing by hand' },
      { value: 'FinOps', label: 'Cost reviews built into every engagement' },
    ],
    sections: [
      {
        heading: 'Migrate with confidence',
        body: 'Assessment-first migrations that move workloads in planned waves — each with a rollback path, a cutover rehearsal and a definition of done that includes your team knowing how to run it. No heroics, no all-weekend cutovers, no surprises in the Monday standup. Boring migrations are successful migrations.',
      },
      {
        heading: 'Build a platform, not a puddle of resources',
        body: 'Landing zones, infrastructure as code, security baselines and identity done right from day one. We build cloud foundations that make the next ten projects faster instead of the next ten incidents likelier — and we hand your team the code, not a console full of mysteries.',
        points: [
          'Landing zones and account architecture',
          'Infrastructure as code (Terraform-first)',
          'Security baselines and compliance guardrails',
          'Kubernetes and container platforms where they earn their keep',
        ],
      },
      {
        heading: 'Optimize relentlessly',
        body: 'Cloud waste hides in defaults: oversized instances, forgotten environments, storage nobody reads. Our FinOps reviews find it, fix it and put the guardrails in place so it stays fixed. Most engagements find their own fee in the first pass — the honest monthly bill is the deliverable.',
      },
    ],
    quote: {
      text: 'Boring migrations are successful migrations. Save the excitement for what you build once you are there.',
    },
    cta: { label: 'Plan your migration', to: '/contact' },
  },
  {
    path: '/devops',
    image: '/images/heroes/gears.webp',
    badge: 'Practice — DevOps',
    title: 'Ship faster. Break less.',
    intro:
      'Every company is one deploy away from either delight or disaster — the difference is engineering. Our DevOps practice builds the CI/CD pipelines, automation and reliability engineering that turn releases from white-knuckle events into routine, and turns 2 a.m. pages into rare surprises instead of weekly rituals.',
    sections: [
      {
        heading: 'Delivery pipelines that developers love',
        body: 'CI/CD design and implementation that takes code from commit to production with tests, security scans and approvals built in — measured in minutes, not meetings. When shipping is safe and fast, teams ship small and often, and quality follows.',
        points: [
          'CI/CD design and implementation',
          'Containerization and orchestration',
          'Environment automation and ephemeral test environments',
          'Release strategies: blue-green, canary, feature flags',
        ],
      },
      {
        heading: 'Reliability you can measure',
        body: 'Observability first: monitoring, alerting and dashboards that tell you what users feel, not just what servers do. Then SRE practices — error budgets, runbooks, blameless postmortems — that turn incidents into improvements. The goal is a system your team trusts and a pager that mostly stays quiet.',
      },
      {
        heading: 'Culture, not just tooling',
        body: 'Tools do not fix throwing code over walls. We work alongside your developers and operations staff, pairing on the pipelines and leaving behind the habits — small batches, fast feedback, shared ownership — that keep improving after we are gone.',
      },
    ],
    quote: {
      text: 'A deploy should be the least interesting thing that happens to your team all week.',
    },
    cta: { label: 'Automate your delivery', to: '/contact' },
  },
  {
    path: '/data-analytics',
    image: '/images/heroes/chart.webp',
    badge: 'Practice — Data & Analytics',
    title: 'Turn data into decisions.',
    intro:
      'Every business is data-rich and most are insight-poor — drowning in dashboards nobody trusts and spreadsheets nobody can reconcile. Our Data & Analytics practice builds the pipelines, warehouses and reporting that give leaders numbers they believe, and gives teams the freedom to explore without breaking anything.',
    sections: [
      {
        heading: 'Foundations that hold',
        body: 'Trustworthy analytics start below the dashboard: data modeling, ELT pipelines and warehouse builds on modern platforms, engineered for reliability, lineage and cost. When the foundation is right, every question gets cheaper to answer — when it is wrong, every report is a negotiation.',
        points: [
          'Data modeling and warehouse / lakehouse builds',
          'ELT pipeline engineering with testing and lineage',
          'Data quality monitoring and alerting',
          'Platform cost engineering',
        ],
      },
      {
        heading: 'Insight people actually use',
        body: 'Dashboards, reporting and self-service analytics designed around the decisions they serve — with governance that keeps definitions consistent, so "revenue" means the same thing in every meeting. We measure success by usage: a report nobody opens is a bug, not a deliverable.',
      },
      {
        heading: 'Ready for AI',
        body: 'AI initiatives live or die on data readiness. We prepare the ground — clean, governed, well-modeled data — and partner with AmBrightTech Labs to prototype applied-AI use cases on top of it. First make the data trustworthy; then make it work harder.',
      },
    ],
    quote: {
      text: 'A dashboard nobody trusts is more expensive than no dashboard at all.',
    },
    cta: { label: 'Get your data working', to: '/contact' },
  },
  {
    path: '/agile',
    image: '/images/heroes/target.webp',
    badge: 'Practice — Agile',
    title: 'Delivery habits that stick.',
    intro:
      'Agile is not standups and stickers — it is the discipline of learning faster than your problems grow. Our Agile practice delivers coaching and embedded delivery leadership that meets teams where they are, keeps what already works and builds habits that outlive the engagement. No ceremony for ceremony\'s sake. Ever.',
    sections: [
      {
        heading: 'Coaching & enablement',
        body: 'Team-level coaching that starts with observation, not prescription: how work actually flows, where it actually stalls and what the team already does well. Then targeted change — backlog discipline, sizing that predicts, retros that produce action — measured by delivery metrics that matter: lead time, throughput and predictability.',
        points: [
          'Team and program-level agile coaching',
          'Delivery metrics that reflect reality, not theater',
          'Leadership coaching for scaling what works',
          'Facilitation of planning, retros and program increments',
        ],
      },
      {
        heading: 'Embedded delivery leads',
        body: 'Experienced scrum masters and delivery managers who run the room, unblock the work and raise the bar — while deliberately training their replacement inside your team. Good delivery leadership is a transfer of capability, not a permanent line item.',
      },
      {
        heading: 'Honest agile',
        body: 'If a practice is not helping your team ship better software, we will tell you — even when the practice is one we introduced. Process exists to serve delivery. The moment it inverts, we cut it.',
      },
    ],
    quote: {
      text: 'The best process is the lightest one your team can succeed with — and not an ounce more.',
    },
    cta: { label: 'Improve your delivery', to: '/contact' },
  },
  {
    path: '/labs',
    image: '/images/heroes/lab.webp',
    badge: 'Practice — Labs',
    title: 'Where we try the future first.',
    intro:
      'Every technology wave rewards the prepared and punishes the hasty. AmBrightTech Labs is our space for prototypes, proofs of concept and emerging technology — including applied AI for staffing and consulting — where we place small, disciplined bets so our clients can adopt with evidence instead of hype.',
    sections: [
      {
        heading: 'Rapid prototyping',
        body: 'Two-to-four-week proofs of concept engineered to answer one question: is this worth building? Fixed scope, fixed budget, and an unambiguous demo at the end. Half of our prototypes end in a decision not to proceed — and we count those among our most valuable deliverables, because a cheap "no" beats an expensive one every time.',
      },
      {
        heading: 'Applied AI, without the theater',
        body: 'We evaluate AI tooling hands-on — copilots, agents, automation — inside real workflows from our own consulting and staffing practices before we ever recommend them to a client. What survives our own operations earns a place in yours. What does not, saved you the pilot.',
        points: [
          'AI use-case discovery and feasibility assessment',
          'Working prototypes on your data, in your workflow',
          'Honest evaluations: cost, accuracy, maintenance burden',
          'Adoption roadmaps for the experiments that earn it',
        ],
      },
      {
        heading: 'Products with a purpose',
        body: 'Labs also builds digital products of our own — the discipline of shipping something real keeps our judgment sharp. Read "Building Digital Products That Solve Real Problems" in our blog for how we decide what deserves engineering investment.',
      },
    ],
    quote: {
      text: 'A cheap "no" is one of the most valuable things a lab can produce.',
    },
    cta: { label: 'Pitch us an experiment', to: '/contact' },
  },
  {
    path: '/careers',
    image: '/images/heroes/briefcase.webp',
    badge: 'Careers',
    title: 'Be our future AmBright-Techie.',
    intro:
      'Careers are built by companies that invest in people — not just place them. Join a team with comprehensive health insurance, wellness programs, practice-based mentorship and real growth in technology. Whether you consult, code or coordinate, at AmBrightTech your trajectory is the product.',
    stats: [
      { value: 'Full', label: 'Health insurance & wellness programs' },
      { value: '7', label: 'Practices to grow your specialty in' },
      { value: '100%', label: 'E-Verify certified, compliant employment' },
      { value: 'Always', label: 'A practice lead in your corner' },
    ],
    sections: [
      {
        heading: 'Why join AmBrightTech',
        body: 'Because being on an engagement should never mean being on your own. Every AmBright-Techie has a practice lead who backs them up technically, an HR team that answers the phone and a company that expanded its benefits when it grew instead of pocketing the difference. We are an E-Verify certified employer with comprehensive health insurance and wellness programs — and a habit of promoting the people who make clients ask for more of us.',
        points: [
          'Comprehensive health insurance & wellness programs',
          'Practice-based mentorship and continuing education',
          'E-Verify certified, fully compliant employment',
          'Clear paths from consultant to practice leadership',
        ],
      },
      {
        heading: 'Who thrives here',
        body: 'People who take ownership of outcomes, tell the truth early and treat every teammate — client-side or ours — with respect. Technology skills get you the interview; those habits get you the career. If you have ever fixed something that was not your job to fix, we should talk.',
      },
      {
        heading: 'How we hire',
        body: 'A practitioner-led screening that respects your time, a straight conversation about your goals and honest matching to roles where you will grow. We prepare you for every client interview and we keep advocating for you after you start — because our reputation is the sum of yours.',
      },
    ],
    quote: {
      text: 'Our reputation is the sum of our people\'s. That is why we invest in them like it.',
    },
    cta: { label: 'See open roles', to: '/job-openings' },
  },
  {
    path: '/project-staffing',
    image: '/images/heroes/partner.webp',
    badge: 'Project Staffing',
    title: 'Whole teams, ready to deliver.',
    intro:
      'Some outcomes cannot wait for six sequential hires. When a single seat is not enough, we assemble complete project teams — engineers, analysts, QA and delivery leads — around your scope and timeline, and stand them up in weeks. One contract, one accountable partner, one team that arrives already working.',
    sections: [
      {
        heading: 'How it works',
        body: 'We start with the outcome: what must be true when this project ends? From there we design the pod — skills, seniority mix and delivery lead — draw from our practices and talent network, and mobilize. You review the team before it starts, meet weekly through delivery and always know exactly where the work stands.',
        points: [
          'Defined scope, timeline and outcome before anyone bills an hour',
          'Blended teams across our seven technology practices',
          'A single delivery lead accountable for the result',
          'Weekly demos and honest, written status',
        ],
      },
      {
        heading: 'When project staffing wins',
        body: 'New product builds where speed to market is the whole game. Cloud migrations and modernizations that your internal team cannot absorb alongside their day jobs. Backlog burn-downs before a launch. Integrations after an acquisition. Anywhere coordination matters more than individual seats — a pod beats a parade of contractors.',
      },
      {
        heading: 'Your team, strengthened — not sidelined',
        body: 'We integrate with your engineers instead of walling them off: shared repos, shared standups, shared standards. When the pod rolls off, your team keeps the knowledge, the documentation and often a few new habits. If you want to convert pod members to permanent hires, our direct-hire practice makes that seamless.',
      },
    ],
    quote: {
      text: 'A team that arrives already knowing how to work together is worth a quarter of your roadmap.',
    },
    cta: { label: 'Staff your project', to: '/contact' },
  },
  {
    path: '/direct-hire',
    image: '/images/heroes/briefcase.webp',
    badge: 'Direct Hire',
    title: 'Permanent hires, minus the guesswork.',
    intro:
      'A permanent hire shapes your company for years — the culture, the codebase, the customers. We treat every search with that gravity. Retained and contingent placement for full-time technology roles, screened by practitioners who have done the job, matched for the long run and backed by guarantees we expect you to hold us to.',
    sections: [
      {
        heading: 'Our process',
        body: 'We start by learning the role beyond the description: the team it joins, the problems it owns in year one, the growth it should find by year three. Then we source from our AmBright-Techie network and beyond, screen technically with practice-lead rigor and present a short list you can actually hire from — typically three to five candidates, each with an honest brief on strengths and growth areas.',
        points: [
          'Practitioner-led technical screening, not keyword matching',
          'Culture and expectation matching in both directions',
          'Honest candidate briefs — strengths and growth areas alike',
          'E-Verify certified onboarding support through day one',
        ],
      },
      {
        heading: 'Why our placements last',
        body: 'Because we tell both sides the truth. Candidates hear the real role, not the recruiting version. You hear the real candidate, not the polished one. Placements built on accurate expectations do not unravel in month four — which is why our replacement guarantee is a promise we rarely have to keep.',
      },
      {
        heading: 'Roles we fill',
        body: 'Software engineers and architects, cloud and DevOps engineers, data engineers and analysts, QA specialists, delivery and engineering managers — across our seven practice areas and the Dallas–Fort Worth market we know street by street, with remote reach across the U.S.',
      },
    ],
    quote: {
      text: 'The right hire is the one still raising the bar three years later. That is the search we run.',
    },
    cta: { label: 'Make your next hire', to: '/contact' },
  },
  {
    path: '/product/support',
    image: '/images/heroes/shield.webp',
    badge: 'Support',
    title: 'We are here when you need us.',
    intro:
      'Support should feel like a colleague answering, not a ticket disappearing. One page, every channel — for AmBrightTech clients, consultants, candidates and product users. Whatever brought you here, there is a real person on the other end who owns your answer.',
    sections: [
      {
        heading: 'Clients & engagements',
        body: 'Your delivery lead is always your fastest path — they own your engagement end to end. For anything else, email contact@ambrighttech.com with your project name in the subject line and we respond the same business day. Escalations go straight to practice leadership; we would rather hear a concern a day early than a week late.',
      },
      {
        heading: 'Consultants & candidates',
        body: 'Questions about assignments, timesheets, payroll or benefits: reach our HR team through the Contact page and we will route you to the right person — usually within hours. Mid-interview or mid-assignment and something feels off? Call your AmBrightTech contact first. Advocating for you is the job.',
      },
      {
        heading: 'Product support',
        body: 'For products built by AmBrightTech Labs, include the product name, what you expected, what happened instead and a screenshot if you have one. Clear reports get fast fixes — and every report gets a human reply, not an autoresponder graveyard.',
        points: [
          'Same-business-day response target',
          'Real humans, no autoresponder dead ends',
          'Escalation path to practice leadership',
          'Every report tracked to resolution',
        ],
      },
    ],
    cta: { label: 'Contact support', to: '/contact-us' },
  },
]

export function getPage(path: string): PageDef | undefined {
  return PAGES.find((p) => p.path === path)
}
