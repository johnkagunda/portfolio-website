import { resume } from '../data/resume'
import styles from './Section.module.css'
import about from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <SectionLabel>About me</SectionLabel>
        <h2 className={styles.heading}>Who I am</h2>
        <div className={about.grid}>
          <p className={about.summary}>{resume.summary}</p>
          <div className={about.meta}>
            <MetaItem label="Name" value={resume.name} />
          <MetaItem label="Location" value="Kenya" />
            <MetaItem label="Email" value={resume.email} />
            <MetaItem label="Phone" value={resume.phone} />
            <MetaItem label="Status" value="Open to opportunities" highlight />
          </div>
        </div>
      </div>
    </section>
  )
}

function MetaItem({ label, value, highlight }) {
  return (
    <div className={about.metaItem}>
      <span className={about.metaLabel}>{label}</span>
      <span className={highlight ? about.highlight : about.metaValue}>{value}</span>
    </div>
  )
}

function SectionLabel({ children }) {
  return <span className={styles.label}>{children}</span>
}
