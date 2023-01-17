/* eslint-disable no-dupe-class-members */
/* eslint-disable no-useless-constructor */
import React from "react";
import styles from "./Cards.module.css";
import { connect } from "react-redux";
import { getCharacter } from "../../redux/action";
import Card from "../Card/Card";


class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCharacter();
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.container}>
          {[...this.props.myCharacters, ...this.props.characters].map(
            (character) => {
              return (
                <Card
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                  key={character.id}
                  id={character.id}
                />
              );
            }
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //esta funcion me permite armar un objeto con los valores del estado global
  return {
    characters: state.characters,
    myCharacters: state.myCharacters,
    busqueda: state.busqueda
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacter: () => dispatch(getCharacter()), //ACA HAGO DISPATCH Y SE VA A PROPS
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Cards);
