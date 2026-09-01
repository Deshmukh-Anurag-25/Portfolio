import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 24 }}>
        <p className="eyebrow mono">Selected work</p>
        <h1 style={{ maxWidth: '20ch' }}>Projects</h1>
        <p className="lede">
          Four systems, mostly Spring Boot on the backend — spanning productivity tracking, media
          discovery, a visual AI pipeline builder, and a computer vision model trained from
          scratch.
        </p>
      </section>

      <section>
        {projects.map((project) => (
          <div className="project-entry" key={project.name}>
            <div>
              <h3>{project.name}</h3>
              <p className="project-stack mono">{project.stack}</p>
              <p className="project-status mono">{project.status}</p>
            </div>
            <div>
              <ul>
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                View on GitHub &rarr;
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
