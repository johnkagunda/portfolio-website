import { resume } from '../data/resume'
import styles from './Section.module.css'
import s from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>Work history</span>
        <h2 className={styles.heading}>Experience</h2>
        <div className={s.timeline}>
          {resume.experience.map((exp, i) => (
            <div key={i} className={s.item}>
              <div className={s.dot} />
              <div className={s.card}>
                <div className={s.header}>
                  <div>
                    <h3 className={s.role}>{exp.role}</h3>
                    <p className={s.company}>{exp.company}</p>
                  </div>
                  <span className={s.period}>{exp.period}</span>
                </div>
                <ul className={s.bullets}>
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
