import { Cpu, ArrowUpRight } from "lucide-react";

const servers = [
  {
    title: "Java Cloud Engine",
    label: "Managed compute",
    image: "java-cloud-engine-3d.png",
    description: "A dedicated Java Cloud runtime for resilient product services and dependable processing capacity.",
    platform: "Java Cloud",
    detail: "JVM service runtime",
  },
  {
    title: "API Gateway & Services",
    label: "Connected delivery",
    image: "java-cloud-gateway-3d.png",
    description: "Authenticated Java services connect the web experience, product APIs and cloud compute through a secure gateway.",
    platform: "Java API gateway",
    detail: "Authenticated service routes",
  },
  {
    title: "Cloud Storage & Artifacts",
    label: "Durable data layer",
    image: "java-cloud-storage-3d.png",
    description: "A cloud-native object layer keeps product artifacts, manifests and exports durable, organised and ready to serve.",
    platform: "Object storage",
    detail: "Artifacts · manifests · exports",
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
          <div><span className="kicker">Behind the products</span><h2>Java Cloud Architecture</h2></div>
          <p>Java Cloud compute, secure service delivery and durable storage combine into one modern product foundation.</p>
        </div>
        <div className="server-grid">
          {servers.map(({ title, label, image, description, platform, detail }) => (
            <article className="server-card" key={title}>
              <img className="server-art" src={`/assets/${image}`} alt="" loading="lazy" />
              <div className="server-art-shade" />
              <div className="server-content">
                <span className="infra-label">{label}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="server-meta">
                  <span>{platform}</span>
                  <span>{detail}</span>
                </div>
              </div>
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
