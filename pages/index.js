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
    gorilla: {
      marginTop: "20px",
      position: "relative",
      width: "200px",
      height: "200px",
      backgroundColor: "#333",
      borderRadius: "50%",
    },
    eye: {
      position: "absolute",
      width: "20px",
      height: "20px",
      backgroundColor: "#fff",
      borderRadius: "50%",
      top: "50px",
    },
    left: {
      left: "50px",
    },
    right: {
      right: "50px",
    },
    nose: {
      position: "absolute",
      width: "40px",
      height: "40px",
      backgroundColor: "#000",
      borderRadius: "50%",
      top: "100px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    mouth: {
      position: "absolute",
      width: "100px",
      height: "50px",
      backgroundColor: "#000",
      borderRadius: "0 0 50px 50px",
      top: "140px",
      left: "50%",
      transform: "translateX(-50%)",
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

        <div style={styles.gorilla}>
          <div style={{ ...styles.eye, ...styles.left }}></div>
          <div style={{ ...styles.eye, ...styles.right }}></div>
          <div style={styles.nose}></div>
          <div style={styles.mouth}></div>
        </div>
      </main>
    </div>
  );
}

export default Home;
