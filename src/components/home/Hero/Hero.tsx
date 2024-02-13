import styles from './Hero.module.sass'

export const Hero = () => {
  console.log(styles);

  return (
    <section className={styles.Hero}>
      <h1>CAMT Lead</h1>
      <h2>¿En tu Zona de Confort?</h2>
      <h3>Aventuráte y Muestrales que puedes.</h3>
      <h3>Seamos + Líderes</h3>
    </section>
  )
}
