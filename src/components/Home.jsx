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
          <Link to={"/Form"}>
            <p>FORMULARIO</p>
          </Link>
        </div>
        <div className={styles.descripcion}>
          <p>La aplicación que he desarrollado utiliza React para construir una interfaz de usuario amigable. Se conecta a una API de Rick and Morty para obtener información sobre los personajes y episodios de la serie. Los usuarios pueden ver una lista de todos los personajes y episodios disponibles, y también pueden utilizar una barra de búsqueda para filtrar los resultados según su preferencia. El objetivo de esta aplicación es proporcionar una forma fácil y accesible para los fans de la serie para explorar y aprender más sobre su contenido favorito.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
