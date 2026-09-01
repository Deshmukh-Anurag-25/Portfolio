import { Link } from 'react-router-dom';
import { useState } from 'react';
import ResumeLink from '../components/ResumeLink.jsx';
import StackIcon from '../components/StackIcon.jsx';
import { stackGroups } from '../data/stack.js';

function StatCard({ src, alt, caption, href }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div>
        <div className="stats-fallback">
          <p>Live stats are temporarily unavailable.</p>
          <a href={href} target="_blank" rel="noopener noreferrer" className="project-link">
            View profile directly &rarr;
          </a>
        </div>
        <p className="stats-caption">{caption}</p>
      </div>
    );
  }

  return (
    <div>
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      <p className="stats-caption">{caption}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow mono">Backend-leaning full-stack developer</p>
        <h1>Anurag Deshmukh</h1>
        <p className="lede">
          I build data-heavy backend systems in Spring Boot and pair them with React frontends —
          currently three products deep, from productivity tracking to media discovery to visual
          pipeline building.
        </p>
        <div className="hero-actions">
          <ResumeLink className="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
            </svg>
            Download resume
          </ResumeLink>
          <Link className="btn btn-secondary" to="/projects">
            View projects
          </Link>
        </div>
        <div className="meta-row">
          <span>
            <span className="dot"></span>Pune, India
          </span>
          <span>B.Tech CS (AI), VIT Pune — 2023–2027</span>
          <span>500+ DSA problems solved</span>
        </div>
      </section>

      <section id="about">
        <div className="section-head">
          <h2>About</h2>
        </div>
        <div className="bio">
          <p>
            I'm a Computer Science student specializing in Artificial Intelligence at Vishwakarma
            Institute of Technology, Pune. My work sits mostly on the backend — designing
            relational schemas, writing REST APIs in Spring Boot, and reasoning about how data
            models hold up under real usage — paired with React on the frontend to make that data
            usable.
          </p>
          <p>
            Outside of coursework, I've built a visual AI pipeline builder for an industry client,
            trained an image super-resolution model from scratch, and worked through more than 500
            data structures and algorithms problems on LeetCode.
          </p>
        </div>
      </section>

      <section id="stack">
        <div className="section-head">
          <h2>Tech stack</h2>
          <span className="section-note">tools I reach for</span>
        </div>
        <div className="stack-groups">
          {stackGroups.map((group) => (
            <div className="stack-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="tag-list">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <StackIcon icon={item.icon} />
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="stats">
        <div className="section-head">
          <h2>Activity</h2>
          <span className="section-note">live from GitHub &amp; LeetCode</span>
        </div>
        <div className="stats-grid">
          <StatCard
            src="https://ghstats.dev/api/card?username=Deshmukh-Anurag-25&theme=tokyonight&hide_title=true&border_radius=1.5"
            alt="Anurag's GitHub stats"
            caption="github.com/Deshmukh-Anurag-25"
            href="https://github.com/Deshmukh-Anurag-25"
          />
          <StatCard
            src="https://leetcard.jacoblin.cool/Anurag-Deshmukh-27?theme=dark&font=IBM%20Plex%20Mono&ext=heatmap"
            alt="Anurag's LeetCode stats"
            caption="leetcode.com/u/Anurag-Deshmukh-27"
            href="https://leetcode.com/u/Anurag-Deshmukh-27/"
          />
        </div>
      </section>
    </>
  );
}
