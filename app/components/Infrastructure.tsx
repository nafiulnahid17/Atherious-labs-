import { ArrowUpRight } from "lucide-react";
import EnginesShowcase from "./EnginesShowcase";

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
        <EnginesShowcase />
        <a className="text-link infra-contact" href="#contact">Discuss Your Project <ArrowUpRight size={16} /></a>
      </div>
    </section>
  );
}
