"use client";

import {
  ArrowRight,
  Atom,
  BriefcaseBusiness,
  CircuitBoard,
  ExternalLink,
  Github,
  Globe2,
  Linkedin,
  Mail,
  Menu,
  Network,
  Search,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import Infrastructure from "./components/Infrastructure";

const products = [
  {
    name: "LexGlobal BD",
    tag: "Live",
    className: "legal",
    image: "lexglobal-card-3d.png",
    subtitle: "AI-Powered Legal Ecosystem",
    description:
      "Making legal information, services and justice more accessible through AI.",
    href: "/projects/lexglobal-bd/",
  },
];
const lexglobalPress = [
  {
    outlet: "NTV",
    headline: "প্রযুক্তির মাধ্যমে সহজে আইনসেবা দিতে লেক্সগ্লোবাল বিডির যাত্রা",
    logo: "press/ntv.png",
    href: "https://www.ntvbd.com/bangladesh/news-1804477",
  },
  {
    outlet: "The Daily Campus",
    headline: "কৃত্রিম বুদ্ধিমত্তার প্রয়োগে আইনি সেবা সহজীকরণের তরুনদের উদ্যোগ",
    logo: "press/the-daily-campus.svg",
    href: "https://thedailycampus.com/innovation-research/274199",
  },
  {
    outlet: "Khoborer Kagoj",
    headline: "প্রযুক্তির ছোঁয়ায় আইনিসেবা এবার হাতের মুঠোয়",
    logo: "press/khoborer-kagoj.png",
    href: "https://www.khaborerkagoj.com/technologies-of-today/915049",
  },
  {
    outlet: "Somoyer Konthosor",
    headline: "দেশে প্রথমবার আইন বিষয়ক পূর্নাঙ্গ ডিজিটাল প্ল্যাটফর্ম নির্মাণ",
    logo: "press/somoyer-konthosor.webp",
    href: "https://somoyerkonthosor.com/post/2026/04/04/69d0bd1ac9f69",
  },
  {
    outlet: "Bijoy TV",
    headline: "ডিজিটাল ঝামেলামুক্ত আইনি সেবা নিয়ে ১৫ আগস্ট আসছে লেক্সগ্লোবাল বিডি",
    logo: "press/bijoy-tv.gif",
    href: "https://bijoy.tv/national/%E0%A6%A1%E0%A6%BF%E0%A6%9C%E0%A6%BF%E0%A6%9F%E0%A6%BE%E0%A6%B2-%E0%A6%9D%E0%A6%BE%E0%A6%AE%E0%A7%87%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A7%81%E0%A6%95%E0%A7%8D%E0%A6%A4-%E0%A6%86%E0%A6%87%E0%A6%A8%E0%A6%BF",
  },
];
const founderFeature = {
  outlet: "NTV Online",
  published: "16 September 2026",
  headline: "প্রযুক্তির মাধ্যমে সহজে আইনসেবা দিতে লেক্সগ্লোবাল বিডির যাত্রা",
  href: "https://www.ntvbd.com/bangladesh/news-1804477",
};
const allProjects = [
  {
    name: "Lex AI",
    subtitle: "The Law Voice Assistant",
    tag: "Upcoming",
    statusClass: "is-upcoming",
    image: "lex-ai-card-3d.png",
    href: "#contact",
  },
  {
    name: "Jersey OS",
    subtitle: "Intelligent Production System",
    tag: "Upcoming",
    statusClass: "is-upcoming",
    image: "jersey-os-card-3d.png",
    href: "/projects/jerseyos/",
  },
  {
    name: "SunShot AI",
    subtitle: "General-Purpose AI Platform",
    tag: "Launching Dec 05",
    statusClass: "is-launching",
    image: "sunshot-ai-card-3d.png",
    href: "/projects/sunshot-ai/",
  },
  {
    name: "LexWork",
    subtitle: "Intelligent Legal Workspace",
    tag: "Upcoming",
    statusClass: "is-upcoming",
    image: "lexwork-card-3d.png",
    href: "/projects/lexwork/",
  },
  {
    name: "CyberX",
    subtitle: "Cybersecurity Platform",
    tag: "Upcoming",
    statusClass: "is-upcoming",
    image: "cyberx-card-3d.png",
    href: "#contact",
  },
  {
    name: "Frame Forge",
    subtitle: "Video Generator",
    tag: "Live",
    statusClass: "is-live",
    image: "frame-forge-card-3d.png",
    href: "#contact",
  },
];
const capabilities = [
  {
    icon: Atom,
    title: "AI Systems",
    text: "Research and real-world AI products",
  },
  {
    icon: BriefcaseBusiness,
    title: "Legal Technology",
    text: "Accessible, intelligent legal solutions",
  },
  {
    icon: CircuitBoard,
    title: "Production Intelligence",
    text: "Smarter manufacturing and operations",
  },
  {
    icon: Network,
    title: "Automation",
    text: "Tools for a more efficient future",
  },
  { icon: Search, title: "Research", text: "Exploring what’s next" },
  {
    icon: Globe2,
    title: "Global Impact",
    text: "From Bangladesh to the world",
  },
];
function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Atherious Labs home">
      <span className="brand-mark"><img src="/assets/atherious-orbit-logo.png" alt="" /></span>
      <span>ATHERIOUS LABS</span>
    </a>
  );
}
function Socials() {
  return (
    <div className="socials">
      <a
        href="https://linkedin.com/in/nafiul-al-nahid"
        aria-label="Nahid Alom on LinkedIn"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin size={17} />
      </a>
      <a
        href="https://github.com/nafiulnahid17"
        aria-label="GitHub"
        target="_blank"
        rel="noreferrer"
      >
        <Github size={17} />
      </a>
      <a
        href="mailto:contact@atheriouslabs.com"
        aria-label="Email Atherious Labs"
      >
        <Mail size={17} />
      </a>
    </div>
  );
}
function SectionHead({
  kicker,
  title,
  description,
  link,
  href,
}: {
  kicker: string;
  title: string;
  description: string;
  link?: string;
  href?: string;
}) {
  return (
    <div className="section-head">
      <div>
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
      {link && (
        <a className="text-link" href={href}>
          {link}
          <ArrowRight size={15} />
        </a>
      )}
    </div>
  );
}
function PendingProfiles({ team = false }: { team?: boolean }) {
  const roles = team
    ? ["Engineering", "Product & Design", "Research", "Operations"]
    : [
        "AI & Research",
        "Technology & Innovation",
        "Legal & Policy",
        "Business & Strategy",
      ];
  return (
    <div className="people-grid">
      {roles.map((role, index) => {
        const isRaihan = !team && index === 0;
        return (
          <article className="person-card" key={isRaihan ? "raihan-naim" : role}>
            <img
              className="profile-art"
              src={isRaihan ? "/assets/raihan-naim.jpg" : `/assets/${team ? "team" : "board"}-${index + 1}.webp`}
              alt={isRaihan ? "Raihan Naim, Board Member and Deputy Director" : ""}
              loading="lazy"
            />
            <div className="person-copy">
              <h3>{isRaihan ? "Raihan Naim" : "To be announced"}</h3>
              <p>{isRaihan ? "Board Member" : team ? "Team profile" : "Board & advisory profile"}</p>
              <small>{isRaihan ? "Deputy Director" : role}</small>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [articleOpen, setArticleOpen] = useState(false);
  const [contactNote, setContactNote] = useState("");
  const [subscribeNote, setSubscribeNote] = useState("");
  function contact(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:contact@atheriouslabs.com?subject=${encodeURIComponent(String(data.get("subject")))}&body=${encodeURIComponent(body)}`;
    setContactNote(
      "Your email app will open with your message. Send it there to contact us.",
    );
  }
  function subscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    window.location.href = `mailto:contact@atheriouslabs.com?subject=Atherious%20Labs%20updates&body=${encodeURIComponent(`Please send product updates to ${data.get("email")}.`)}`;
    setSubscribeNote(
      "Send the email request from your email app to receive updates.",
    );
  }
  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="section-background hero-art"
          src="/assets/hero.webp"
          alt=""
          fetchPriority="high"
        />
        <header className="header container">
          <Brand />
          <button
            className="menu-button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav
            id="main-nav"
            className={menuOpen ? "navigation open" : "navigation"}
          >
            {[
              ["Projects", "projects"],
              ["Cloud", "infrastructure"],
              ["Team", "team"],
              ["About", "about"],
              ["Consult", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <a className="outline-button header-cta" href="#contact">
            Contact Us
            <ArrowRight size={14} />
          </a>
        </header>
        <div className="container hero-content">
          <div className="hero-eyebrow"><span className="kicker">Atherious Labs</span><span className="since-badge">Since 2025</span></div>
          <h1 id="hero-title">
            Engineering
            <br />
            Intelligent Systems
            <br />
            <span>for the Future.</span>
          </h1>
          <p>
            A Bangladesh-born AI and product research lab building specialized
            intelligent software and digital infrastructure for a smarter, more
            connected world.
          </p>
          <div className="hero-actions">
            <a className="gold-button" href="#projects">
              Explore Our Projects
              <ArrowRight size={17} />
            </a>
            <a className="outline-button" href="#contact">
              Contact Atherious Labs
            </a>
          </div>
        </div>
        <p className="hero-values">
          Ideas
          <br />
          Intelligence
          <br />
          Infrastructure
          <br />A brighter tomorrow
        </p>
      </section>
      <section id="projects" className="projects section">
        <div className="container">
          <SectionHead
            kicker="Our work"
            title="Flagship Projects"
            description="LexGlobal BD is our flagship AI-powered legal ecosystem, making legal information, services and justice more accessible."
            link="Explore LexGlobal BD"
            href="/projects/lexglobal-bd/"
          />
          <div className="product-grid flagship-grid" id="project-cards">
            <div className="flagship-left-rail">
              {products.map((product) => (
                <a
                  className={`product-card ${product.className}`}
                  key={product.name}
                  href={product.href}
                  aria-label={`View ${product.name} project details`}
                >
                  <img src={`/assets/${product.image}`} alt="" loading="lazy" />
                  <div className="product-shade" />
                  <span className="status">{product.tag}</span>
                  <div className="product-copy">
                    <h3>{product.name}</h3>
                    <h4>{product.subtitle}</h4>
                    <p>{product.description}</p>
                    <span className="text-link">
                      View Project Details
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </a>
              ))}
              <article className="founder-spotlight" aria-labelledby="founder-spotlight-title">
                <div className="founder-spotlight-main">
                  <img src="/assets/nahid-alom.png" alt="Md. Nahid Alam" />
                  <div>
                    <span className="founder-mini-kicker">Founder &amp; developer</span>
                    <h3 id="founder-spotlight-title">Md. Nahid Alam</h3>
                    <p>Founded and developed LexGlobal BD to make trusted legal guidance easier to access.</p>
                  </div>
                </div>
                <div className="founder-mini-details" aria-label="Founder details">
                  <span>LexGlobal BD founder</span>
                  <span>Atherious Labs</span>
                </div>
                <button className="founder-article-trigger" type="button" onClick={() => setArticleOpen(true)}>
                  Read full article
                  <ArrowRight size={15} />
                </button>
              </article>
            </div>
            <aside className="flagship-spotlight" aria-labelledby="lexglobal-spotlight-title">
              <div className="spotlight-intro">
                <span className="spotlight-eyebrow">The LexGlobal BD platform</span>
                <h3 id="lexglobal-spotlight-title">Legal clarity, closer to everyone.</h3>
                <p>
                  A practical AI-powered legal ecosystem built to make legal information,
                  research and professional support easier to reach in Bangladesh.
                </p>
                <div className="spotlight-signals" aria-label="LexGlobal BD features">
                  <span>AI legal assistance</span>
                  <span>Legal discovery</span>
                  <span>Professional support</span>
                </div>
                <a
                  className="gold-button spotlight-cta"
                  href="https://lexglobalbd.live/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit LexGlobal BD
                  <ExternalLink size={16} />
                </a>
              </div>
              <div className="press-coverage">
                <div className="press-heading">
                  <span>Featured in</span>
                  <p>Tap a publication to read its original coverage.</p>
                </div>
                <div className="press-grid">
                  {lexglobalPress.map((feature) => (
                    <a
                      className="press-card"
                      href={feature.href}
                      key={feature.outlet}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Read ${feature.outlet}'s coverage of LexGlobal BD`}
                    >
                      <span className="press-logo">
                        <img src={`/assets/${feature.logo}`} alt={`${feature.outlet} logo`} loading="lazy" />
                      </span>
                      <span className="press-copy">
                        <strong>{feature.outlet}</strong>
                        <small>{feature.headline}</small>
                      </span>
                      <ExternalLink className="press-external" size={14} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section id="all-projects" className="all-projects section">
        <div className="container">
          <SectionHead
            kicker="The portfolio"
            title="All Projects"
            description="Explore the upcoming and live products shaping the Atherious Labs ecosystem."
            link="Show All"
            href="#all-projects-list"
          />
          <div className="all-projects-viewport" id="all-projects-list">
            <div className="all-projects-track">
              {[...allProjects, ...allProjects].map((project, index) => {
                const isDuplicate = index >= allProjects.length;

                return (
                  <a
                    className={`all-project-card ${project.statusClass}`}
                    key={`${project.name}-${index}`}
                    href={project.href}
                    aria-label={`View ${project.name} project details`}
                    aria-hidden={isDuplicate || undefined}
                    tabIndex={isDuplicate ? -1 : undefined}
                  >
                    <img src={`/assets/${project.image}`} alt="" loading="lazy" />
                    <div className="all-project-shade" />
                    <span className="status">{project.tag}</span>
                    <div className="all-project-copy">
                      <h3>{project.name}</h3>
                      <p>{project.subtitle}</p>
                      <span className="text-link">
                        View Project
                        <ArrowRight size={15} />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Infrastructure />
      <section id="about" className="about section">
        <img
          className="section-background"
          src="/assets/moon.webp"
          alt=""
          loading="lazy"
        />
        <div className="container about-grid">
          <div>
            <span className="kicker">About Atherious Labs</span>
            <h2>
              Building Intelligent
              <br />
              Products for a Better
              <br />
              Tomorrow.
            </h2>
            <p>
              Atherious Labs is a Bangladesh-born AI and product research lab
              focused on creating specialized intelligent software, digital
              infrastructure and scalable systems for global impact.
            </p>
            <a className="outline-button" href="#founder">
              Learn More About Us
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon size={28} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="founder" className="founder section">
        <div className="container founder-grid">
          <div>
            <span className="kicker">Founder</span>
            <h2>Nahid Alom</h2>
            <h4>
              Founder & Director <span>— Atherious Labs</span>
            </h4>
            <p>
              Nahid Alom is the founder of Atherious Labs, a Bangladesh-born AI
              and product research lab. He leads the vision to build intelligent
              systems that solve real-world problems and create global impact
              through technology.
            </p>
            <Socials />
            <a className="text-link founder-profile" href="https://www.linkedin.com/in/nafiul-al-nahid" target="_blank" rel="noreferrer">Connect with Nahid on LinkedIn <ArrowRight size={15} /></a>
          </div>
          <div className="founder-art">
            <img
              src="/assets/nahid-alom.png"
              alt="Nahid Alom, founder of Atherious Labs"
              loading="lazy"
            />
            <div className="signature">
              Nahid Alom<span>Founder & Director</span>
            </div>
          </div>
        </div>
      </section>
      <section id="board" className="board section">
        <div className="container">
          <SectionHead
            kicker="Board & Advisory Jury"
            title="Guided by Experience. Driven by Impact."
            description="Our board and advisory profiles will be published as appointments are confirmed."
            link="View All Members"
            href="#board-profiles"
          />
          <p className="profile-note">
            Board member profile · Additional appointments to be announced
          </p>
          <div id="board-profiles">
            <PendingProfiles />
          </div>
        </div>
      </section>
      <section id="team" className="team section">
        <div className="container">
          <SectionHead
            kicker="Our people"
            title="The People Building Atherious."
            description="Engineers, researchers, designers and operators working together to turn ambitious ideas into real-world products. Team profiles will be announced."
            link="View All Team Members"
            href="#team-profiles"
          />
          <p className="profile-note">
            Illustrative portraits · Profiles to be announced
          </p>
          <div id="team-profiles">
            <PendingProfiles team />
          </div>
        </div>
      </section>
      <section id="contact" className="contact section">
        <div className="container contact-grid">
          <div>
            <span className="kicker">Contact Atherious Labs</span>
            <h2>
              Have an idea
              <br />
              worth building?
            </h2>
            <p>
              Let’s build it together. Reach out for partnerships, project
              inquiries, research collaborations or any other opportunities.
            </p>
            <a className="email-card" href="mailto:contact@atheriouslabs.com">
              <Mail size={34} />
              <span>
                <strong>contact@atheriouslabs.com</strong>
                <small>Our official email for all inquiries</small>
              </span>
            </a>
          </div>
          <form className="contact-form" onSubmit={contact}>
            <div className="input-row">
              <input
                aria-label="Your name"
                name="name"
                placeholder="Your Name"
                required
                maxLength={100}
              />
              <input
                aria-label="Your email"
                name="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <input
              aria-label="Subject"
              name="subject"
              placeholder="Subject"
              required
              maxLength={200}
            />
            <textarea
              aria-label="Your message"
              name="message"
              placeholder="Your Message"
              required
              rows={5}
            />
            <button className="gold-button" type="submit">
              Send Message
              <ArrowRight size={17} />
            </button>
            <p className="form-note" aria-live="polite">
              {contactNote || "Opens your email app to send your message."}
            </p>
          </form>
          <aside className="contact-aside">
            <Globe2 size={40} />
            <h3>
              Let’s Create
              <br />A Smarter Tomorrow.
            </h3>
            <p>
              From Bangladesh to the world — we’re always open to meaningful
              conversations.
            </p>
            <Socials />
          </aside>
        </div>
      </section>
      <footer>
        <div className="container footer-grid">
          <div>
            <Brand />
            <p>
              Ideas. Intelligence. Infrastructure.
              <br />A Brighter Tomorrow.
            </p>
          </div>
          <div>
            <h4>Projects</h4>
            <a href="/projects/lexglobal-bd/">LexGlobal BD</a>
            <a href="/projects/jerseyos/">JerseyOS</a>
            <a href="/projects/sunshot-ai/">SunShot AI</a>
            <a href="/projects/lexwork/">LexWork</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#infrastructure">Our Servers</a>
            <a href="#engines">Core Engines</a>
            <a href="#founder">Founder</a>
            <a href="#board">Board & Advisory</a>
            <a href="#team">Our People</a>
          </div>
          <div>
            <h4>Resources</h4>
            <a href="#contact">Contact</a>
            <a href="mailto:contact@atheriouslabs.com?subject=Partnership%20inquiry">
              Partnerships
            </a>
            <a href="mailto:contact@atheriouslabs.com?subject=Support%20inquiry">
              Support
            </a>
          </div>
          <div>
            <h4>Subscribe for updates</h4>
            <form className="subscribe" onSubmit={subscribe}>
              <input
                aria-label="Email for product updates"
                name="email"
                type="email"
                placeholder="Your email"
                required
              />
              <button aria-label="Request product updates">
                <ArrowRight size={18} />
              </button>
            </form>
            <p className="form-note" aria-live="polite">
              {subscribeNote}
            </p>
          </div>
        </div>
        <div className="container copyright">
          <span>
            © {new Date().getFullYear()} Atherious Labs. All rights reserved.
          </span>
          <span>Built from Bangladesh for a brighter tomorrow.</span>
        </div>
      </footer>
      {articleOpen && (
        <div
          className="article-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setArticleOpen(false);
          }}
        >
          <article className="article-modal" role="dialog" aria-modal="true" aria-labelledby="article-modal-title">
            <button className="article-modal-close" type="button" onClick={() => setArticleOpen(false)} aria-label="Close article overview">
              <X size={18} />
            </button>
            <div className="article-modal-portrait">
              <img src="/assets/nahid-alom.png" alt="Md. Nahid Alam" />
            </div>
            <div className="article-modal-copy">
              <span className="article-source">{founderFeature.outlet} · {founderFeature.published}</span>
              <h2 id="article-modal-title">{founderFeature.headline}</h2>
              <p>
                NTV&apos;s feature presents LexGlobal BD as a technology-led legal-service platform designed to help people understand legal matters, find relevant information and reach appropriate professional support.
              </p>
              <p>
                The report identifies Md. Nahid Alam as the platform&apos;s founder and describes its aim of making legal guidance clearer and more accessible, while keeping lawyers central to the process.
              </p>
              <div className="article-modal-actions">
                <a href={founderFeature.href} target="_blank" rel="noreferrer" className="gold-button">
                  Open original NTV article
                  <ExternalLink size={16} />
                </a>
                <span>Article text remains on the publisher&apos;s site.</span>
              </div>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
