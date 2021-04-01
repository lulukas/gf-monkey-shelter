import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GF Monkey Shelter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://gfms-db-interview-aas.azurewebsites.net/monkeyshelter">GF Monkey Shelter</a>
        </h1>
      </main>
    </div>
  )
}

export default Home
