import ThemeToggle from './ThemeToggle';

const certifications = [
  { name: 'Docker Certified Associate', issuer: 'Docker', year: 2025 },
  { name: 'Certified Kubernetes Administrator', issuer: 'CNCF', year: 2025 },
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon', year: 2024 },
  { name: "HashiCorp Terraform Associate", issuer: "HashiCorp", year: 2026 },
];

const projets = [
  { name: 'Pipeline CI/CD GitHub Actions', desc: 'Build, tests et déploiement automatisés.' },
  { name: 'Platform Engineering avec Backstage', desc: 'Portail développeur et Software Templates.' },
  { name: 'Infrastructure Cloud as Code', desc: 'Provisionnement avec Terraform et Docker.' },
  { name: "Déploiement GitOps avec ArgoCD", desc: "Livraison continue sur Kubernetes pilotée par Git." },
];

const fullName = "Nawres Zr";
const about = "Ingénieure DevOps passionnée par le Cloud et le Platform Engineering.";

export default function Home() {
  return (
    <main>
      <header>
        <div>
          <h1>{fullName}</h1>
          <p>Ingénieur DevOps &amp; Cloud</p>
        </div>
        <ThemeToggle />
      </header>

      <section>
        <h2>À propos</h2>
        <div className="card">{about}</div>
      </section>

      <section id="certifications">
        <h2>Certifications</h2>
        {certifications.map((c) => (
          <div className="card" key={c.name}>
            <strong>{c.name}</strong> — {c.issuer} ({c.year})
          </div>
        ))}
      </section>

      <section id="projets">
        <h2>Projets DevOps &amp; Cloud</h2>
        {projets.map((p) => (
          <div className="card" key={p.name}>
            <strong>{p.name}</strong>
            <div>{p.desc}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
