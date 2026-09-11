// ─── SYNLAB public source of truth ────────────────────────────
// PUBLIC WEBSITE ONLY. Internal engineering details (circuits, wiring,
// GPIO, firmware, CAD, dimensions, assembly steps, protocols, calibration
// implementation, unpublished data, credentials) must NEVER be added here.
// Only source-supported, visitor-safe facts. When in doubt, generalize.

export const NAV_LINKS = [
  { label: "IDEA", href: "#idea" },
  { label: "WHY", href: "#why" },
  { label: "ONE", href: "#one" },
  { label: "3D", href: "#model3d" },
  { label: "ROADMAP", href: "#roadmap" },
  { label: "TECH", href: "#technology" },
  { label: "DEMO", href: "#dashboard" },
  { label: "TEAM", href: "#team" },
  { label: "CONTACT", href: "#contact" },
];

export const DASHBOARD_URL = "https://synlab-demo-control-main.vercel.app";
export const CONTACT_EMAIL = "adarsh.dps.2020@gmail.com";
export const TINKERCAD_URL = "https://www.tinkercad.com/things/2VAXOjaCejo-synlab?sharecode=7J2dGjszm_MKz6V9eMmihf87SqzamsgAst7L3CKdQcA";

export const CONTACTS = [
  {
    name: "Adarsh Kumar Dash",
    role: "Co-founder · Team Innovexa",
    email: "adarsh.dps.2020@gmail.com",
    phone: "+91 73820 77192",
    phoneHref: "+917382077192",
  },
  {
    name: "Sharon Chakraborty",
    role: "Co-founder · Team Innovexa",
    email: "chakrabortysharon123@gmail.com",
    phone: "+91 94330 27778",
    phoneHref: "+919433027778",
  },
];

export const ADARSH_LINKS = {
  portfolio: "https://adarshkumardash.github.io/Portfolio/",
  linkedin: "https://www.linkedin.com/in/adarsh-kumar-dash-5020873a3/",
  github: "https://github.com/AdarshKumarDash",
};

// Visitor-framed barriers (source: team stakeholder study; percentages only).
// WHERE / WHEN / HOW / SAFETY / ACCESS framing for public readability.
export const PROBLEMS = [
  {
    key: "WHERE",
    title: "WHERE",
    question: "Where can I actually do practical science?",
    body: "Only 16.9% of surveyed stakeholders described labs as easily accessible when needed — most experienced some degree of limitation.",
    stat: "83.1% face limits",
    detail: "16.9% easy access · the rest face limitations, difficulty or no access.",
    implication: "When the lab is fixed in one place, opportunity stays fixed with it.",
  },
  {
    key: "WHEN",
    title: "WHEN",
    question: "When do I get enough time to explore?",
    body: "Time constraints were the top difficulty reason — cited by 54.2% of those who answered. Fixed schedules cut exploration short.",
    stat: "54.2% cite time",
    detail: "The #1 difficulty reason in the study.",
    implication: "Curiosity doesn't fit neatly into a timetable slot.",
  },
  {
    key: "HOW",
    title: "HOW",
    question: "How do I know what to do next?",
    body: "Lack of clear guidance was cited by 42.4% of those who answered. Equipment alone isn't enough.",
    stat: "42.4% lack guidance",
    detail: "A widely shared difficulty in the study.",
    implication: "Hands-on work needs structure — not just apparatus.",
  },
  {
    key: "SAFETY",
    title: "SAFETY",
    question: "Can I explore with confidence?",
    body: "Safety concerns were cited by 32.2% of those who answered, alongside outdated or insufficient setups (32.2%).",
    stat: "32.2% cite safety",
    detail: "Safety and outdated setups each cited by about a third.",
    implication: "Confidence comes from controlled, monitored, guided experiences.",
  },
  {
    key: "ACCESS",
    title: "ACCESS",
    question: "Can the experience adapt to me?",
    body: "Limited equipment availability was cited by 50.8% of those who answered, and 64.6% face difficulties often or sometimes.",
    stat: "50.8% lack equipment",
    detail: "About half cite equipment · 64.6% face difficulties often or sometimes.",
    implication: "One rigid setup can't serve every learner, everywhere.",
  },
];

// Public story chapters — human narrative, no engineering iterations.
export const TIMELINE = [
  { id: "question", step: "01", title: "THE QUESTION", body: "We started with a simple frustration: practical science felt locked inside fixed rooms, fixed hours and fixed setups — while curiosity itself is anything but fixed." },
  { id: "research", step: "02", title: "THE RESEARCH", body: "Team Innovexa spoke with students, educators, parents, hobbyists, institutions and researchers. Accessibility, time, safety and guidance kept coming up — so we knew the problem was real." },
  { id: "idea", step: "03", title: "THE IDEA", body: "What if practical science could travel? A laboratory concept that packs down, moves with the learner, and adapts to different needs — instead of asking the learner to always come to it." },
  { id: "prototype", step: "04", title: "THE PROTOTYPE", body: "The idea became something tangible: a portable, modular laboratory concept combining hands-on equipment, observation and a digital layer for following along." },
  { id: "one", step: "05", title: "SYNLAB ONE", body: "The first base-model direction — a tangible prototype that turns the concept into something demonstrable and testable: hands-on experimentation, observation and monitoring in a portable form." },
  { id: "next", step: "06", title: "THE NEXT CHAPTER", body: "SynLab PRO sketches where the concept could go next — broader sensing, deeper investigation, intelligent assistance — as a clearly labelled future vision." },
];

// Conceptual zones only — no placement, dimensions, wiring or part numbers.
export const LAB_ZONES = [
  { id: "hub", name: "CENTRAL HUB", tag: "The heart of the experience", body: "One core unit brings everything together, so setup stays simple and the experience feels like a single lab — not a box of parts.", concept: "The core brings the experience together.", value: "Less setup, more experimenting." },
  { id: "carry", name: "PORTABLE FORM", tag: "Designed to travel", body: "The concept packs down for transport and sets up where learning happens — a classroom, a club room, a field table.", concept: "The lab comes to you.", value: "Learning beyond the lab room." },
  { id: "modules", name: "MODULES", tag: "Adapts to the activity", body: "Interchangeable areas support different kinds of practical work — including close observation with a guided slide setup.", concept: "Change the activity, not the lab.", value: "One platform, many lessons." },
  { id: "sensing", name: "SENSING", tag: "Follow what's happening", body: "Built-in sensing follows environmental and experimental conditions, so learners can observe change — not just guess at it.", concept: "See the invisible.", value: "Measurements meet meaning." },
  { id: "support", name: "EXPERIMENT SUPPORT", tag: "Hands-on, with care", body: "Supportive systems help shape conditions for activities — for example gentle thermal and liquid handling — within a guided, safety-conscious flow.", concept: "Control without complexity.", value: "Explore with confidence." },
];

// Public technology categories ONLY — no parts, protocols, architecture.
export const TECH_PILLARS = [
  { name: "SENSING", fn: "Observing conditions", role: "SynLab follows relevant environmental and experimental conditions during an activity, so learners can connect what they see with what is happening around the experiment.", icon: "sense" },
  { name: "CONTROL", fn: "Supporting conditions", role: "Supportive systems help maintain steadier conditions for an activity — keeping the focus on learning rather than troubleshooting the setup.", icon: "control" },
  { name: "MODULARITY", fn: "Adapting the experience", role: "Interchangeable areas let the same platform support different activities and learning goals, instead of needing a different lab for each one.", icon: "modules" },
  { name: "DIGITAL LAYER", fn: "Following along", role: "A dashboard-oriented digital experience helps learners observe readings and follow structured activities — the screen supports the bench, never replaces it.", icon: "digital" },
];

export const SURVEY = {
  usage: [
    { label: "Very frequent", value: 27.7 },
    { label: "Occasional", value: 33.8 },
    { label: "Rare", value: 27.7 },
    { label: "None", value: 10.8 },
  ],
  difficulty: [
    { label: "Often", value: 13.8 },
    { label: "Sometimes", value: 50.8 },
    { label: "Rarely", value: 24.6 },
    { label: "Never", value: 10.8 },
  ],
  causes: [
    { label: "Time constraints", pct: 54.2 },
    { label: "Equipment availability", pct: 50.8 },
    { label: "Lack of guidance", pct: 42.4 },
    { label: "Safety concerns", pct: 32.2 },
    { label: "Outdated setups", pct: 32.2 },
  ],
  access: [
    { label: "Easily accessible", value: 16.9 },
    { label: "With limitations", value: 55.4 },
    { label: "Difficult", value: 21.5 },
    { label: "No access", value: 6.2 },
  ],
  demand: [
    { label: "Extremely helpful", value: 66.2 },
    { label: "Helpful", value: 29.2 },
    { label: "Neutral", value: 4.6 },
  ],
  stakeholders: ["Students", "Teachers", "Parents", "Hobbyists", "Institutions", "Researchers"],
};

// High-level PRO vision — capabilities only, zero implementation.
export const PRO_CAPABILITIES = [
  { title: "ADVANCED SENSING", body: "Potential for more sophisticated measurements that open up deeper investigations." },
  { title: "ENVIRONMENTAL ANALYSIS", body: "Potential to support broader scientific questions about surroundings and samples." },
  { title: "BIOLOGICAL EXPLORATION", body: "Potential future pathways toward biological testing capabilities." },
  { title: "INTELLIGENT ASSISTANCE", body: "Potential intelligent support to help keep measurements dependable." },
  { title: "EXPANDABLE MODULES", body: "A future ecosystem of additional modules for new activities and subjects." },
];

export const TEAM = [
  {
    name: "Adarsh Kumar Dash",
    note: "CO-FOUNDER",
    body: "Co-founder of Innovexa and part of the team shaping SynLab from research and concept development to prototyping and product direction.",
    links: true,
  },
  {
    name: "Sharon Chakraborty",
    note: "CO-FOUNDER",
    body: "Co-founder of Team Innovexa, working across research, concept development and prototyping to bring SynLab to life.",
    links: false,
  },
];

// ONE → PRO → CORE roadmap — maturity is explicit, future stays conceptual.
export const ROADMAP = [
  {
    id: "one",
    name: "SYNLAB ONE",
    sub: "THE BASE MODEL",
    badge: "CURRENT · BASE MODEL",
    badgeShort: "CURRENT",
    stage: "TODAY",
    status: "CURRENT / BASE-MODEL PROTOTYPE",
    body: "SynLab ONE is the first tangible implementation of the portable laboratory concept — a modular, hands-on platform designed to bring practical science closer to the learner.",
    points: ["Base-model prototype", "Portable", "Modular", "Hands-on", "Guided", "Demonstrable and testable"],
    href: "#one",
  },
  {
    id: "pro",
    name: "SYNLAB PRO",
    sub: "THE ADVANCED DIRECTION",
    badge: "FUTURE · PROPOSED",
    badgeShort: "FUTURE",
    stage: "NEXT",
    status: "FUTURE / PROPOSED",
    body: "SynLab PRO is envisioned as the advanced research-oriented direction of the platform, extending the portable laboratory concept toward deeper scientific investigation and more sophisticated measurement capabilities.",
    points: ["Advanced investigation", "Broader scientific measurements", "Environmental analysis", "Biological exploration", "Intelligent assistance", "Expandable modules"],
    href: "#future",
  },
  {
    id: "core",
    name: "SYNLAB CORE",
    sub: "THE INSTITUTIONAL DIRECTION",
    badge: "FUTURE · VISION",
    badgeShort: "VISION",
    stage: "BROADER FUTURE",
    status: "FUTURE / PROPOSED",
    body: "SynLab CORE is envisioned as the broader institutional direction — a foundation for bringing SynLab-style practical learning into schools, science programs and larger learning environments.",
    points: ["Institutional learning", "Multi-user environments", "Scalable deployment", "Shared practical learning", "Modular expansion", "Connected learning ecosystem"],
    href: "#roadmap",
  },
];

// ─── Public presentation helpers (visitor-safe, source-supported) ──

// At-a-glance snapshot — high-level concept words only, no implementation.
export const AT_A_GLANCE = [
  { title: "PORTABLE", body: "Learning beyond a fixed room." },
  { title: "MODULAR", body: "One platform, many activities." },
  { title: "HANDS-ON", body: "Real experimentation, not just reading." },
  { title: "GUIDED", body: "Structured support at every step." },
  { title: "CONNECTED", body: "Doing paired with observing." },
];

export const ANSWER_PILLARS = [  { title: "PORTABLE", body: "Take practical learning beyond a fixed laboratory.", icon: "move" },
  { title: "MODULAR", body: "Adapt the experience to different learning needs.", icon: "modules" },
  { title: "SAFER", body: "Designed with safety-conscious experimentation in mind.", icon: "shield" },
  { title: "GUIDED", body: "Designed to support structured experimentation.", icon: "compass" },
  { title: "ACCESSIBLE", body: "Make practical science easier to approach.", icon: "spark" },
];

export const EXPERIENCE_STEPS = [
  { step: "01", title: "CHOOSE", body: "Choose an experiment or learning activity to explore." },
  { step: "02", title: "PREPARE", body: "Set up the relevant module or activity space." },
  { step: "03", title: "EXPLORE", body: "Perform hands-on practical experimentation." },
  { step: "04", title: "OBSERVE", body: "Observe results, changes and measurements." },
  { step: "05", title: "LEARN", body: "Connect what happened to the idea behind it." },
  { step: "06", title: "DISCOVER", body: "Use the experience to ask new questions." },
];

export const AUDIENCES = [
  { title: "FOR STUDENTS", line: "Explore science beyond the textbook.", body: "Touch, try and observe — turn chapters into experiences you remember.", icon: "student" },
  { title: "FOR EDUCATORS", line: "Bring practical work closer to learners.", body: "A flexible way to support hands-on activities across topics and groups.", icon: "educator" },
  { title: "FOR SCHOOLS", line: "Expand practical learning opportunities.", body: "A complementary approach where lab access, space or schedules are stretched.", icon: "school" },
  { title: "FOR PARENTS", line: "Encourage curiosity at home and beyond.", body: "Support structured, safety-conscious exploration your child can talk about.", icon: "parent" },
  { title: "FOR HOBBYISTS", line: "Experiment, explore and learn.", body: "Follow your questions with a platform made for trying things out.", icon: "hobby" },
  { title: "FOR RESEARCHERS", line: "Explore portable experimentation.", body: "Consider what a compact, modular bench could enable in field or pilot work.", icon: "research" },
];

export const USE_CASES = [
  { title: "CLASSROOM LEARNING", body: "Support lessons with something learners can gather around — not just watch." },
  { title: "PROJECT WORK", body: "Give student projects a practical home from question to demonstration." },
  { title: "SCIENCE CLUBS", body: "Keep curiosity going after class with activities that set up quickly." },
  { title: "FIELD LEARNING", body: "Take structured observation where the questions actually are." },
  { title: "EXHIBITIONS", body: "Show the idea, not just the poster — visitors remember what they tried." },
  { title: "EXPLORATION", body: "Follow new questions as they appear, across subjects and ages." },
];

export const KEY_FINDINGS = [
  { value: "83.1%", label: "face access limits", note: "Only 16.9% call labs easily accessible." },
  { value: "64.6%", label: "hit difficulties", note: "Often 13.8% + Sometimes 50.8%." },
  { value: "54.2%", label: "blocked by time", note: "The top difficulty reason in the study." },
  { value: "95.4%", label: "welcome better systems", note: "Extremely helpful 66.2% + Helpful 29.2%." },
];

export const DASHBOARD_METRICS = [
  { metric: "Conditions", layer: "Sensing layer", why: "Follow whether the environment stays steady during an activity." },
  { metric: "Change over time", layer: "Digital layer", why: "Trends matter more than single numbers — watch the story unfold." },
  { metric: "Observation", layer: "Observation layer", why: "Pair readings with what learners can actually see." },
  { metric: "Guidance", layer: "Activity layer", why: "Structured prompts keep exploration focused, not random." },
];

export const ONE_VS_PRO = [
  { aspect: "Stage", one: "First step — base-model prototype", pro: "Next chapter — future vision" },
  { aspect: "Focus", one: "Portable, hands-on fundamentals", pro: "Broader, deeper investigation" },
  { aspect: "Sensing", one: "Core environmental + experimental observations", pro: "More sophisticated measurements (proposed)" },
  { aspect: "Activities", one: "Observation + guided experimentation", pro: "Wider scientific questions (proposed)" },
  { aspect: "Growth", one: "Interchangeable activity areas", pro: "Ecosystem of new modules (proposed)" },
];

export const IMPACT_THEMES = [
  { title: "LEARN", body: "Concepts stick when hands are involved." },
  { title: "EXPLORE", body: "Questions lead — the lab follows." },
  { title: "EXPERIMENT", body: "Trying, observing, retrying." },
  { title: "UNDERSTAND", body: "From observation to insight." },
  { title: "CREATE", body: "Today's learners, tomorrow's builders." },
];

export const READING_GUIDE = {
  survey: "Based on a small directional stakeholder study conducted during the development of SynLab. Findings are intended to guide product thinking rather than represent a population-wide survey.",
  dashboard: "SIMULATION MODE — demo values are simulated in-browser. Not connected to live laboratory equipment. The linked demo shows the dashboard concept.",
  pro: "Everything labelled PRO is a proposed future direction — vision, not current capability.",
};

export const COMPARISON = [
  { aspect: "Hands-on feel", trad: "Real equipment, familiar bench", virt: "On-screen simulation", remote: "Real equipment, through a screen", syn: "Real hands-on interaction" },
  { aspect: "Where it happens", trad: "Fixed lab rooms", virt: "Anywhere with a device", remote: "Anywhere with connectivity*", syn: "Where the learner is" },
  { aspect: "When it happens", trad: "Scheduled sessions", virt: "Whenever you like", remote: "Booked slots", syn: "Flexible, guided sessions" },
  { aspect: "Approach to safety", trad: "Supervised procedures", virt: "No physical materials", remote: "Managed at a distance", syn: "Safety-conscious, monitored design" },
  { aspect: "How you learn", trad: "In-person guidance", virt: "Built-in tutorials", remote: "Varies by platform", syn: "Structured, guided exploration" },
];
