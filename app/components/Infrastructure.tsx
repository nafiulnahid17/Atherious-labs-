import { Cloud, Cpu, HardDrive, Server, ArrowUpRight } from "lucide-react";

const servers = [
  {
    title: "Private Engine Server",
    label: "Managed compute",
    icon: Server,
    description: "Our production processing backend, packaged independently from the website and connected through an authenticated gateway.",
    specs: [
      ["Platform", "Railway · Docker"],
      ["Runtime", "Python 3.12 · FastAPI"],
      ["Deployment profile", "One API process · One replica"],
      ["Persistence", "Mounted project & artifact volume"],
      ["Operations", "Bounded job queue · Readiness checks"],
    ],
  },
  {
    title: "Application & Gateway",
    label: "Edge application",
    icon: Cloud,
    description: "The website and tool gateway run separately from engine compute, keeping backend credentials on the server side.",
    specs: [
      ["Platform", "Cloudflare Workers"],
      ["Website", "Next.js · OpenNext"],
      ["Connection", "HTTPS gateway to engine API"],
      ["Access", "Session identity · Project ownership"],
      ["Assets", "Dedicated static asset binding"],
    ],
  },
  {
    title: "Storage Layer",
    label: "Objects & artifacts",
    icon: HardDrive,
    description: "Project manifests and working artifacts use persistent storage. An R2 adapter provides a separate object-storage integration path.",
    specs: [
      ["Object platform", "Cloudflare R2 · S3-compatible API"],
      ["Engine workspace", "Persistent local project storage"],
      ["Artifacts", "Sources · Vectors · Previews · Exports"],
      ["Integrity", "Stage signatures · SHA-256 validation"],
      ["R2 integration", "Adapter available · Explicit integration"],
    ],
  },
];

const engines = [
  { name: "Core Engine", role: "Workflow orchestration", product: "ReVector · Artboard AI", text: "Coordinates projects, jobs and reusable processing stages, with per-part invalidation when inputs change.", stack: "Python 3.12 · FastAPI · Stage manifests", output: "Project state & processing jobs" },
  { name: "AI Routing Engine", role: "Operation-specific AI", product: "ReVector · Artboard AI", text: "Routes advisory analysis and image operations through configured providers, with versioned model profiles and controlled fallback.", stack: "OpenRouter · Provider contracts · Fallback policies", output: "Structured analysis & AI guidance" },
  { name: "Geometry Engine", role: "Perspective & dimensions", product: "ReVector · Artboard AI", text: "Validates surface corners and rectifies perspective. Artboard AI additionally enforces physical artboard dimensions.", stack: "OpenCV · Homography · Quadrilateral validation", output: "Corrected surface & calibrated geometry" },
  { name: "Segmentation Engine", role: "Artwork & part boundaries", product: "ReVector", text: "Uses foreground masks and reviewed boundaries to separate components without inventing unseen garment parts.", stack: "OpenCV · Masks · Manual polygons", output: "Selected components & part regions" },
  { name: "Reconstruction Engine", role: "Clean production references", product: "ReVector · Artboard AI", text: "Prepares component references before tracing. Artboard AI uses bounded lighting cleanup with edge protection and measured color-drift guards.", stack: "OpenCV · Color analysis · Edge-preserving cleanup", output: "Clean reference for vector tracing" },
  { name: "Vectorization Engine", role: "Editable vector geometry", product: "ReVector · Artboard AI", text: "Traces artwork into real paths, preserves paint order and applies bounded path cleanup for editable vector output.", stack: "VTracer · Potrace · Contour tracing", output: "Grouped SVG paths & vector objects" },
  { name: "Validation Engine", role: "True-vector integrity", product: "ReVector · Artboard AI", text: "Checks SVG structure, geometry and raster references, renders previews and ties export permission to the validated artifact.", stack: "XML checks · resvg · SHA-256 signatures", output: "Integrity & rendering reports" },
  { name: "Export Engine", role: "Production file handoff", product: "ReVector · Artboard AI", text: "Converts validated vectors into supported formats. Artboard AI adds physical-page and CMYK checks to its export workflow.", stack: "Inkscape · PDF/EPS · Ghostscript/Poppler checks", output: "SVG · PDF · EPS · PNG proofs" },
];

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="infrastructure section">
      <div className="container">
        <div className="infra-heading">
          <div><span className="kicker">Behind the products</span><h2>Own Server Infrastructure</h2></div>
          <p>Our application, processing and storage layers form a connected technical foundation, operated on managed cloud infrastructure.</p>
        </div>
        <div className="server-grid">
          {servers.map(({ title, label, icon: Icon, description, specs }) => (
            <article className="server-card" key={title}>
              <div className="server-visual" aria-hidden="true"><Icon size={38} /><div className="rack-lines"><i /><i /><i /></div></div>
              <span className="infra-label">{label}</span><h3>{title}</h3><p>{description}</p>
              <dl>{specs.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl>
            </article>
          ))}
        </div>
        <div id="engines" className="infra-heading engines-heading">
          <div><span className="kicker">The processing foundation</span><h2>Eight Core Engine Components</h2></div>
          <p>Reusable components inside our project and tool backends. Each has a defined responsibility, from orchestration to validated exports.</p>
        </div>
        <div className="engine-grid">
          {engines.map((engine, index) => (
            <article className="engine-card" key={engine.name}>
              <div className="engine-top"><span>{String(index + 1).padStart(2, "0")}</span><Cpu size={23} /></div>
              <span className="infra-label">{engine.role}</span><h3>{engine.name}</h3><p>{engine.text}</p>
              <dl><div><dt>Used in</dt><dd>{engine.product}</dd></div><div><dt>Technical stack</dt><dd>{engine.stack}</dd></div><div><dt>Output</dt><dd>{engine.output}</dd></div></dl>
            </article>
          ))}
        </div>
        <a className="text-link infra-contact" href="#contact">Discuss Your Project <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}
