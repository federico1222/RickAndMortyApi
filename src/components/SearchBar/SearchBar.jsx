/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "./SearchBar.module.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavPage = (props) => {
  return (
    <div className={styles.NavPage}>
      <button
        className={styles.buttonPage}
        onClick={
          props.page >= 2 ? () => props.setPage(props.page - 1) : props.page
        }
      >
        <AiFillCaretLeft />
      </button>
      <div className={styles.pPage}>
        <p>{props.page}</p>
      </div>
      <button
        className={styles.buttonPage}
        onClick={
          props.page <= 41 ? () => props.setPage(props.page + 1) : props.page
        }
      >
        <AiFillCaretRight />
      </button>
    </div>
  );
};

const SearchBar = () => {
  const [busqueda, setBusqueda] = useState("");
  const [character, setCharacter] = useState([]);
  const [listCharacter, setlistCharacter] = useState([]);
  const [page, setPage] = useState(1);

  const fetchCharacter = async () => {
    await axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        setCharacter(response.data.results);
        setlistCharacter(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCharacter();
  }, [page]);

  //filtro
  const handleChange = (evento) => {
    setBusqueda(evento.target.value);
    filtro(evento.target.value);
  };

  const filtro = (terminoDeBusqueda) => {
    var resultadoBusqueda = listCharacter.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(terminoDeBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setCharacter(resultadoBusqueda);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
  };

  return (
    <div className="animate__animated animate__fadeInLeft">
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search.."
            className={styles.input}
            value={busqueda}
            onChange={handleChange}
          />
          <button className={styles.button}>search</button>
        </form>
        <div className={styles.container}>
          {character.map((char, i) => {
            return (
              <Link key={i} to={`/${char.id}`}>
                <div className={styles.containerCard}>
                  <p> Name: {char.name}</p>
                  <p> Species: {char.species}</p>
                  <p> Gender: {char.gender}</p>
                  <div className={styles[char.status]}>{char.status}</div>
                  <img className={styles.img} src={char.image} alt="" />
                </div>
              </Link>
            );
          })}
        </div>
        <div className={styles.container}>
        <NavPage page={page} setPage={setPage} />
      </div>
      </div>
    </div>
  );
};

export default SearchBar;
