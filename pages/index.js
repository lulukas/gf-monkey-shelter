import Head from 'next/head'

// Components
import Header from '../components/organisms/Header'
import { Report } from '../components/pages/Report'

// styles
import styles from '../styles/Home.module.css'

const Home = () => {
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
      <main>
        <Report />
      </main>
    </div>
  )
}

export default Home
