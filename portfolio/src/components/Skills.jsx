import { resume } from '../data/resume'
import styles from './Section.module.css'
import s from './Skills.module.css'

export default function Skills() {
  const { skills } = resume
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>What I work with</span>
        <h2 className={styles.heading}>Technical Skills</h2>
        <div className={s.grid}>
          <SkillGroup title="Languages" items={skills.languages} />
          <SkillGroup title="Frameworks" items={skills.frameworks} />
          <SkillGroup title="Tools & Platforms" items={skills.tools} />
        </div>
      </div>
    </section>
  )
}

function SkillGroup({ title, items }) {
  return (
    <div className={s.group}>
      <h3 className={s.groupTitle}>{title}</h3>
      <div className={s.tags}>
        {items.map(item => (
          <span key={item} className={s.tag}>{item}</span>
        ))}
      </div>
    </div>
  )
}
