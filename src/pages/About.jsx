export default function About() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 24 }}>
        <p className="eyebrow mono">Background</p>
        <h1 style={{ maxWidth: '20ch' }}>About</h1>
        <p className="lede">
          Computer Science student at Vishwakarma Institute of Technology, Pune, specializing in
          Artificial Intelligence, with a backend-first approach to building software.
        </p>
      </section>

      <section id="education">
        <div className="section-head">
          <h2>Education</h2>
        </div>
        <div className="edu-block">
          <div className="edu-years mono">2023 — 2027</div>
          <div>
            <h3 style={{ margin: '0 0 4px', fontSize: 17 }}>
              Vishwakarma Institute of Technology, Pune
            </h3>
            <p style={{ margin: 0, color: 'var(--ink-soft)' }}>
              Bachelor of Technology, Computer Science (Artificial Intelligence) — CGPA 8.6
            </p>
          </div>
        </div>
      </section>

      <section id="honors">
        <div className="section-head">
          <h2>Honors &amp; certifications</h2>
        </div>
        <ul className="honors-list">
          <li>
            <span className="honor-mark">CERT</span>
            <span>
              Certificate of Project Completion, Rubiscape — for building AI Workflow Studio.{' '}
              <a
                className="project-link"
                href="https://drive.google.com/file/d/1KHYY6hlxFFLTz_fUlwj-5a5xNVuxV67D/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View certificate &rarr;
              </a>
            </span>
          </li>
          <li>
            <span className="honor-mark">CERT</span>
            <span>
              IBM Full Stack Software Developer Certification.{' '}
              <a
                className="project-link"
                href="https://drive.google.com/file/d/1fq58i16iMeuh_fHqWVDW7xI4qUExLDX1/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View certificate &rarr;
              </a>
            </span>
          </li>
        </ul>
      </section>

      <section id="approach">
        <div className="section-head">
          <h2>How I work</h2>
        </div>
        <div className="bio">
          <p>
            Most of my projects start from the data model outward — I'd rather get the schema and
            the relationships right early than patch a frontend around a shaky backend later.
            That's shown up across WorkLog Pro and MediaHub, where the harder problem was usually
            the many-to-many relationships, not the UI.
          </p>
          <p>
            I also like picking up infrastructure pieces I haven't used before on real projects
            instead of tutorials — Elasticsearch and Redis on MediaHub, and a topological-sort-based
            execution engine for AI Workflow Studio, both started as "let me see if I can actually
            build this."
          </p>
        </div>
      </section>
    </>
  );
}
