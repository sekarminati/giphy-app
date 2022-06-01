import logoGiphy from "../../assets/giphy-logo.png";
import styles from "./Home.module.css";
function Home() {
  return (
    <div className={styles.home}>
      <h1>WELCOME TO YOUR GIPHY</h1>
      <div className={styles.brand}>
        <img alt="logo" src={logoGiphy} />
        <span>GIPHY</span>
      </div>
      <div className={styles.menus}>
        <div>
          <a href="/gallery">IRON MAN GIPHY</a>
        </div>
        <div>
          <a href="/gallery/search">SEARCH YOUR GIPHY</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
