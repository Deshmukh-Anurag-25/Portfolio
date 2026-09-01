import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site">
      <nav className={`site-nav${open ? ' open' : ''}`}>
        <NavLink to="/" className="wordmark" onClick={() => setOpen(false)}>
          anurag<span>.dev</span>
        </NavLink>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === '/'} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          menu
        </button>
      </nav>
    </header>
  );
}
