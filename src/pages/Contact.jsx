import ResumeLink from '../components/ResumeLink.jsx';

export default function Contact() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 24 }}>
        <p className="eyebrow mono">Get in touch</p>
        <h1 style={{ maxWidth: '20ch' }}>Contact</h1>
        <p className="lede">
          Best reached by email. I'm also active on GitHub and LeetCode if you'd like to see the
          code or the problem-solving history first.
        </p>
      </section>

      <section id="contact-cards">
        <div className="contact-grid">
          <a className="contact-card" href="mailto:anuragdeshmukh2575@gmail.com">
            <img
              className="brand-icon"
              src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/gmail.svg"
              alt=""
            />
            <span>
              <span className="label mono">email</span>
              <span className="value">anuragdeshmukh2575@gmail.com</span>
            </span>
          </a>

          <a className="contact-card" href="tel:+918432662366">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 4h4l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v4a2 2 0 01-2 2C9.5 21 3 14.5 3 6a2 2 0 011-2z" />
            </svg>
            <span>
              <span className="label mono">phone</span>
              <span className="value">+91 84326 62366</span>
            </span>
          </a>

          <a
            className="contact-card"
            href="https://github.com/Deshmukh-Anurag-25"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="brand-icon"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
              alt=""
            />
            <span>
              <span className="label mono">github</span>
              <span className="value">Deshmukh-Anurag-25</span>
            </span>
          </a>

          <a
            className="contact-card"
            href="https://www.linkedin.com/in/anurag-deshmukh-bb3b53309/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="brand-icon"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg"
              alt=""
            />
            <span>
              <span className="label mono">linkedin</span>
              <span className="value">anurag-deshmukh</span>
            </span>
          </a>

          <a
            className="contact-card"
            href="https://leetcode.com/u/Anurag-Deshmukh-27/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="brand-icon"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/leetcode/leetcode-original.svg"
              alt=""
            />
            <span>
              <span className="label mono">leetcode</span>
              <span className="value">Anurag-Deshmukh-27</span>
            </span>
          </a>

          <ResumeLink className="contact-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
            </svg>
            <span>
              <span className="label mono">resume</span>
              <span className="value">Download PDF</span>
            </span>
          </ResumeLink>
        </div>
      </section>

      <section id="location">
        <div className="section-head">
          <h2>Location</h2>
        </div>
        <p className="bio" style={{ color: 'var(--ink-soft)' }}>
          Based in Pune, India. Open to remote and on-site opportunities.
        </p>
      </section>
    </>
  );
}
