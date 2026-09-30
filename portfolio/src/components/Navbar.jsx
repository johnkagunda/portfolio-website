import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>&lt;dev /&gt;</a>
      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
              {l}
            </a>
          </li>
        ))}
      </ul>
      <button
        className={styles.burger}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
