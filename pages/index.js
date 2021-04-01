import Head from 'next/head'

// Components
import Header from '../components/organisms/Header'
import { Report } from '../components/pages/Report'

// styles
import styles from '../styles/Home.module.css'

const Home = () => {
  process.env.TEST
  return (
    <div className={styles.container}>
      <Head>
        <title>GF Monkey Shelter</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Reggae+One&family=Roboto+Condensed&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <a href={process.env.NEXT_PUBLIC_MONKEY_API}>
            GF Monkey Shelter
          </a>
        </h1>
        <Report />
      </main>
    </div>
  )
}

export default Home
