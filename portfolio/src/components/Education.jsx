import { resume } from '../data/resume'
import styles from './Section.module.css'
import s from './Education.module.css'

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>Background</span>
        <h2 className={styles.heading}>Education & Certifications</h2>
        <div className={s.grid}>
          <div>
            <h3 className={s.subheading}>Education</h3>
            {resume.education.map((e, i) => (
              <div key={i} className={s.card}>
                <div className={s.icon}><CapIcon /></div>
                <div>
                  <p className={s.degree}>{e.degree}</p>
                  <p className={s.school}>{e.school}</p>
                  <p className={s.year}>Graduated {e.graduated}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className={s.subheading}>Certifications</h3>
            {resume.certifications.map((c, i) => (
              <div key={i} className={s.card}>
                <div className={s.icon}><CertIcon /></div>
                <p className={s.certName}>{c}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}

function CertIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}
