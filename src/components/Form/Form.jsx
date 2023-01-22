import React from "react";
import { connect } from "react-redux";
import { createCharacter } from "../../redux/action";
import styles from "../Form/Form.module.css";

const Form = (props) => {
  const [form, setForm] = React.useState({
    name: "",
    status: "",
    species: "",
    gender: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [property]: value,
    });
  };

  const handleSubmit = (event) => {
     //para que no se recargue la pagina cuando hago el submit

    props.createCharacter({
      ...form,
      id: Date.now,
      image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.titulo}>
        <p className={styles.p}>FORMULARIO</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          className={styles.input}
          placeholder="Name.."
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="Status.."
          name="status"
          value={form.status}
          onChange={handleChange}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="Species.."
          name="species"
          value={form.species}
          onChange={handleChange}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="Gender.."
          name="gender"
          value={form.gender}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button} onChange={handleSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCharacter: (character) => {
      dispatch(createCharacter(character));
    },
  };
};

export default connect(null, mapDispatchToProps)(Form);
