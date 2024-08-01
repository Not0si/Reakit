import NumberInput from '@ui/numberInput/NumberInput'

import styles from './styles.module.scss'

const PlayGround = () => {
  return (
    <section className={styles.container}>
      <section className={styles.wrapper}>
        <NumberInput
          type="integer"
          onChange={(value) => {
            console.info({ value })
          }}
          max={400}
        />
        <input type="number" name="" id="" />
      </section>
    </section>
  )
}

export default PlayGround
