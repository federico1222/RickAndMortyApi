/* eslint-disable no-useless-constructor */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logoRickAndMorty from "../../assets/titulo.png";
import { AiFillHome } from "react-icons/ai";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className={styles.navbar}>
          <div className={styles.img}>
            <img src={logoRickAndMorty} alt="" />
          </div>
          <div className={styles.container}>
            <Link to={"/RickAndMortyApi"}>
              <button className={styles.button}>
                <AiFillHome />
              </button>
            </Link>
          </div>
        </div>
    );
  }
}

export default NavBar;
