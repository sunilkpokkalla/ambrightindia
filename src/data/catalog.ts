// Extended site catalog: services, AI, products, startups, industries,
// technologies and roles — hubs plus detail pages. Combined with the core
// PAGES, this brings the site past 100 fully navigable pages.
import { PAGES, type PageDef } from './pages'

const img = (t: string) => `/images/heroes/${t}.webp`

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

interface Svc {
  slug: string
  name: string
  theme: string
  tagline: string
  intro: string
  deliver: string
  points: string[]
  why: string
}

const SERVICES: Svc[] = [
  {
    slug: 'application-development',
    name: 'Application Development',
    theme: 'code',
    tagline: 'Software your business will build on for years.',
    intro:
      'Custom web and enterprise applications engineered by senior teams — from the first workshop to the last deployment. We build software that ships on schedule, reads like documentation and grows with your business.',
    deliver:
      'Full-cycle delivery: discovery workshops, UX design, agile development, automated testing and launch. Small senior teams, weekly demos, honest status — and a codebase your own engineers will be glad to inherit.',
    points: [
      'Web applications and customer portals',
      'Internal tools and workflow automation',
      'API design and third-party integrations',
      'Modernization of legacy applications',
    ],
    why: 'Because rewrites are expensive and regret is worse. We design for the second year of your product, not just the demo — performance, security and maintainability are requirements, not upgrades.',
  },
  {
    slug: 'cloud-migration',
    name: 'Cloud Migration',
    theme: 'cloud',
    tagline: 'Move to the cloud without moving your risk.',
    intro:
      'Assessment-first migrations to AWS, Azure or Google Cloud that arrive on time, under control and ready to operate. Planned waves, rollback paths, rehearsed cutovers — boring by design, because boring migrations succeed.',
    deliver:
      'We inventory your workloads, design the landing zone, sequence the waves and execute with your team beside us. Every wave ends with your engineers able to run what just moved.',
    points: [
      'Migration assessments and TCO analysis',
      'Landing zones and security baselines',
      'Wave-planned workload moves with rollback paths',
      'Post-migration optimization and FinOps',
    ],
    why: 'Most migration horror stories come from skipping the unglamorous parts: the inventory, the dependency map, the rehearsal. We never skip them — which is why our cutovers make for dull war stories.',
  },
  {
    slug: 'managed-it',
    name: 'Managed IT Services',
    theme: 'gears',
    tagline: 'Your IT, run like it matters — because it does.',
    intro:
      'Proactive management of your infrastructure, endpoints and platforms, so your team stops firefighting and starts building. Monitoring, patching, support and a roadmap — one partner, one number to call.',
    deliver:
      'A managed service built around your reality: 24/7 monitoring and alerting, patch and update management, helpdesk support with real humans, and quarterly roadmap reviews that keep IT aligned with the business.',
    points: [
      '24/7 monitoring and incident response',
      'Patch, update and asset management',
      'Helpdesk support with real engineers',
      'Quarterly technology roadmap reviews',
    ],
    why: 'Downtime costs more than management ever will. Our clients measure us in outages that never happened and projects their teams finally had time to ship.',
  },
  {
    slug: 'qa-testing',
    name: 'QA & Testing',
    theme: 'target',
    tagline: 'Quality is not a phase. It is a habit we install.',
    intro:
      'Manual and automated testing services that catch defects before your customers do — and build the regression safety net that lets your team ship fast without fear.',
    deliver:
      'Test strategy, automation frameworks, performance and security testing, and embedded QA engineers who make quality everyone\'s job. We measure success in escaped defects: fewer, then none.',
    points: [
      'Test automation frameworks (web, mobile, API)',
      'Performance and load testing',
      'Security and penetration testing coordination',
      'Embedded QA engineers for agile teams',
    ],
    why: 'Every bug that reaches production costs ten times what it cost to catch in development. Quality engineering is the highest-ROI line in your budget — we make it systematic.',
  },
  {
    slug: 'cybersecurity',
    name: 'Cybersecurity Services',
    theme: 'shield',
    tagline: 'Security that enables the business instead of blocking it.',
    intro:
      'Practical security for growing businesses: assessments, hardening, monitoring and response readiness — sized to your actual risk, not to a vendor\'s fear campaign.',
    deliver:
      'We start with an honest assessment of your posture, fix the highest-risk gaps first, and build the guardrails — identity, endpoint, cloud security and employee awareness — that keep you protected as you grow.',
    points: [
      'Security assessments and gap analysis',
      'Identity and access management',
      'Cloud security baselines and monitoring',
      'Incident response planning and tabletop exercises',
    ],
    why: 'Attackers target the mid-market precisely because defenses lag there. Enterprise-grade security practices, right-sized and prioritized, close that gap without closing your budget.',
  },
  {
    slug: 'erp-crm',
    name: 'ERP & CRM Solutions',
    theme: 'stack',
    tagline: 'Systems of record that people actually use.',
    intro:
      'Selection, implementation and rescue of ERP and CRM platforms — Salesforce, SAP, Dynamics and modern alternatives — with adoption treated as seriously as configuration.',
    deliver:
      'Requirements that reflect how your teams really work, vendor selection with documented trade-offs, phased implementation, clean data migration and the training that makes the system stick.',
    points: [
      'Platform selection and roadmap',
      'Implementation and configuration',
      'Data migration and integration',
      'Adoption programs and admin training',
    ],
    why: 'The graveyard of failed ERP projects is a graveyard of ignored users. We design for the person entering the data, not just the executive reading the report — that is why our systems get used.',
  },
  {
    slug: 'mobile-apps',
    name: 'Mobile App Development',
    theme: 'mobile',
    tagline: 'Apps people keep on their home screen.',
    intro:
      'Native and cross-platform mobile development — iOS, Android, React Native, Flutter — from concept to app store and beyond. Fast, polished and built to retain.',
    deliver:
      'Product discovery, UX design, development, store submission and post-launch iteration. One team owns the journey, and analytics guide every release after the first.',
    points: [
      'iOS and Android native development',
      'React Native and Flutter cross-platform builds',
      'App store optimization and submission',
      'Post-launch analytics and iteration',
    ],
    why: 'Users decide in the first session whether your app lives or dies. We obsess over that first session — performance, onboarding, polish — because retention is designed, not hoped for.',
  },
  {
    slug: 'ui-ux-design',
    name: 'UI/UX Design',
    theme: 'target',
    tagline: 'Design that makes complex things feel simple.',
    intro:
      'Research-driven product design for web and mobile: user research, information architecture, prototypes and design systems that turn workflows into experiences people enjoy.',
    deliver:
      'We watch real users work, map the friction, prototype the fix and test until the numbers move. Then we hand your developers a design system, not a pile of screens.',
    points: [
      'User research and journey mapping',
      'Wireframes, prototypes and usability testing',
      'Design systems and component libraries',
      'Accessibility (WCAG) reviews',
    ],
    why: 'Every confusing screen is a support ticket, a churned user or an abandoned cart. Good design is not decoration — it is the cheapest performance upgrade your product will ever get.',
  },
  {
    slug: 'api-integration',
    name: 'API & Systems Integration',
    theme: 'circuit',
    tagline: 'Make your systems act like one system.',
    intro:
      'API design, integration platforms and event-driven architectures that connect your applications, vendors and data — eliminating the swivel-chair work that quietly drains your teams.',
    deliver:
      'Integration architecture, API gateways, iPaaS implementation and custom connectors — documented, monitored and versioned so the connections outlive the people who built them.',
    points: [
      'REST and event-driven API design',
      'Integration platform (iPaaS) implementation',
      'Legacy system connectors',
      'API governance, documentation and monitoring',
    ],
    why: 'Re-keying data between systems is the most expensive job nobody was hired to do. Every integration we ship gives your team hours back, every single week.',
  },
  {
    slug: 'it-strategy',
    name: 'IT Strategy & vCIO',
    theme: 'chart',
    tagline: 'Executive technology leadership, on your terms.',
    intro:
      'Fractional CIO and IT strategy services for businesses that need senior technology leadership without the full-time price tag. Roadmaps, budgets, vendor management and a steady hand in the room.',
    deliver:
      'A named executive partner who learns your business, owns your technology roadmap, manages vendors and budgets, and sits at the table for the decisions that shape your next three years.',
    points: [
      'Technology roadmaps and annual budgets',
      'Vendor evaluation and management',
      'Security and compliance oversight',
      'Board and leadership reporting',
    ],
    why: 'Technology decisions made without technology leadership become technical debt with interest. A fractional CIO costs a fraction of a bad platform bet — and prevents several.',
  },
]

const servicePages: PageDef[] = SERVICES.map((s) => ({
  path: `/services/${s.slug}`,
  badge: `Service — ${s.name}`,
  title: s.tagline,
  intro: s.intro,
  image: img(s.theme),
  sections: [
    { heading: 'What we deliver', body: s.deliver, points: s.points },
    { heading: 'Why it matters', body: s.why },
    {
      heading: 'How to start',
      body: `Every ${s.name.toLowerCase()} engagement begins with a free strategy conversation: your goals, your constraints and an honest read on whether we are the right partner. If we are, you get a scoped proposal with clear outcomes; if we are not, you get a straight answer and a referral.`,
    },
  ],
  cta: { label: 'Book a strategy call', to: '/contact' },
}))

/* ------------------------------------------------------------------ */
/* AI                                                                  */
/* ------------------------------------------------------------------ */

interface AiPage {
  slug: string
  name: string
  theme: string
  tagline: string
  intro: string
  what: string
  points: string[]
  approach: string
}

const AI_PAGES: AiPage[] = [
  {
    slug: 'strategy',
    name: 'AI Strategy',
    theme: 'target',
    tagline: 'An AI roadmap grounded in your reality, not the hype cycle.',
    intro:
      'Executive-level AI strategy that answers the questions that matter: where can AI create real value in your business, what will it cost, what are the risks and in what order should you move?',
    what: 'Use-case discovery workshops, feasibility and ROI scoring, data-readiness assessment, build-vs-buy analysis and a sequenced roadmap your leadership team can fund with confidence.',
    points: [
      'AI opportunity assessment across your value chain',
      'ROI modeling and prioritization',
      'Risk, governance and policy frameworks',
      'A 12-month roadmap with clear first wins',
    ],
    approach:
      'We have watched too many companies buy AI theater — pilots that demo well and die quietly. Our strategy work is designed to produce the opposite: small, measurable wins that compound into capability.',
  },
  {
    slug: 'generative-ai',
    name: 'Generative AI Solutions',
    theme: 'neural',
    tagline: 'Put generative AI to work — safely, measurably, everywhere it earns its keep.',
    intro:
      'From document intelligence to content generation to knowledge assistants: we design, build and deploy generative AI solutions on your data, inside your security boundary, measured against your KPIs.',
    what: 'Solution design, model selection (commercial and open-source), retrieval-augmented generation on your knowledge base, guardrails and evaluation, and production deployment with monitoring.',
    points: [
      'Knowledge assistants grounded in your documents',
      'Document processing and summarization pipelines',
      'Content generation with brand and compliance guardrails',
      'Evaluation harnesses that prove accuracy before launch',
    ],
    approach:
      'The difference between a GenAI demo and a GenAI system is evaluation, guardrails and monitoring. We build all three from day one, so what you launch keeps working after the applause fades.',
  },
  {
    slug: 'ai-agents',
    name: 'AI Agents & Automation',
    theme: 'circuit',
    tagline: 'Agents that do the work, not just talk about it.',
    intro:
      'Agentic AI systems that execute multi-step business processes — researching, drafting, reconciling, routing — under human oversight. The next leap beyond chatbots, engineered responsibly.',
    what: 'Process selection, agent architecture, tool and system integrations, human-in-the-loop checkpoints, and the observability to audit every action an agent takes on your behalf.',
    points: [
      'Back-office process agents (intake, triage, reconciliation)',
      'Research and reporting agents',
      'Integration with your existing systems and APIs',
      'Full audit trails and human approval gates',
    ],
    approach:
      'Autonomy is earned, not assumed. Our agents start with tight guardrails and expand their scope only as accuracy is proven — the same way you would onboard a new employee.',
  },
  {
    slug: 'chatbots',
    name: 'Chatbots & Assistants',
    theme: 'mobile',
    tagline: 'Assistants your customers thank, not tolerate.',
    intro:
      'Customer and employee assistants that resolve real questions — grounded in your knowledge base, escalating gracefully to humans and improving every week from real conversations.',
    what: 'Conversation design, knowledge grounding, channel integration (web, Slack, Teams, SMS), analytics and continuous tuning. Launch small, measure honestly, expand what works.',
    points: [
      'Customer support deflection with graceful escalation',
      'Internal helpdesk and HR assistants',
      'Multi-channel deployment',
      'Conversation analytics and continuous improvement',
    ],
    approach:
      'A bad bot is worse than no bot. We measure containment and satisfaction, not just deflection — if users are not happier, we keep tuning until they are.',
  },
  {
    slug: 'machine-learning',
    name: 'Machine Learning',
    theme: 'chart',
    tagline: 'Predictions your business can bank on.',
    intro:
      'Classical machine learning for forecasting, scoring, recommendation and anomaly detection — the proven workhorses of applied AI, built on your data with production discipline.',
    what: 'Problem framing, feature engineering, model development and validation, and deployment with monitoring for drift — plus the documentation your auditors and successors will need.',
    points: [
      'Demand forecasting and capacity planning',
      'Lead scoring and churn prediction',
      'Recommendation systems',
      'Fraud and anomaly detection',
    ],
    approach:
      'Not every problem needs a large language model. Often a well-built gradient-boosted model beats the fancy option on accuracy, cost and explainability — we recommend what wins, not what trends.',
  },
  {
    slug: 'computer-vision',
    name: 'Computer Vision',
    theme: 'lab',
    tagline: 'Teach your systems to see what your teams see.',
    intro:
      'Vision solutions for inspection, document extraction, safety monitoring and inventory — turning cameras and scans you already have into structured, actionable data.',
    what: 'Use-case validation, model selection or training, edge and cloud deployment, and the workflow integration that turns detections into decisions.',
    points: [
      'Document and form extraction (OCR++)',
      'Quality inspection and defect detection',
      'Safety and compliance monitoring',
      'Inventory and asset recognition',
    ],
    approach:
      'Vision projects live or die on real-world variance — lighting, angles, edge cases. We validate on your worst images, not the vendor\'s best ones.',
  },
  {
    slug: 'nlp',
    name: 'Natural Language Processing',
    theme: 'code',
    tagline: 'Your unstructured text is a database waiting to happen.',
    intro:
      'Emails, tickets, contracts, reviews, call notes — most business knowledge lives in text nobody can query. Our NLP solutions extract, classify and route it at scale.',
    what: 'Entity and clause extraction, classification and routing, sentiment and intent analysis, and search that understands meaning instead of keywords.',
    points: [
      'Contract and document intelligence',
      'Ticket classification and smart routing',
      'Voice-of-customer and sentiment analysis',
      'Semantic search over your knowledge base',
    ],
    approach:
      'We benchmark against your current process — human accuracy, human hours — and report gains in those terms. NLP that cannot beat the status quo does not ship.',
  },
  {
    slug: 'mlops',
    name: 'MLOps & AI Platform',
    theme: 'gears',
    tagline: 'The platform that keeps your AI honest.',
    intro:
      'Model registries, deployment pipelines, monitoring and governance — the infrastructure that turns AI experiments into dependable production systems and keeps them that way.',
    what: 'MLOps platform design and build, CI/CD for models, drift and performance monitoring, cost controls and the governance workflows your compliance team will ask about.',
    points: [
      'Model registry and versioning',
      'Automated training and deployment pipelines',
      'Drift detection and performance monitoring',
      'Access control, audit and governance',
    ],
    approach:
      'Every model degrades; the only question is whether you notice before your customers do. Monitoring is not an add-on — it is the product.',
  },
  {
    slug: 'data-readiness',
    name: 'Data Readiness for AI',
    theme: 'stack',
    tagline: 'AI is only as smart as the data you feed it.',
    intro:
      'The unglamorous prerequisite for every AI ambition: clean, governed, well-modeled data. We assess your readiness, fix the gaps and build the foundation your AI roadmap depends on.',
    what: 'Data-readiness assessment against your target use cases, quality remediation, pipeline and warehouse work with our Data & Analytics practice, and governance that keeps it clean.',
    points: [
      'AI-specific data readiness assessments',
      'Data quality remediation and monitoring',
      'Knowledge-base preparation for RAG systems',
      'Governance, lineage and access controls',
    ],
    approach:
      'Half of failed AI projects failed before the model was chosen — in the data. Spending the first dollar here saves the next ten everywhere else.',
  },
  {
    slug: 'training',
    name: 'AI Training & Enablement',
    theme: 'people',
    tagline: 'Turn your whole team into an AI-fluent team.',
    intro:
      'Hands-on AI training for executives, engineers and everyday users — practical fluency with the tools reshaping your industry, taught by practitioners who use them daily.',
    what: 'Executive briefings, engineering workshops (prompting, RAG, agents), safe-use policies and champions programs that keep the learning alive after we leave.',
    points: [
      'Executive AI literacy briefings',
      'Developer workshops: prompting, RAG, agents, evaluation',
      'Safe and effective use policies',
      'Internal champions program design',
    ],
    approach:
      'Tools change monthly; judgment compounds. Our training focuses on durable skills — evaluating outputs, spotting failure modes, knowing when not to use AI — that survive every model release.',
  },
]

const aiPages: PageDef[] = AI_PAGES.map((a) => ({
  path: `/ai/${a.slug}`,
  badge: `AI — ${a.name}`,
  title: a.tagline,
  intro: a.intro,
  image: img(a.theme),
  sections: [
    { heading: 'What we deliver', body: a.what, points: a.points },
    { heading: 'Our approach', body: a.approach },
    {
      heading: 'Proven in our own operations',
      body: 'Every AI capability we offer is tested inside AmBrightTech first — in our staffing workflows, our consulting delivery and our Labs products. We never recommend what we have not run. That is the difference between selling AI and practicing it.',
    },
  ],
  cta: { label: 'Start your AI conversation', to: '/contact' },
}))

/* ------------------------------------------------------------------ */
/* Products                                                            */
/* ------------------------------------------------------------------ */

interface Product {
  slug: string
  name: string
  theme: string
  tagline: string
  intro: string
  what: string
  points: string[]
  status: string
}

const PRODUCTS: Product[] = [
  {
    slug: 'nomenu',
    name: 'NoMenu',
    theme: 'mobile',
    tagline: 'Digital ordering, reimagined — no app download required.',
    intro:
      'NoMenu is our contactless dining and ordering platform built for restaurants, cafés and food trucks. Guests scan a QR code, browse a beautiful digital menu, order and pay — all from their own phone, with zero app installs.',
    what: 'A fully branded digital menu that updates in real time, tableside ordering with kitchen integration, split-bill and tip support, and analytics that show owners which dishes drive revenue — all without asking a single guest to download anything.',
    points: [
      'QR-code powered — no app download for guests',
      'Real-time menu management with photos and modifiers',
      'Integrated ordering and payment processing',
      'Revenue analytics and menu performance insights',
    ],
    status:
      'NoMenu is live and serving restaurants today. Visit nomenu.com to see it in action or contact us for a demo.',
  },
  {
    slug: 'rxremind',
    name: 'RxRemind',
    theme: 'shield',
    tagline: 'Never miss a dose — medication reminders that actually work.',
    intro:
      'RxRemind is our health-tech product that helps patients and caregivers stay on top of complex medication schedules. Smart reminders, refill tracking and caregiver alerts — built because medication adherence is a life-or-death problem hiding in plain sight.',
    what: 'Personalized dosage schedules, intelligent reminders that adapt to the patient\'s routine, automatic refill alerts before prescriptions run out, and a caregiver dashboard so family members can support from anywhere.',
    points: [
      'Smart, adaptive medication reminders',
      'Refill tracking and pharmacy alerts',
      'Caregiver dashboard with real-time status',
      'Multi-medication schedule management',
    ],
    status:
      'RxRemind is in active development at AmBrightTech Labs, with early pilots running in partnership with healthcare providers. Contact us to learn about the pilot program.',
  },
  {
    slug: 'ingarage',
    name: 'InGarage',
    theme: 'gears',
    tagline: 'Your garage, organized — vehicle maintenance made effortless.',
    intro:
      'InGarage is our automotive lifestyle app that helps vehicle owners track maintenance schedules, find trusted mechanics, store service records and never miss an oil change again. Built because every car owner deserves a personal service advisor in their pocket.',
    what: 'A digital garage where you store all your vehicles, automatic maintenance reminders based on mileage and time, a curated directory of verified local mechanics, and a full service history that travels with the car — not the dealership.',
    points: [
      'Multi-vehicle digital garage',
      'Automatic maintenance reminders by mileage and schedule',
      'Verified mechanic directory with ratings',
      'Complete portable service history',
    ],
    status:
      'InGarage is live on iOS and Android. Download it from the app stores or visit our contact page to learn more.',
  },
  {
    slug: 'slotmyinterview',
    name: 'SlotMyInterview',
    theme: 'target',
    tagline: 'Interview scheduling that eliminates the back-and-forth.',
    intro:
      'SlotMyInterview is our interview scheduling platform that kills the email ping-pong between recruiters, candidates and hiring panels. One link, real-time availability, automatic time-zone handling and calendar sync — built from the pain of scheduling thousands of interviews ourselves.',
    what: 'Candidates pick from real-time panel availability, time zones resolve automatically, calendar invites fire instantly, and rescheduling is one click — not another email chain. Integrates with Google Calendar, Outlook and major ATS platforms.',
    points: [
      'One-link scheduling with real-time availability',
      'Automatic time-zone detection and conversion',
      'Google Calendar and Outlook sync',
      'ATS integration and interview analytics',
    ],
    status:
      'SlotMyInterview powers AmBrightTech\'s own hiring pipeline and is available to staffing firms and enterprise recruiting teams. Request a demo through our contact page.',
  },
  {
    slug: 'alavatu',
    name: 'Alavatu',
    theme: 'neural',
    tagline: 'Ideas deserve better than a notes app — think bigger with Alavatu.',
    intro:
      'Alavatu is our AI-powered idea management and brainstorming app. Capture thoughts on the go, let AI find connections you missed, organize ideas into actionable plans and collaborate with your team — built because the best ideas die in forgotten note files.',
    what: 'A beautiful capture experience for ideas large and small, AI-assisted clustering that finds patterns across your thinking, collaborative boards for team brainstorming, and a pipeline view that turns raw ideas into prioritized action items.',
    points: [
      'Quick-capture for ideas anytime, anywhere',
      'AI-powered idea clustering and connection discovery',
      'Collaborative brainstorming boards',
      'Idea-to-action pipeline with prioritization',
    ],
    status:
      'Alavatu is available on iOS and Android. Download the app or visit alavatu.com to start capturing ideas today.',
  },
  {
    slug: 'mummum-tracker',
    name: 'MuMMum Tracker',
    theme: 'people',
    tagline: 'Every feeding, every nap, every milestone — beautifully tracked.',
    intro:
      'MuMMum Tracker is our parenting companion app that helps new parents track feedings, sleep, diaper changes, growth milestones and more. Built by parents, for parents — because the first year is magical and exhausting, and remembering when the last feeding was should not be the hard part.',
    what: 'One-tap logging for feeds, sleep and diapers, milestone tracking with photo memories, growth charts that compare with pediatric standards, and shareable reports for doctor visits — all wrapped in a calm, sleep-deprived-parent-friendly interface.',
    points: [
      'One-tap feeding, sleep and diaper logging',
      'Milestone tracking with photo memories',
      'Growth charts aligned with pediatric standards',
      'Shareable reports for pediatrician visits',
    ],
    status:
      'MuMMum Tracker is live on iOS and Android. Join thousands of parents already using it — download from the app stores today.',
  },
]

const productPages: PageDef[] = PRODUCTS.map((p) => ({
  path: `/products/${p.slug}`,
  badge: `Product — ${p.name}`,
  title: p.tagline,
  intro: p.intro,
  image: img(p.theme),
  sections: [
    { heading: `What ${p.name} does`, body: p.what, points: p.points },
    { heading: 'Availability', body: p.status },
    {
      heading: 'Built the Labs way',
      body: 'Like everything from AmBrightTech Labs, this product exists because a real problem survived our validation gauntlet: a problem statement with evidence, a prototype in weeks and honest measurement before a single major feature was funded. Read "Building Digital Products That Solve Real Problems" for the method.',
    },
  ],
  cta: { label: 'Request early access', to: '/contact' },
}))

/* ------------------------------------------------------------------ */
/* Startups                                                            */
/* ------------------------------------------------------------------ */

interface StartupSvc {
  slug: string
  name: string
  theme: string
  tagline: string
  intro: string
  what: string
  points: string[]
  why: string
}

const STARTUPS: StartupSvc[] = [
  {
    slug: 'idea-validation',
    name: 'Idea Validation',
    theme: 'target',
    tagline: 'Find out if your idea deserves your savings — before you spend them.',
    intro:
      'A structured two-to-three-week sprint that pressure-tests your startup idea against real evidence: the problem, the market, the willingness to pay. The cheapest insurance a founder can buy.',
    what: 'Problem interviews with your target users, competitive landscape mapping, a positioning hypothesis and — where it helps — a clickable prototype to put in front of real prospects. You end with evidence, not opinions.',
    points: [
      'Customer problem interviews, scripted and run with you',
      'Market and competitor mapping',
      'Willingness-to-pay signals before you build',
      'A go / pivot / stop recommendation with reasons',
    ],
    why: 'Most startups do not fail at engineering — they fail at building something nobody wants badly enough to pay for. Three weeks of validation beats eighteen months of hope.',
  },
  {
    slug: 'mvp-development',
    name: 'MVP Development',
    theme: 'rocket',
    tagline: 'From validated idea to product in market — in 90 days.',
    intro:
      'A senior product pod that takes your validated concept to a real, revenue-ready MVP: designed, built, launched and instrumented — with the architecture headroom to survive success.',
    what: 'Scope ruthlessly with us to the smallest product that proves the business, then a fixed team designs and ships it in weekly increments. Launch includes analytics, so week one of real users produces real learning.',
    points: [
      'Ruthless MVP scoping workshops',
      'Design + engineering pod, weekly demos',
      'Launch-ready: auth, payments, analytics, hosting',
      'A post-launch iteration plan driven by usage data',
    ],
    why: 'Speed is a startup\'s only structural advantage. We protect it with senior engineers, boring proven stacks and scope discipline — the three things first-time founders are talked out of.',
  },
  {
    slug: 'product-strategy',
    name: 'Product Strategy',
    theme: 'chart',
    tagline: 'A roadmap that survives contact with your first hundred users.',
    intro:
      'Positioning, pricing, roadmap and metrics for early-stage products — the strategic layer that turns a working MVP into a growing business.',
    what: 'We define your ideal customer sharply enough to say no, price against value instead of fear, sequence the roadmap around learning, and instrument the north-star metrics that tell you the truth weekly.',
    points: [
      'Positioning and ideal customer definition',
      'Pricing strategy and packaging',
      'Outcome-sequenced product roadmaps',
      'North-star metrics and analytics setup',
    ],
    why: 'Features are easy to add and strategy is easy to skip — which is why so many products become busy and few become valuable. An outside strategist keeps the hard questions on the table.',
  },
  {
    slug: 'fractional-cto',
    name: 'Fractional CTO',
    theme: 'briefcase',
    tagline: 'A seasoned CTO in your corner, at founder-friendly economics.',
    intro:
      'Senior technology leadership for startups between "we need to build" and "we can afford a full-time CTO": architecture decisions, hiring, investor diligence and a steady hand when things break.',
    what: 'A named executive who owns your technical direction: stack and architecture choices, engineering hiring and vendor decisions, security posture and the technical narrative your investors will probe.',
    points: [
      'Architecture and stack decisions with written rationale',
      'Engineering hiring: profiles, screening, offers',
      'Investor due-diligence preparation',
      'Security, compliance and scaling readiness',
    ],
    why: 'The most expensive technical decisions are made in the first year, usually by whoever is available. Make them with someone who has already paid those tuition fees at someone else\'s startup.',
  },
  {
    slug: 'scaling',
    name: 'Scale-Up Engineering',
    theme: 'gears',
    tagline: 'When growth finds you, be ready for it.',
    intro:
      'For startups whose MVP succeeded harder than the architecture expected: performance engineering, infrastructure hardening and the team scaling that turns a sprint into a marathon.',
    what: 'We profile and fix the bottlenecks, automate the deployments, harden security before your first enterprise customer asks, and help you grow the team without losing the speed that got you here.',
    points: [
      'Performance profiling and remediation',
      'Infrastructure automation and reliability',
      'Security hardening and SOC 2 readiness',
      'Engineering team structure and hiring',
    ],
    why: 'Success is the stress test most startups fail. The window between "growing fast" and "falling over publicly" is short — we have helped teams cross it and know where the ice is thin.',
  },
  {
    slug: 'funding-readiness',
    name: 'Funding & Diligence Readiness',
    theme: 'shield',
    tagline: 'Walk into technical due diligence with nothing to hide.',
    intro:
      'Preparation for the technical scrutiny that comes with raising: codebase and architecture review, security posture, documentation and the crisp technical story investors reward.',
    what: 'A diligence-style audit before the real one — code quality, architecture, security, IP hygiene and team risks — with a prioritized fix list and coaching for the technical Q&A.',
    points: [
      'Pre-diligence technical audit',
      'Security and IP hygiene review',
      'Documentation and architecture narratives',
      'Technical Q&A coaching for founders',
    ],
    why: 'Deals lose momentum in diligence when surprises surface. Finding your own skeletons first — and fixing or framing them — protects both valuation and timeline.',
  },
]

const startupPages: PageDef[] = STARTUPS.map((s) => ({
  path: `/startups/${s.slug}`,
  badge: `Startups — ${s.name}`,
  title: s.tagline,
  intro: s.intro,
  image: img(s.theme),
  sections: [
    { heading: 'What we deliver', body: s.what, points: s.points },
    { heading: 'Why it matters', body: s.why },
    {
      heading: 'Founder-friendly by design',
      body: 'Startup engagements come with startup terms: fixed scopes you can budget, senior people only, code and accounts in your name from day one, and zero lock-in — everything we build, you own outright. Founders bet everything; the least we can do is not add us to the risks.',
    },
  ],
  cta: { label: 'Talk to us about your startup', to: '/contact' },
}))

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

interface Industry {
  slug: string
  name: string
  theme: string
  intro: string
  how: string
  points: string[]
}

const INDUSTRIES: Industry[] = [
  {
    slug: 'healthcare',
    name: 'Healthcare & Life Sciences',
    theme: 'shield',
    intro:
      'Technology and talent for providers, payers and health-tech companies — where uptime is patient safety and compliance is table stakes. HIPAA-aware engineering and staffing from people who know why it matters.',
    how: 'We modernize patient-facing systems, integrate the EHR world with everything around it, build analytics that clinicians trust and staff the specialized roles — interface engineers, clinical analysts — that generic staffing firms cannot screen.',
    points: [
      'HIPAA-conscious application development and hosting',
      'EHR/EMR integration (HL7, FHIR)',
      'Clinical and operational analytics',
      'Specialized health-IT staffing',
    ],
  },
  {
    slug: 'fintech',
    name: 'Financial Services & FinTech',
    theme: 'chart',
    intro:
      'Banks, lenders, insurers and the fintechs disrupting them all share one constraint: trust is the product. We build and staff for the security, auditability and uptime that trust requires.',
    how: 'Payment and ledger integrations, fraud analytics, compliance-ready data platforms and cloud architectures that satisfy both regulators and release schedules — plus staffing for the risk, data and engineering roles the sector competes hardest for.',
    points: [
      'Payments and core-system integration',
      'Fraud detection and risk analytics',
      'Audit-ready data platforms',
      'Fintech engineering and compliance staffing',
    ],
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & E-Commerce',
    theme: 'mobile',
    intro:
      'In retail, every second of latency and every confusing checkout is measurable lost revenue. We engineer the storefronts, integrations and analytics that convert — and scale for the days that matter.',
    how: 'Composable commerce builds, ERP-storefront-3PL integration, personalization and demand analytics, and load-tested infrastructure that treats Black Friday as a requirement, not a prayer.',
    points: [
      'E-commerce platform builds and replatforming',
      'Inventory, ERP and fulfillment integration',
      'Personalization and demand forecasting',
      'Peak-season performance engineering',
    ],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing & Industrial',
    theme: 'gears',
    intro:
      'The factory floor and the front office speak different languages. We connect them — OT to IT, machines to dashboards, decades-old systems to modern analytics — without stopping the line.',
    how: 'Industrial data platforms, predictive maintenance analytics, MES/ERP integration and the modernization of plant-adjacent legacy systems, delivered with the respect for uptime that manufacturing demands.',
    points: [
      'OT/IT integration and industrial data platforms',
      'Predictive maintenance and quality analytics',
      'MES, ERP and supply-chain integration',
      'Legacy system modernization',
    ],
  },
  {
    slug: 'education',
    name: 'Education & EdTech',
    theme: 'people',
    intro:
      'Schools, universities and education companies serve the most important users there are. We build the platforms and staff the teams that make learning work — accessibly, securely and at semester speed.',
    how: 'Student information system integrations, learning platform development, FERPA-conscious data practices and analytics that help educators intervene early — delivered on academic calendars, not vendor ones.',
    points: [
      'LMS and SIS integration and development',
      'FERPA-aware data engineering',
      'Student success analytics',
      'EdTech product engineering',
    ],
  },
  {
    slug: 'logistics',
    name: 'Logistics & Transportation',
    theme: 'target',
    intro:
      'Margins in logistics live in the seconds and the cents. We build the visibility, optimization and integration layers that squeeze both — across fleets, warehouses and the partners in between.',
    how: 'Real-time tracking platforms, route and load optimization, EDI/API integration across trading partners and the operational dashboards dispatchers actually keep open.',
    points: [
      'Real-time visibility platforms',
      'Route and capacity optimization',
      'EDI and partner API integration',
      'Operational analytics and alerting',
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate & PropTech',
    theme: 'city',
    intro:
      'From brokerages to property managers to proptech startups, real estate runs on data that is famously messy and processes that are famously manual. Both are fixable — profitably.',
    how: 'Listing and transaction platform builds, MLS and market-data integration, document automation for the paperwork mountain and analytics that price with evidence.',
    points: [
      'Listing, transaction and portal platforms',
      'MLS and market data integration',
      'Document and workflow automation',
      'Valuation and market analytics',
    ],
  },
  {
    slug: 'energy',
    name: 'Energy & Utilities',
    theme: 'stack',
    intro:
      'Texas knows energy — and so do we. Data platforms, field operations tools and analytics for producers, utilities and the renewable wave reshaping the grid.',
    how: 'SCADA-adjacent data integration, field workforce applications, production and load forecasting, and the modernization of control-room-adjacent systems where reliability is non-negotiable.',
    points: [
      'Operational data platforms and historians',
      'Field operations and inspection apps',
      'Production and demand forecasting',
      'Regulatory reporting automation',
    ],
  },
  {
    slug: 'public-sector',
    name: 'Public Sector & Government',
    theme: 'shield',
    intro:
      'Public technology serves everyone — which makes accessibility, transparency and reliability requirements, not features. We help agencies modernize with the patience and compliance the mission demands.',
    how: 'Citizen-facing portal modernization, legacy system integration, accessibility (Section 508/WCAG) remediation and staffing for the roles public-sector timelines make hard to fill.',
    points: [
      'Citizen portal and service modernization',
      'Legacy integration and data exchange',
      'Accessibility compliance engineering',
      'Cleared and compliant staffing support',
    ],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality & Travel',
    theme: 'partner',
    intro:
      'Hospitality is judged one guest at a time. We build the booking, operations and guest-experience technology that keeps the promise your brand makes — at scale and in season.',
    how: 'Booking engine and channel integration, property and operations systems, guest personalization and the peak-load engineering that keeps reservation systems standing on the busiest days of the year.',
    points: [
      'Booking and channel-manager integration',
      'Property management system modernization',
      'Guest experience and loyalty platforms',
      'Seasonal peak-load engineering',
    ],
  },
]

const industryPages: PageDef[] = INDUSTRIES.map((ind) => ({
  path: `/industries/${ind.slug}`,
  badge: `Industry — ${ind.name}`,
  title: `Technology and talent for ${ind.name.toLowerCase()}.`,
  intro: ind.intro,
  image: img(ind.theme),
  sections: [
    { heading: 'How we help', body: ind.how, points: ind.points },
    {
      heading: 'Consulting and staffing, together',
      body: `Industry expertise compounds when both practices share it. Our consultants bring ${ind.name.toLowerCase()} platform experience to every build, and our recruiters screen with the domain vocabulary that generic staffing firms fake. One partner, both problems solved.`,
    },
    {
      heading: 'Start with a conversation',
      body: 'Tell us what you are trying to modernize, build or staff. We will bring relevant experience, honest opinions and — if we are not the right fit — a straight answer and a referral.',
    },
  ],
  cta: { label: 'Discuss your project', to: '/contact' },
}))

/* ------------------------------------------------------------------ */
/* Technologies                                                        */
/* ------------------------------------------------------------------ */

interface Tech {
  slug: string
  name: string
  theme: string
  what: string
  use: string
  points: string[]
}

const TECHNOLOGIES: Tech[] = [
  { slug: 'react', name: 'React', theme: 'code', what: 'The de-facto standard for modern web interfaces, and the foundation of most front-ends we ship.', use: 'Customer portals, dashboards, design systems and complex interactive applications — with TypeScript, testing and performance discipline built in.', points: ['SPA and SSR (Next.js) builds', 'Design systems and component libraries', 'Performance audits and remediation', 'React engineer staffing'] },
  { slug: 'nodejs', name: 'Node.js', theme: 'code', what: 'JavaScript on the server — fast to build with, massive ecosystem, and one language across the stack.', use: 'APIs, real-time systems, integration services and the backends behind our React front-ends, deployed with observability from day one.', points: ['REST and GraphQL API development', 'Real-time and event-driven services', 'Express/Nest.js platform builds', 'Node.js engineer staffing'] },
  { slug: 'python', name: 'Python', theme: 'lab', what: 'The language of data and AI, and a productive general-purpose workhorse for services and automation.', use: 'Data pipelines, machine learning, automation scripts and APIs — the language our Data & Analytics and AI practices reach for first.', points: ['Data engineering and ETL', 'ML model development', 'FastAPI/Django services', 'Python developer staffing'] },
  { slug: 'java', name: 'Java', theme: 'gears', what: 'The backbone of enterprise software — still running more mission-critical systems than anything else.', use: 'Enterprise application development, Spring-based services, legacy modernization and the integrations that keep big systems talking.', points: ['Spring Boot service development', 'Legacy Java modernization', 'Enterprise integration', 'Java engineer staffing'] },
  { slug: 'dotnet', name: '.NET', theme: 'stack', what: 'Microsoft\'s mature, high-performance platform — a natural fit for organizations invested in the Microsoft ecosystem.', use: 'Business applications, APIs and modernization of legacy .NET Framework estates to modern .NET — plus deep Azure integration.', points: ['.NET application development', 'Framework-to-modern-.NET migration', 'Azure-integrated solutions', '.NET developer staffing'] },
  { slug: 'aws', name: 'Amazon Web Services', theme: 'cloud', what: 'The broadest cloud platform on the market, and the destination of most migrations we run.', use: 'Landing zones, migrations, serverless architectures and cost optimization — designed with Well-Architected discipline and FinOps hygiene.', points: ['AWS migration and landing zones', 'Serverless and container architectures', 'Cost optimization (FinOps)', 'AWS engineer staffing'] },
  { slug: 'azure', name: 'Microsoft Azure', theme: 'cloud', what: 'The enterprise cloud of choice for Microsoft-centric organizations — identity, productivity and platform in one ecosystem.', use: 'Azure migrations, AD-integrated architectures, data platforms on Synapse/Fabric and hybrid designs that respect what stays on-premises.', points: ['Azure migration and governance', 'Entra ID and hybrid identity', 'Azure data platform builds', 'Azure engineer staffing'] },
  { slug: 'gcp', name: 'Google Cloud', theme: 'cloud', what: 'Google\'s cloud — strongest where data and machine learning meet infrastructure.', use: 'BigQuery data platforms, GKE-based container architectures and ML workloads on Vertex AI, for teams that choose GCP\'s data-first strengths.', points: ['BigQuery warehouse builds', 'GKE and Cloud Run architectures', 'Vertex AI ML platforms', 'GCP engineer staffing'] },
  { slug: 'kubernetes', name: 'Kubernetes', theme: 'gears', what: 'The operating system of the modern cloud — powerful, and unforgiving of shortcuts.', use: 'Cluster design, workload migration, GitOps automation and the guardrails that keep clusters secure, observable and affordable.', points: ['Cluster architecture and hardening', 'GitOps (Argo/Flux) automation', 'Observability and cost controls', 'Platform engineer staffing'] },
  { slug: 'salesforce', name: 'Salesforce', theme: 'partner', what: 'The dominant CRM platform — and an ecosystem where configuration quality decides everything.', use: 'Implementation, org cleanup, Apex/Flow development and the integrations that make Salesforce the single source of truth it was bought to be.', points: ['Implementation and org health reviews', 'Apex, Flow and Lightning development', 'Integration with ERP and data platforms', 'Salesforce admin/developer staffing'] },
  { slug: 'sap', name: 'SAP', theme: 'stack', what: 'The ERP that runs global business — with a migration deadline (S/4HANA) the whole ecosystem is racing.', use: 'S/4HANA migration planning, module configuration, integration and the specialized staffing that SAP programs consume in quantity.', points: ['S/4HANA roadmap and migration support', 'Module configuration and enhancement', 'SAP integration (BTP, PI/PO)', 'SAP consultant staffing'] },
  { slug: 'snowflake', name: 'Snowflake', theme: 'stack', what: 'The cloud data warehouse that made scale simple — and made cost discipline essential.', use: 'Warehouse design, migration from legacy platforms, dbt-based modeling and the governance and cost controls Snowflake estates need.', points: ['Warehouse architecture and migration', 'dbt modeling and ELT pipelines', 'Cost governance and optimization', 'Snowflake engineer staffing'] },
  { slug: 'databricks', name: 'Databricks', theme: 'lab', what: 'The lakehouse platform where data engineering and machine learning share one home.', use: 'Lakehouse builds, Spark pipeline engineering, ML workflows on MLflow and Unity Catalog governance for teams unifying data and AI.', points: ['Lakehouse architecture', 'Spark pipeline development', 'MLflow and model operations', 'Databricks engineer staffing'] },
  { slug: 'power-bi', name: 'Power BI', theme: 'chart', what: 'Microsoft\'s analytics layer — ubiquitous, powerful and only as good as the models beneath it.', use: 'Semantic model design, executive dashboarding, governance for report sprawl and training that turns report consumers into self-service analysts.', points: ['Semantic model and DAX engineering', 'Executive dashboard design', 'Deployment and workspace governance', 'BI developer staffing'] },
  { slug: 'flutter', name: 'Flutter', theme: 'mobile', what: 'Google\'s cross-platform toolkit — one codebase, genuinely native feel, on iOS and Android.', use: 'Cross-platform mobile apps where speed to both stores matters — consumer apps, field tools and MVPs that cannot afford two teams.', points: ['Cross-platform app development', 'Native module integration', 'App store launch and CI/CD', 'Flutter developer staffing'] },
]

const techPages: PageDef[] = TECHNOLOGIES.map((t) => ({
  path: `/technologies/${t.slug}`,
  badge: `Technology — ${t.name}`,
  title: `${t.name} consulting, delivery and staffing.`,
  intro: `${t.what} AmBrightTech provides ${t.name} expertise two ways: consulting teams who design and build with it, and vetted professionals who join your team and hit the ground running.`,
  image: img(t.theme),
  sections: [
    { heading: `How we use ${t.name}`, body: t.use, points: t.points },
    {
      heading: 'Screened by people who ship it',
      body: `Every ${t.name} professional we place is screened by practitioners who use ${t.name} in delivery — real scenarios, real code, real judgment. That is why our shortlists are short and our placements stick.`,
    },
    {
      heading: 'Need it built or need it staffed?',
      body: 'Either way, the conversation starts the same: what outcome are you after? Tell us, and we will propose the fastest honest path — a delivery team, a key hire or both.',
    },
  ],
  cta: { label: `Get ${t.name} help`, to: '/contact' },
}))

/* ------------------------------------------------------------------ */
/* Roles                                                               */
/* ------------------------------------------------------------------ */

interface Role {
  slug: string
  name: string
  theme: string
  what: string
  screen: string[]
}

const ROLES: Role[] = [
  { slug: 'software-engineer', name: 'Software Engineers', theme: 'code', what: 'Front-end, back-end and full-stack engineers across modern stacks — the builders every roadmap depends on.', screen: ['Live coding on realistic problems', 'System design discussion', 'Code review exercise', 'Communication and ownership signals'] },
  { slug: 'data-engineer', name: 'Data Engineers', theme: 'stack', what: 'Pipeline, warehouse and platform engineers who make data trustworthy — the scarcest skill set in the market.', screen: ['SQL and modeling depth', 'Pipeline design scenarios', 'Platform experience validation', 'Data quality instincts'] },
  { slug: 'cloud-engineer', name: 'Cloud Engineers', theme: 'cloud', what: 'AWS, Azure and GCP engineers who build landing zones, run migrations and keep infrastructure as code.', screen: ['Architecture scenario walkthroughs', 'IaC (Terraform) review', 'Security and cost instincts', 'Incident war stories, verified'] },
  { slug: 'devops-engineer', name: 'DevOps Engineers', theme: 'gears', what: 'Pipeline, automation and reliability engineers who make shipping boring and outages rare.', screen: ['CI/CD design exercise', 'Container and orchestration depth', 'Observability philosophy', 'On-call maturity'] },
  { slug: 'qa-engineer', name: 'QA Engineers', theme: 'target', what: 'Manual and automation QA professionals who catch what everyone else missed — before customers do.', screen: ['Test strategy scenarios', 'Automation framework review', 'Bug advocacy and communication', 'Risk-based prioritization'] },
  { slug: 'ai-ml-engineer', name: 'AI/ML Engineers', theme: 'neural', what: 'Machine learning and applied-AI engineers — from model development to production LLM systems.', screen: ['ML fundamentals beyond the libraries', 'Production deployment experience', 'Evaluation and monitoring discipline', 'LLM/RAG system design'] },
  { slug: 'cybersecurity-analyst', name: 'Cybersecurity Professionals', theme: 'shield', what: 'Security analysts, engineers and leaders for a threat landscape that never takes a quarter off.', screen: ['Scenario-based incident response', 'Tooling depth across the stack', 'Compliance framework fluency', 'Communication under pressure'] },
  { slug: 'business-analyst', name: 'Business Analysts', theme: 'chart', what: 'The translators between business intent and technical delivery — undervalued until you work without one.', screen: ['Requirements elicitation role-play', 'Process mapping exercise', 'Stakeholder management scenarios', 'Documentation quality review'] },
  { slug: 'scrum-master', name: 'Scrum Masters & Delivery Leads', theme: 'people', what: 'Delivery professionals who unblock teams, protect focus and make agile mean something.', screen: ['Facilitation scenarios', 'Metrics philosophy (no theater)', 'Conflict resolution experience', 'Servant-leadership evidence'] },
  { slug: 'product-manager', name: 'Product Managers', theme: 'target', what: 'PMs who own outcomes, say no with grace and turn user pain into shipped value.', screen: ['Product sense case study', 'Prioritization under constraint', 'Analytics fluency', 'Stakeholder narrative skills'] },
]

const rolePages: PageDef[] = ROLES.map((r) => ({
  path: `/roles/${r.slug}`,
  badge: `We staff — ${r.name}`,
  title: `Hire ${r.name.toLowerCase()} who deliver.`,
  intro: `${r.what} Available through contract, contract-to-hire and direct-hire engagements — every candidate screened by practitioners before you ever see a resume.`,
  image: img(r.theme),
  sections: [
    {
      heading: 'How we screen',
      body: 'Keyword matching finds resumes; practitioner screening finds professionals. Before any candidate reaches your inbox, they clear a screen designed and scored by people who do the job:',
      points: r.screen,
    },
    {
      heading: 'Engagement options',
      body: 'Contract for speed and flexibility, contract-to-hire to be certain before you commit, or direct hire for the roles that shape your team for years. All E-Verify certified, all with transparent terms and replacement guarantees.',
    },
    {
      heading: 'For candidates',
      body: `If you are a ${r.name.toLowerCase().replace(/s$/, '')} looking for your next move: we prepare you honestly, advocate for you relentlessly and never submit you anywhere without your yes. See open roles or send your resume — most careers change with one conversation.`,
    },
  ],
  cta: { label: 'Request candidates', to: '/contact' },
}))

/* ------------------------------------------------------------------ */
/* Hub pages                                                           */
/* ------------------------------------------------------------------ */

const HUBS: PageDef[] = [
  {
    path: '/services',
    badge: 'Services',
    title: 'Every service, one standard: outcomes.',
    intro:
      'From application development to fractional CIO leadership — ten focused services, each delivered by specialists and measured by results. Start with the one that unblocks you most.',
    image: img('gears'),
    linksTitle: 'Explore our services',
    links: SERVICES.map((s) => ({ label: s.name, to: `/services/${s.slug}`, desc: s.tagline })),
    sections: [
      {
        heading: 'One partner, full lifecycle',
        body: 'Strategy, build, run and staff — our services are designed to compose. Start anywhere; grow in any direction; keep a single accountable partner throughout. And when a service touches AI, cloud or data, the relevant practice is already in the room.',
      },
    ],
    cta: { label: 'Book a strategy call', to: '/contact' },
  },
  {
    path: '/ai',
    badge: 'Artificial Intelligence',
    title: 'AI that ships, measured by outcomes — not demos.',
    intro:
      'AmBrightTech builds AI the way we build everything: problem first, evidence always, production discipline throughout. Ten AI capabilities — from executive strategy to deployed agents — tested in our own operations before they ever reach yours.',
    image: img('circuit'),
    stats: [
      { value: '10', label: 'AI capability areas, strategy to MLOps' },
      { value: '1st', label: 'Every capability proven in our own operations first' },
      { value: 'Weeks', label: 'From use-case to working prototype' },
      { value: '0', label: 'AI theater — every build has an evaluation harness' },
    ],
    linksTitle: 'Explore our AI capabilities',
    links: AI_PAGES.map((a) => ({ label: a.name, to: `/ai/${a.slug}`, desc: a.tagline })),
    sections: [
      {
        heading: 'Why AmBrightTech for AI',
        body: 'Because we are practitioners, not tourists. Our Labs team runs AI inside our own staffing and consulting operations daily — matching candidates, triaging tickets, drafting analyses — so our recommendations come with receipts. We know what breaks, what drifts and what quietly stops being used, because we have watched it in our own systems first.',
      },
      {
        heading: 'The honest AI conversation',
        body: 'Some processes should be automated with AI today. Some need better data first. Some should stay human. The most valuable thing we offer is telling you which is which — before you spend, not after.',
      },
    ],
    quote: {
      text: 'The companies that win with AI will not be the ones that adopted it loudest — they will be the ones that measured it honestly.',
    },
    cta: { label: 'Start your AI conversation', to: '/contact' },
  },
  {
    path: '/products',
    badge: 'Products',
    title: 'Products we built because the problems would not leave us alone.',
    intro:
      'AmBrightTech Labs builds in-house products the same way we advise clients to: problem first, prototype fast, measure honestly, and only scale what earns it. These six made it through the gauntlet.',
    image: img('lab'),
    linksTitle: 'Our product family',
    links: PRODUCTS.map((p) => ({ label: p.name, to: `/products/${p.slug}`, desc: p.tagline })),
    sections: [
      {
        heading: 'Dogfooded by design',
        body: 'Every product here started as internal tooling for our own operations — staffing, analytics, support, cloud cost, hiring. We are our own first customer and harshest critic, which is why what reaches early access already survived real daily use.',
      },
      {
        heading: 'The Labs pipeline',
        body: 'Behind these six sit the prototypes that did not make it — and we are proud of those too. A disciplined "no" after three weeks is a Labs success story. Read "Building Digital Products That Solve Real Problems" for the method behind the portfolio.',
      },
    ],
    cta: { label: 'Request early access', to: '/contact' },
  },
  {
    path: '/startups',
    badge: 'Startups',
    title: 'From idea to launched — with people who have done it before.',
    intro:
      'You bring the idea and the fire; we bring the senior team, the process discipline and the scars from startups past. Six services covering the founder journey from first validation to funding diligence — on founder-friendly terms.',
    image: img('rocket'),
    stats: [
      { value: '90', label: 'Days from validated idea to MVP in market' },
      { value: '100%', label: 'Of code and accounts owned by you, day one' },
      { value: 'Senior', label: 'Only — no learning on your runway' },
      { value: 'Fixed', label: 'Scopes you can budget against' },
    ],
    linksTitle: 'The founder journey',
    links: STARTUPS.map((s) => ({ label: s.name, to: `/startups/${s.slug}`, desc: s.tagline })),
    sections: [
      {
        heading: 'Why founders choose us',
        body: 'Because we treat your runway like it is ours. Fixed scopes instead of open meters, boring proven stacks instead of resume-driven architecture, and the willingness to tell you when the evidence says pivot. Your idea deserves a team that protects it — including from us.',
      },
      {
        heading: 'From MVP to real company',
        body: 'When traction comes, everything we offer scales with you: our practices harden your platform, our staffing builds your team, our fractional CTO carries you to the full-time hire. One partner from napkin to Series B.',
      },
    ],
    quote: {
      text: 'Speed is a startup\'s only structural advantage. Everything we do for founders is designed to protect it.',
    },
    cta: { label: 'Talk to us about your startup', to: '/contact' },
  },
  {
    path: '/industries',
    badge: 'Industries',
    title: 'Domain fluency, delivered.',
    intro:
      'Technology is universal; the problems it solves are not. We serve ten industries with consulting and staffing that speak the domain language — because the fastest way to lose a client is to make them explain their business twice.',
    image: img('city'),
    linksTitle: 'Industries we serve',
    links: INDUSTRIES.map((i) => ({ label: i.name, to: `/industries/${i.slug}`, desc: i.intro.split('.')[0] + '.' })),
    sections: [
      {
        heading: 'Why industry focus matters',
        body: 'A healthcare integration and a fintech integration are the same technology and completely different projects — the compliance, the vocabulary, the failure costs. Our industry pages describe how we show up differently for each, and our teams are staffed to match.',
      },
    ],
    cta: { label: 'Discuss your industry', to: '/contact' },
  },
  {
    path: '/technologies',
    badge: 'Technologies',
    title: 'The stacks we build with and staff for.',
    intro:
      'Fifteen technologies where AmBrightTech goes deep — consulting teams who ship with them, and vetted professionals who join your team ready to contribute. If your stack is here, we speak it fluently.',
    image: img('stack'),
    linksTitle: 'Our technology coverage',
    links: TECHNOLOGIES.map((t) => ({ label: t.name, to: `/technologies/${t.slug}`, desc: t.what })),
    sections: [
      {
        heading: 'Depth over logos',
        body: 'Anyone can put a logo wall on a website. Each technology here is backed by delivery experience and practitioner-designed screening — which is why every page describes how we actually use it, not just that we have heard of it.',
      },
    ],
    cta: { label: 'Get technology help', to: '/contact' },
  },
  {
    path: '/roles',
    badge: 'Roles We Staff',
    title: 'The roles that build modern technology teams.',
    intro:
      'Ten role families where our screening goes deepest — from software engineers to product managers. Every candidate practitioner-screened, every engagement E-Verify certified, every placement built to last.',
    image: img('briefcase'),
    linksTitle: 'Roles we place',
    links: ROLES.map((r) => ({ label: r.name, to: `/roles/${r.slug}`, desc: r.what })),
    sections: [
      {
        heading: 'Practitioner screening, every role',
        body: 'Each role family has a screening kit designed by someone who has done the job: realistic scenarios, working sessions and calibrated scorecards. Resumes get people interviews; evidence gets them offers.',
      },
    ],
    cta: { label: 'Request candidates', to: '/contact' },
  },
]

/* ------------------------------------------------------------------ */

export const ALL_PAGES: PageDef[] = [
  ...PAGES,
  ...HUBS,
  ...servicePages,
  ...aiPages,
  ...productPages,
  ...startupPages,
  ...industryPages,
  ...techPages,
  ...rolePages,
]

export function getAnyPage(path: string): PageDef | undefined {
  return ALL_PAGES.find((p) => p.path === path)
}
