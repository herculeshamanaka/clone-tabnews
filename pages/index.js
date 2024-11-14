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
    image: {
      width: "100%",
      height: "100%",
    },
  };

  return (
    <div style={styles.container}>
      <main style={styles.main}>
        <div style={styles.devNews}>
          <h1>Gorilla Dev News</h1>
          <p>
            The basic idea is to add relevant content for those who work with
            information technology.
          </p>
        </div>

        <h2 style={styles.title}>Under Construction</h2>
        <p style={styles.description}>
          We are working hard to bring you a better experience.
        </p>

        <Image
          src="/images/gorilla_samurai.png"
          width={0}
          height={0}
          sizes="100vw"
          style={styles.image}
        />
      </main>
    </div>
  );
}

export default Home;
