import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Under Construction</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Under Construction</h1>
        <p className={styles.description}>
          We are working hard to bring you a better experience. Stay tuned!
        </p>

        <div className={styles.devNews}>
          <h2>Dev News</h2>
          <p>
            Stay updated with the latest in development news. Exciting things
            are coming!
          </p>
        </div>

        <div className={styles.gorilla}>
          <div className={`${styles.eye} ${styles.left}`}></div>
          <div className={`${styles.eye} ${styles.right}`}></div>
          <div className={styles.nose}></div>
          <div className={styles.mouth}></div>
        </div>
      </main>
    </div>
  );
}

export default Home;
