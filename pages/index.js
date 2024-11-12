import Image from "next/image";

function Home() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      margin: "0",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f3f4f6",
      textAlign: "center",
    },
    main: {
      textAlign: "center",
    },
    title: {
      fontSize: "3em",
      color: "#333",
    },
    description: {
      fontSize: "1.2em",
      color: "#666",
    },
    devNews: {
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <h1 style={styles.title}>Under Construction</h1>
        <p style={styles.description}>
          We are working hard to bring you a better experience. Stay tuned!
        </p>

        <div style={styles.devNews}>
          <h2>Dev News</h2>
          <p>
            Stay updated with the latest in development news. Exciting things
            are coming!
          </p>
        </div>

        <Image src="/images/gorilla_samurai.png" alt={alt} width="100%" />
      </main>
    </div>
  );
}

export default Home;
