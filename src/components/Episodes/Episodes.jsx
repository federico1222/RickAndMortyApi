/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "./Episodes.module.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const NavPage = (props) => {
  return (
    <div>
      <a onClick={props.page >= 2 ? () => props.setPage(props.page - 1) : props.page}>
        <AiFillCaretLeft />
      </a>
      <a onClick={props.page <= 2 ?() => props.setPage(props.page + 1) : props.page }>
        <AiFillCaretRight />
      </a>
    </div>
  );
};
const Episodes = () => {
  const [busqueda, setBusqueda] = React.useState("");
  const [episodes, setEpisodes] = React.useState([]);
  const [Filterepisodes, setFilterepisodes] = React.useState([]);
  const [page, setPage] = useState(1);

  const fetchEpisodes = async () => {
    await axios
      .get(`https://rickandmortyapi.com/api/episode?page=${page}`)
      .then((response) => {
        setEpisodes(response.data.results);
        setFilterepisodes(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchEpisodes();
  }, [page]);

  //filtro
  const handleChange = (evento) => {
    setBusqueda(evento.target.value);
    filtro(evento.target.value);
  };

  const filtro = (terminoDeBusqueda) => {
    var resultadoBusqueda = Filterepisodes.filter((elemento) => {
      if (
        elemento.name
          .toString()
          .toLowerCase()
          .includes(terminoDeBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setEpisodes(resultadoBusqueda);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
  };

  return (
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
      <div className={styles.col2}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th}>NAME</th>
              <th className={styles.th}>AIR DATE</th>
              <th className={styles.th}>EPISODE</th>
              <th className={styles.th}>CREATED</th>
              <th className={styles.th}>URL</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode, i) => (
              <tr className={styles.tr} key={i}>
                <td className={styles.td}>{episode.name}</td>
                <td className={styles.td}>{episode.air_date}</td>
                <td className={styles.td}>{episode.episode}</td>
                <td className={styles.td}>{episode.created}</td>
                <td className={styles.td}>{episode.url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <div className={styles.tableResponsive}>
          {episodes.map((episode, i) => {
            return (
              <div key={i} className={styles.columna}>
                <div className={styles.tituloResponsive}>
                  <p>EPISODE - {episode.episode}</p>
                </div>
                <p> NAME - {episode.name}</p>
                <p> AIR DATE - {episode.air_date}</p>
                <p> CREATED - {episode.created}</p>
                <p className={styles.url}> URL - {episode.url}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.nav}>
        <div className={styles.pPage}>
          <p>Temporada: {page}</p>
        </div>
        <div className={styles.aPage}>
          <NavPage page={page} setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default Episodes;
