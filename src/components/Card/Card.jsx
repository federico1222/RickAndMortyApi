import "./card.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiFillCaretLeft } from 'react-icons/ai';



const Card = () => {
  let { id } = useParams();

  const [character, setCharacter] = useState([]);
  const [origin, setOrigin] = useState([]);
  const [location, setLocation] = useState([]);

  const fetchCharacter = async () => {
    await axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setCharacter(response.data);
        setOrigin(response.data.origin);
        setLocation(response.data.location);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container ">
        <div className="card animate__animated animate__fadeInLeft">
          <div className="contenedor-img">
            <img className="img" src={character.image} alt="" />
          </div>
          <div className="titulo">
            <h1> {character.name}</h1>
            <p className={character.status}>{character.status}</p>
          </div>
          <div className="datos">
            <div className="col1">
              <div className="col">SPECIES</div>
              <div className="col">GENDER</div>
              <div className="col">ORIGIN</div>
              <div className="col">CREATED</div>
              <div className="col">LOCAITON</div>
            </div>
            <div className="col2">
              <div className="col-2">{character.species}</div>
              <div className="col-2">{character.gender}</div>
              <div className="col-2">{origin.name}</div>
              <div className="col-2">{character.created}</div>
              <div className="col-2">{location.name}</div>
            </div>
          </div>
          <div className="datos-responsive">
            <div className="col1-responsive">
              <div className="col-responsive">SPECIES</div>
              <div className="col-2-responsive">{character.species}</div>
              <div className="col-responsive">GENDER</div>
              <div className="col-2-responsive">{character.gender}</div>
              <div className="col-responsive">ORIGIN</div>
              <div className="col-2-responsive">{origin.name}</div>
              <div className="col-responsive">CREATED</div>
              <div className="col-2-responsive">{character.created}</div>
              <div className="col-responsive">LOCAITON</div>
              <div className="col-2-responsive">{location.name}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
