"use client";

import { ArrowRight, ArrowUpRight, Cpu, X } from "lucide-react";
import { useEffect, useState } from "react";

type Engine = {
  name: string;
  discipline: string;
  project: string;
  status: "Production profile" | "Internal R&D";
  image: string;
  summary: string;
  language: string;
  architecture: string;
  cores: string;
  capacity: string;
  output: string;
  build: string;
  repository?: string;
};

const engines: Engine[] = [
  {
    name: "LexGlobal Platform Core",
    discipline: "Legal platform foundation",
    project: "LexGlobal BD",
    status: "Production profile",
    image: "lexglobal-platform-core-3d.png",
    summary: "The account, entitlement and credit foundation behind the LexGlobal legal ecosystem.",
    language: "TypeScript 5.9 · Cloudflare Workers · Supabase/PostgreSQL",
    architecture: "One Worker · 8 logical modules · authenticated service boundaries",
    cores: "Identity · billing · credits · reminders · security",
    capacity: "Provisioned serverless runtime; plans support 20 / 300 / 1,200 credits per cycle",
    output: "Accounts, subscriptions, credit-led access and administrative workflows",
    build: "A modular TypeScript worker coordinates identity, plans, billing, renewal reminders and administrative controls against a PostgreSQL-backed data layer.",
    repository: "https://github.com/nafiulnahid17/LexGlobal-BD-Core-Engine",
  },
  {
    name: "LexGlobal Legal Intelligence Engine",
    discipline: "Conversational law AI",
    project: "LexGlobal BD · Lex AI",
    status: "Production profile",
    image: "lexglobal-legal-intelligence-3d.png",
    summary: "Retrieval-aware legal conversations, document workflows and assisted legal research.",
    language: "TypeScript 5.9 · Cloudflare Workers · R2 · Queues · pgvector",
    architecture: "8 modules · streamed conversations · event-driven document jobs",
    cores: "Chat · model routing · legal RAG · OCR · document generation",
    capacity: "Provider and deployment configuration define throughput; no public benchmark is published",
    output: "SSE chat, legal research context, drafts and DOCX/PDF-ready documents",
    build: "An orchestrated legal-AI service joins provider routing with Bangladesh legal retrieval, private R2 uploads, queued extraction and credit-aware usage tracking.",
    repository: "https://github.com/nafiulnahid17/Conversational-AI-Legal-Source-Engine",
  },
  {
    name: "JerseyOS Commerce & Operations Engine",
    discipline: "Custom production commerce",
    project: "JerseyOS",
    status: "Production profile",
    image: "jerseyos-production-3d.png",
    summary: "The operating layer for a custom-jersey catalogue, requests, team orders and administration.",
    language: "Node.js 22 · SQLite · server-side API",
    architecture: "Catalog · custom request · team order · admin modules",
    cores: "Products · team workflows · order intake · fulfillment administration",
    capacity: "Deployment-defined; data and processing scale with the selected application runtime",
    output: "Custom order records, catalogue data, team-order workflows and admin operations",
    build: "A server-side commerce system keeps bespoke production workflows together while separating catalogue, request and administrative responsibilities.",
    repository: "https://github.com/nafiulnahid17/My-Jersey-Ecosystem-",
  },
  {
    name: "JerseyOS Vector Studio Engine",
    discipline: "Production design workspace",
    project: "JerseyOS",
    status: "Production profile",
    image: "revector-trace-3d.png",
    summary: "A browser production workspace for panel extraction, editable graphics and print-ready exports.",
    language: "TypeScript 5.9 · Node.js 22 · React/Next.js · Cloudflare",
    architecture: "5-panel workspace · perspective mapping · editable layers",
    cores: "Vector trace · text · logos · panel extraction · export packaging",
    capacity: "PNG export limit: 65 million pixels or a 16,384 px edge",
    output: "SVG, PDF, PNG and ZIP production bundles",
    build: "The studio combines browser-based editing with perspective-aware image preparation, editable typography/logo tools and packaged production exports.",
    repository: "https://github.com/nafiulnahid17/myjerseyvectortool",
  },
  {
    name: "ReVector Trace Engine",
    discipline: "Deterministic visual reconstruction",
    project: "ReVector · Artboard AI",
    status: "Production profile",
    image: "revector-trace-3d.png",
    summary: "Turns source artwork into validated, editable vector geometry for repeatable production.",
    language: "Python 3.12 · FastAPI · OpenCV · VTracer",
    architecture: "Deterministic raster-to-vector processing pipeline",
    cores: "Image analysis · tracing · geometry validation · render checks",
    capacity: "Processing capacity is defined by provisioned worker resources; no public throughput benchmark",
    output: "Editable SVG paths and validated geometry reports",
    build: "A FastAPI service orchestrates image analysis, contour/vector tracing and output validation to keep reconstruction results inspectable and editable.",
    repository: "https://github.com/nafiulnahid17/RevectorAI-Tool",
  },
  {
    name: "Artboard Production Intelligence Engine",
    discipline: "Print artwork preparation",
    project: "Artboard AI · JerseyOS",
    status: "Production profile",
    image: "artboard-production-3d.png",
    summary: "Prepares artwork for production through analysis, OCR, vectorisation and print-file validation.",
    language: "Python 3.11 · FastAPI · OpenCV · VTracer",
    architecture: "OCR · vector tracing · print preparation · export validation",
    cores: "Artwork analysis · font/OCR support · tracing · proof generation",
    capacity: "Current source profile: 1 worker with up to 4 outstanding jobs",
    output: "SVG, EPS, previews and production-report bundles",
    build: "A headless service processes artworks through measured cleanup, vector geometry and export checks before preparing a production handoff.",
    repository: "https://github.com/nafiulnahid17/artboardai-engine",
  },
  {
    name: "Frame Forge Generative Media Engine",
    discipline: "Campaign media automation",
    project: "Frame Forge",
    status: "Production profile",
    image: "frame-forge-3d.png",
    summary: "Creates branded mockups and optional short-form campaign-video routes from a controlled media pipeline.",
    language: "Python 3.11 · FastAPI · OpenRouter · FFmpeg",
    architecture: "Analysis → image generation → compositing → asynchronous video",
    cores: "Template routing · local brand compositing · render orchestration",
    capacity: "Configured video routes support 10–30 second advertisements",
    output: "Brand-controlled mockup images and MP4 campaign media",
    build: "A private FastAPI orchestrator applies templates and locally controlled branding while routing generated media through image and asynchronous video stages.",
    repository: "https://github.com/nafiulnahid17/Frameforge_myjerseyengine",
  },
  {
    name: "AutoFly Workflow Engine",
    discipline: "One-click production orchestration",
    project: "JerseyOS · Artboard AI",
    status: "Production profile",
    image: "autofly-workflow-3d.png",
    summary: "A concise service layer that validates a brief and delegates production work to specialised engines.",
    language: "Python 3.11 · FastAPI · HTTPX",
    architecture: "Validated brief → Artboard AI delegation → job polling → bundle proxy",
    cores: "Brief validation · front/back routing · quality/cost profiles · delivery",
    capacity: "One validated front-and-back set per job; external engines set execution throughput",
    output: "Job status, verified handoffs and proxied production bundles",
    build: "The engine focuses on deterministic routing and clear handoff boundaries instead of duplicating the specialist artwork-processing work.",
    repository: "https://github.com/nafiulnahid17/autoflyengine_myjersey",
  },
  {
    name: "AssetsX Visual Intelligence Engine",
    discipline: "Multi-format asset processing",
    project: "JerseyOS · Creative tooling",
    status: "Production profile",
    image: "assetsx-intelligence-3d.png",
    summary: "Processes visual source files into cleaned, validated and production-ready assets.",
    language: "Python 3.11 · FastAPI · OpenCV · VTracer",
    architecture: "Ingest → analyse → edit → vectorise → validate",
    cores: "Multi-format ingest · OCR · vectorisation · validation · handoff",
    capacity: "Current source profile: single-replica local executor; external queue enables production scaling",
    output: "PNG, SVG, EPS, PDF, ZIP and validation reports",
    build: "A staged FastAPI pipeline accepts image and document inputs, performs structured visual processing, then packages validated production outputs.",
    repository: "https://github.com/nafiulnahid17/assetxengine",
  },
  {
    name: "Aether AI Zone Intelligence Layer",
    discipline: "Research & product intelligence",
    project: "Atherious Labs AI Zone",
    status: "Internal R&D",
    image: "lexglobal-legal-intelligence-3d.png",
    summary: "An internal research profile for cross-product AI intelligence and assisted decision workflows.",
    language: "Internal implementation profile",
    architecture: "Modular intelligence layer; public source specification is not published",
    cores: "Research orchestration · intelligence workflows · product experimentation",
    capacity: "Deployment-defined; no public benchmark is published",
    output: "Internal AI research and product intelligence workflows",
    build: "This profile is recorded as internal R&D. Detailed runtime and capacity information is intentionally not represented as public fact until a source specification is released.",
  },
  {
    name: "SSH AI Secure Operations Engine",
    discipline: "Secure AI operations",
    project: "Atherious Cloud",
    status: "Internal R&D",
    image: "lexglobal-platform-core-3d.png",
    summary: "An internal secure-operations profile for managed service access and AI-assisted cloud workflows.",
    language: "Internal implementation profile",
    architecture: "Secure service boundaries; public source specification is not published",
    cores: "Access controls · service telemetry · operational intelligence",
    capacity: "Deployment-defined; no public benchmark is published",
    output: "Internal operational insight and secure service workflows",
    build: "This profile remains internal R&D. Only its product role is presented here; unverified architecture and performance figures are deliberately omitted.",
  },
  {
    name: "SunShot AI Experience Engine",
    discipline: "Consumer AI product layer",
    project: "SunShot AI",
    status: "Internal R&D",
    image: "frame-forge-3d.png",
    summary: "An internal product-engine profile for future AI experiences within the Atherious portfolio.",
    language: "Internal implementation profile",
    architecture: "Product-layer research; public source specification is not published",
    cores: "Experience design · AI interaction · product experimentation",
    capacity: "Deployment-defined; no public benchmark is published",
    output: "Future consumer-facing AI product workflows",
    build: "The public registry lists this as an internal R&D profile while implementation details remain unpublished.",
  },
];

export default function EnginesShowcase() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="engines" className="engines-showcase" aria-labelledby="engines-title">
      <div className="engines-showcase-heading">
        <div>
          <span className="kicker">Atherious Labs engineering registry</span>
          <h2 id="engines-title">Engines Built by Us</h2>
        </div>
        <div className="engines-heading-copy">
          <p>Specialised engines that power legal intelligence, cloud operations, production tooling and generative media across the Atherious portfolio.</p>
          <button className="engines-show-all" type="button" onClick={() => setIsOpen(true)}>
            Show all engines <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="engines-carousel" aria-label="Auto-sliding engines built by Atherious Labs">
        <div className="engines-carousel-track">
          {[...engines, ...engines].map((engine, index) => {
            const duplicate = index >= engines.length;
            return (
              <article className="engine-slide-card" key={`${engine.name}-${index}`} aria-hidden={duplicate || undefined}>
                <img src={`/assets/engines/${engine.image}`} alt="" loading="lazy" />
                <div className="engine-slide-shade" />
                <div className="engine-slide-content">
                  <div className="engine-slide-meta"><span>{engine.discipline}</span><span className={engine.status === "Internal R&D" ? "engine-status research" : "engine-status"}>{engine.status === "Internal R&D" ? "R&D" : "Registry"}</span></div>
                  <h3>{engine.name}</h3>
                  <p>{engine.summary}</p>
                  <div className="engine-slide-tech"><span>{engine.language.split(" · ").slice(0, 2).join(" · ")}</span><span>{engine.architecture.split(" · ").slice(0, 2).join(" · ")}</span></div>
                  <footer><span>Founded &amp; developed by MD. Nahid Alam</span><span>© Atherious Labs</span></footer>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <p className="engines-carousel-note"><Cpu size={15} aria-hidden="true" /> Auto-sliding registry · hover or focus to pause · select Show all for technical profiles</p>

      {isOpen && (
        <div className="engines-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}>
          <section className="engines-modal" role="dialog" aria-modal="true" aria-labelledby="engines-modal-title">
            <header className="engines-modal-header">
              <div><span className="kicker">Technical registry</span><h2 id="engines-modal-title">All Atherious Engines</h2><p>Architecture, stack, output and product use. Profiles marked Internal R&amp;D intentionally exclude unpublished benchmarks.</p></div>
              <button className="engines-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close engine registry"><X size={21} /></button>
            </header>
            <div className="engines-modal-grid">
              {engines.map((engine, index) => (
                <article className="engine-detail-card" key={engine.name}>
                  <img src={`/assets/engines/${engine.image}`} alt="" loading="lazy" />
                  <div className="engine-detail-content">
                    <div className="engine-detail-index"><span>{String(index + 1).padStart(2, "0")}</span><span className={engine.status === "Internal R&D" ? "engine-status research" : "engine-status"}>{engine.status}</span></div>
                    <p className="engine-detail-discipline">{engine.discipline}</p>
                    <h3>{engine.name}</h3>
                    <p className="engine-detail-summary">{engine.summary}</p>
                    <dl>
                      <div><dt>Used in</dt><dd>{engine.project}</dd></div>
                      <div><dt>Built with</dt><dd>{engine.language}</dd></div>
                      <div><dt>Architecture</dt><dd>{engine.architecture}</dd></div>
                      <div><dt>Core responsibilities</dt><dd>{engine.cores}</dd></div>
                      <div><dt>Capacity profile</dt><dd>{engine.capacity}</dd></div>
                      <div><dt>Output</dt><dd>{engine.output}</dd></div>
                    </dl>
                    <p className="engine-detail-build">{engine.build}</p>
                    <footer><span>Founded &amp; developed by MD. Nahid Alam</span>{engine.repository ? <a href={engine.repository} target="_blank" rel="noreferrer">View source profile <ArrowUpRight size={14} /></a> : <span>© Atherious Labs</span>}</footer>
                  </div>
                </article>
              ))}
            </div>
            <p className="engines-modal-copyright">© Atherious Labs. All engine registry profiles are presented for product overview.</p>
          </section>
        </div>
      )}
    </section>
  );
}
