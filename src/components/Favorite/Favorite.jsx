import React from "react";
import { connect } from "react-redux";
import styles from "./Favorite.module.css";

const Favorite = (props) => {
  return (
    <>
    <h1 className={styles.h1}>Favorites</h1>
        <div className={styles.container}>
      {props.MyFavorites?.map((fav) => {
        return (
          <div className={styles.containerCard}>
          <p> Name: {fav.name}</p>
          <p> Species: {fav.species}</p>
          <p> Gender: {fav.gender}</p>
          <div className={styles[fav.status]}>{fav.status}</div>
          <img className={styles.img} src={fav.image} alt="" />
        </div>
        );
      })}
    </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    MyFavorites: state.MyFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorite);
