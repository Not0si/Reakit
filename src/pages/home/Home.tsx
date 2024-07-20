import CodeBlock from '@ui/codeBloc/CodeBloc'

import { type ReactElement, useState } from 'react'

import styles from './styles.module.scss'

const Home = (): ReactElement => {
  const [codeText, setCodeText] = useState('')
  const [codeHTML, setCodeHTML] = useState('')

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
      <CodeBlock
        editable
        className={styles.code}
        onChange={(text, html) => {
          setCodeText(text)
          setCodeHTML(html)
        }}
      >
        {`// This is a text editor 
const a = 5
const b = 8 
console.log(Math.round(a + b))`}
      </CodeBlock>
      <CodeBlock lang="html" className={styles.code}>
        {codeHTML}
      </CodeBlock>

      <CodeBlock lang="markdown" className={styles.code}>
        {codeText}
      </CodeBlock>
    </section>
  )
}

export default Home
