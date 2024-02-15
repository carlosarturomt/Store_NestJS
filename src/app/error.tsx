"use client"
import Image from 'next/image'
import styles from 'app/sass/global-error.module.sass'

export default function GlobalError({ reset }: ErrorPageProps) {
  return (
    <main className={styles.Error}>
      <h1 className={styles.Error__title}>Ha ocurrido un error</h1>
      <Image
        width={500}
        height={500}
        src="/imgs/error.png"
        alt='Error'
      />
      <p className={styles.Error__message}>Al parecer ha ocurrido un error.</p>
      <button className={styles.Error__button} onClick={reset}>Volver a intentar</button>
    </main>
  )
}
