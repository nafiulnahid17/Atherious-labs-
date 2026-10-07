"use client";

import {
  ArrowRight,
  Atom,
  BriefcaseBusiness,
  CircuitBoard,
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

const products = [
  {
    name: "LexGlobal BD",
    tag: "Live",
    className: "legal",
    image: "legal.webp",
    subtitle: "AI-Powered Legal Ecosystem",
    description:
      "Making legal information, services and justice more accessible through AI.",
    href: "https://lexglobalbd.live/",
  },
  {
    name: "JerseyOS",
    tag: "In development",
    className: "production",
    image: "production.webp",
    subtitle: "Intelligent Production Operating System",
    description:
      "An AI-driven operating system for modern production and manufacturing.",
    href: "#revector",
  },
  {
    name: "SunShot AI",
    tag: "Upcoming",
    className: "sunshot",
    image: "sunshot.webp",
    subtitle: "General-Purpose AI Platform",
    description:
      "A next-generation AI platform for individuals, businesses and beyond.",
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
      <svg viewBox="0 0 30 36" aria-hidden="true">
        <path
          d="M3 31 14 4l12 25-13-8-10 10Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
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
      {roles.map((role, index) => (
        <article className="person-card" key={role}>
          <img
            className="profile-art"
            src={`/assets/${team ? "team" : "board"}-${index + 1}.webp`}
            alt=""
            loading="lazy"
          />
          <div className="person-copy">
            <h3>To be announced</h3>
            <p>{team ? "Team profile" : "Board & advisory profile"}</p>
            <small>{role}</small>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
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
              ["About", "about"],
              ["Founder", "founder"],
              ["Board", "board"],
              ["Team", "team"],
              ["Contact", "contact"],
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
          <span className="kicker">Atherious Labs</span>
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
            title="Highlighted Projects"
            description="From legal intelligence to production systems and foundational AI — Atherious Labs builds and scales specialized products for real-world impact."
            link="View All Projects"
            href="#project-cards"
          />
          <div className="product-grid" id="project-cards">
            {products.map((product) => (
              <article
                className={`product-card ${product.className}`}
                key={product.name}
              >
                <img src={`/assets/${product.image}`} alt="" loading="lazy" />
                <div className="product-shade" />
                <span className="status">{product.tag}</span>
                <div className="product-copy">
                  <h3>{product.name}</h3>
                  <h4>{product.subtitle}</h4>
                  <p>{product.description}</p>
                  <a className="text-link" href={product.href}>
                    Explore Project
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <article className="revector" id="revector">
            <img src="/assets/production.webp" alt="" loading="lazy" />
            <div className="revector-copy">
              <span className="kicker">Inside JerseyOS</span>
              <h3>ReVector AI</h3>
              <p>
                A core AI engine inside JerseyOS, enabling intelligent
                production workflows.
              </p>
              <a className="text-link" href="#contact">
                Learn More
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="revector-panel">
              <h4>ReVector AI</h4>
              <p>
                Production Intelligence
                <br />
                Flow Optimization
                <br />
                Predictive Systems
              </p>
              <CircuitBoard size={22} />
            </div>
          </article>
        </div>
      </section>
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
          </div>
          <div className="founder-art">
            <img
              src="/assets/founder.webp"
              alt="Illustrative founder portrait inspired by the approved design"
              loading="lazy"
            />
            <div className="signature">
              The Artist<span>Nahid Alom</span>
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
            Illustrative portraits · Profiles to be announced
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
            <a href="https://lexglobalbd.live/">LexGlobal BD</a>
            <a href="#projects">JerseyOS</a>
            <a href="#projects">SunShot AI</a>
            <a href="#revector">ReVector AI</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="#about">About</a>
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
    </main>
  );
}
