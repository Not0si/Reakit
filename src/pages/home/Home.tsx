import Textarea from '@ui/textarea/Textarea'

import { type ReactElement } from 'react'

import styles from './styles.module.scss'

const Home = (): ReactElement => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Showcase</h1>
      <p className={styles.paragraph}>
        This project aims to gather and document common React and JavaScript
        patterns while developing a comprehensive library of reusable
        components. By consolidating best practices and creating standardized
        components, the project seeks to streamline development processes,
        improve code quality, and enhance maintainability for future projects.
      </p>

      <Textarea />
    </section>
  )
}

export default Home
