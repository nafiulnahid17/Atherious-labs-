import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { getProject, projectDetails } from "../../data/projects";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return projectDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.name} — Atherious Labs`,
    description: project.intro,
    alternates: { canonical: `/projects/${project.slug}/` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const enquiry = `mailto:contact@atheriouslabs.com?subject=${encodeURIComponent(`${project.name} enquiry`)}`;
  return (
    <main className="project-detail">
      <header className="detail-header container">
        <Link className="brand" href="/" aria-label="Atherious Labs home">
          <span className="brand-mark"><img src="/assets/atherious-orbit-logo.png" alt="" /></span>
          <span>ATHERIOUS LABS</span>
        </Link>
        <Link className="text-link" href="/#projects"><ArrowLeft size={16} /> All Projects</Link>
      </header>
      <section className="detail-hero" aria-labelledby="project-title">
        <img className="detail-hero-art" src={`/assets/${project.image}`} alt="" fetchPriority="high" />
        <div className="container detail-hero-content">
          <div className="detail-eyebrow"><span className="kicker">{project.category}</span><span className={`detail-status ${project.visitUrl ? "is-live" : ""}`}>{project.status}</span></div>
          <h1 id="project-title">{project.name}</h1>
          <h2>{project.tagline}</h2>
          <p>{project.intro}</p>
          <div className="hero-actions">
            {project.visitUrl ? (
              <a className="gold-button" href={project.visitUrl} target="_blank" rel="noopener noreferrer">Visit {project.name}<ExternalLink size={17} /></a>
            ) : (
              <a className="gold-button" href={enquiry}>Enquire About {project.name}<ArrowRight size={17} /></a>
            )}
            <a className="outline-button" href="#project-overview">Explore the Details<ArrowRight size={16} /></a>
          </div>
        </div>
      </section>
      <section id="project-overview" className="section container detail-overview">
        <div>
          <span className="kicker">The project</span>
          <h2>Built with purpose.</h2>
          {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <aside className="detail-facts" aria-label="Project information">
          <dl>
            <div><dt>From</dt><dd>Atherious Labs</dd></div>
            <div><dt>Status</dt><dd>{project.status}</dd></div>
            <div><dt>Designed for</dt><dd>{project.audience}</dd></div>
          </dl>
        </aside>
      </section>
      <section className="section detail-features">
        <div className="container">
          <span className="kicker">Capabilities</span>
          <h2>{project.featuresTitle}</h2>
          <div className="detail-feature-grid">
            {project.features.map((feature, index) => (
              <article key={feature.title}><span className="feature-number">{String(index + 1).padStart(2, "0")}</span><h3>{feature.title}</h3><p>{feature.text}</p></article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <span className="kicker">The workflow</span>
        <h2>A connected experience.</h2>
        <ol className="detail-workflow">{project.workflow.map((step) => <li key={step}>{step}</li>)}</ol>
        {project.note && <p className="detail-note">{project.note}</p>}
      </section>
      <section className="container detail-access" aria-labelledby="access-title">
        <div><span className="kicker">Availability</span><h2 id="access-title">{project.visitUrl ? "Explore it for yourself." : "Stay connected to what’s next."}</h2><p>{project.availability}</p></div>
        {project.visitUrl ? (
          <a className="gold-button" href={project.visitUrl} target="_blank" rel="noopener noreferrer">Visit {project.name}<ExternalLink size={17} /></a>
        ) : (
          <a className="gold-button" href={enquiry}>Enquire About {project.name}<ArrowRight size={17} /></a>
        )}
      </section>
      <nav className="container detail-related" aria-label="Other projects">
        <span className="kicker">Explore more projects</span>
        <div>{projectDetails.filter((item) => item.slug !== project.slug).map((item) => <Link href={`/projects/${item.slug}/`} key={item.slug}>{item.name}<ArrowRight size={16} /></Link>)}</div>
      </nav>
      <footer className="container detail-footer"><Link href="/">Atherious Labs · Since 2025</Link><a href="mailto:contact@atheriouslabs.com">contact@atheriouslabs.com</a></footer>
    </main>
  );
}
