import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import logoRickAndMorty from "../assets/Rick-And-Morty-Logo-650x366.png";

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <p>©Hecho por Federico Asaad</p>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titulo}>
          <img className={styles.rickandmorty} src={logoRickAndMorty} alt="" />
        </div>
        <div className={styles.option}>
          <Link to={"/SearchBar"}>
            <p>CHARACTERS</p>
          </Link>
        </div>
        <div className={styles.option}>
          <Link to={"/AllEpisodes"}>
            <p>EPISODES</p>
          </Link>
        </div>
        <div className={styles.option}>
          {/* <Link to={"/Form"}>
          <p>FORM</p>
        </Link> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
