import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <p className={s.text}>
        Built with React & Vite · {new Date().getFullYear()}
      </p>
    </footer>
  )
}
