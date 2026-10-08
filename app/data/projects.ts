export type Project = {
  slug: string;
  name: string;
  status: string;
  image: string;
  category: string;
  tagline: string;
  intro: string;
  overview: string[];
  audience: string;
  featuresTitle: string;
  features: { title: string; text: string }[];
  workflow: string[];
  availability: string;
  visitUrl?: string;
  note?: string;
};

export const projectDetails: Project[] = [
  {
    slug: "lexglobal-bd",
    name: "LexGlobal BD",
    status: "Live",
    image: "legal.webp",
    category: "Legal technology",
    tagline: "Your Legal Assistant At Your Fingertips.",
    intro: "An AI-powered legal ecosystem bringing legal information, research and practical tools closer to people in Bangladesh.",
    overview: [
      "LexGlobal BD brings legal assistance, law resources and tools for legal professionals into a connected platform. It is an Atherious Labs product designed for the public, law students and practitioners.",
      "The ecosystem combines LexAI assistance with dedicated spaces for legal drafting, case analysis, learning and professional work. Its aim is to make legal information easier to find and understand while supporting the people who work with it.",
    ],
    audience: "People seeking legal information, law students and legal professionals in Bangladesh.",
    featuresTitle: "Inside the ecosystem",
    features: [
      { title: "LexAI", text: "AI assistance for exploring legal questions and understanding legal information." },
      { title: "Legal drafting & case analysis", text: "Tools to support preparing legal documents and reviewing case information." },
      { title: "Law library", text: "A dedicated place to explore legal resources and support legal research." },
      { title: "Find a lawyer", text: "Discover legal professionals when a matter needs qualified legal advice." },
      { title: "Student Hub & Lawyers Workspace", text: "Spaces for legal learning and professional work, with meetings and reminders in the wider ecosystem." },
      { title: "Practical directories", text: "Emergency-directory and land-mutation resources alongside the core legal tools." },
    ],
    workflow: ["Visit the platform", "Choose a resource or tool", "Research, draft or explore", "Review with a qualified professional when needed"],
    availability: "The website is live. Visit LexGlobal BD to explore its current tools and access options.",
    visitUrl: "https://lexglobalbd.live/",
    note: "AI-generated information can contain errors. LexGlobal BD supports legal understanding and professional work; it does not replace a qualified lawyer or legal advice.",
  },
  {
    slug: "jerseyos",
    name: "JerseyOS",
    status: "In development",
    image: "production.webp",
    category: "Production intelligence",
    tagline: "From artwork to production, in one workspace.",
    intro: "A private production workspace from Atherious Labs for jersey artwork, vector reconstruction, mockups and production preparation.",
    overview: [
      "JerseyOS brings specialized production tools into one desktop-focused workspace. It is designed for internal company use rather than a public, open-access SaaS platform.",
      "The planned suite includes ten AI-powered tools and two emergency tools. ReVector AI is a tool inside JerseyOS. The wider workflow supports artwork analysis, editable vector work, production checks and export preparation.",
    ],
    audience: "Jersey manufacturers, production designers and internal artwork teams.",
    featuresTitle: "The planned 12-tool suite",
    features: [
      { title: "VectorRoom AI", text: "An editable vector workspace with AI commands: input, analyze, then work in an illustration room." },
      { title: "ReVector AI", text: "Analyze front/back jersey artwork, select the required parts, reconstruct true vectors and validate exports." },
      { title: "ConvertX AI", text: "Vectorization, validation and export across multiple production formats." },
      { title: "AutoPilot AI", text: "One-click artwork-to-vector automation for a focused production workflow." },
      { title: "PatternForge AI", text: "Create jersey patterns, textures and gradients." },
      { title: "FrontScan AI", text: "Reconstruct lettering, fonts and numbers from artwork." },
      { title: "BatchForge AI", text: "Prepare bulk production using names, numbers, sizes and quantities." },
      { title: "Showcase AI", text: "Create jersey mockups and previews." },
      { title: "PrintGuard AI", text: "Preflight dimensions, CMYK, margins, fonts and paths before production." },
      { title: "Assets Creator AI", text: "Generate and edit reusable graphics, logos, badges, motifs and vector assets." },
      { title: "RescueX", text: "An emergency tool focused on damaged-file recovery." },
      { title: "TraceDesk", text: "An emergency tracing workspace within the production suite." },
    ],
    workflow: ["Upload artwork", "Analyze and choose a tool", "Edit or reconstruct", "Validate and export"],
    availability: "JerseyOS is in development for private internal use. A public visit link is not available. Contact Atherious Labs for project information.",
    note: "The tool list describes the planned suite. Individual tool availability depends on the deployed workspace. Vector outputs must be validated before production.",
  },
  {
    slug: "sunshot-ai",
    name: "SunShot AI",
    status: "Upcoming",
    image: "sunshot.webp",
    category: "General-purpose AI",
    tagline: "Think. Research. Create.",
    intro: "An upcoming Bangladesh-built AI platform for exploring ideas, researching questions and creating with intelligent assistance.",
    overview: [
      "SunShot AI is an Atherious Labs project being developed as a general-purpose AI platform for individuals and businesses. The direction brings thinking, research and creation into a connected experience.",
      "The planned platform includes general AI assistance alongside legal intelligence. Features and access options will be announced as the product becomes available.",
    ],
    audience: "Individuals, researchers, creators and businesses looking for AI assistance.",
    featuresTitle: "Planned focus areas",
    features: [
      { title: "Think", text: "Explore questions, develop ideas and work through complex topics with AI assistance." },
      { title: "Research", text: "Support information discovery, comparison and synthesis for research tasks." },
      { title: "Create", text: "Help turn ideas into useful written and visual outputs." },
      { title: "Legal intelligence", text: "Bring legal-information support into the broader AI experience." },
    ],
    workflow: ["Bring an idea or question", "Explore with AI", "Develop the result", "Review before using or sharing"],
    availability: "SunShot AI is upcoming. A public launch link will be added here when available. Contact the lab for updates.",
    note: "These are planned focus areas, not a statement that all features are currently available. AI outputs require review.",
  },
  {
    slug: "lexwork",
    name: "LexWork",
    status: "Upcoming",
    image: "lexwork.webp",
    category: "Legal workspace",
    tagline: "Legal work, thoughtfully connected.",
    intro: "An upcoming intelligent legal workspace from Atherious Labs, focused on research, documents and everyday legal work.",
    overview: [
      "LexWork is being developed around a connected workspace for legal work. Its direction brings legal research, document organization and workflow into a considered experience.",
      "The product is upcoming. Detailed specifications, availability and access options will be announced as development progresses.",
    ],
    audience: "Legal professionals and teams looking for a more organized workspace for legal work.",
    featuresTitle: "Planned direction",
    features: [
      { title: "Research", text: "A focused space for organizing legal research and relevant material." },
      { title: "Documents", text: "A connected approach to the documents used in everyday legal work." },
      { title: "Workflow", text: "Bring work and supporting information together in a legal workspace." },
    ],
    workflow: ["Organize research", "Work with documents", "Connect the workflow"],
    availability: "LexWork is upcoming and has no public visit link yet. Enquire with Atherious Labs to learn more or request updates.",
    note: "The focus areas describe the planned product direction. Final features and launch timing have not been announced.",
  },
];

export function getProject(slug: string) {
  return projectDetails.find((project) => project.slug === slug);
}
