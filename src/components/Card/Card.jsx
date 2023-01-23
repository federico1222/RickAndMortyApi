import "./card.css";
import React, { useEffect ,useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { allMyFavorite , deleteCharacter} from "../../redux/action";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";


const Card = (props) => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const [character, setCharacter] = useState([]);
  const [origin, setOrigin] = useState([]);
  const [location, setLocation] = useState([]);
  const [isFav, setIsFav] = useState(false);

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

  useEffect(() => {
    props.myFavorites?.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.myFavorites]);

  const handleFavorite = () => {
    if (isFav === false) {
      dispatch(allMyFavorite(character))
      setIsFav(true);
    } else if (isFav === true) {
      dispatch(deleteCharacter(character))
      setIsFav(false);
    }
  };

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
            {isFav ? (
              <button className="buttonFav" onClick={handleFavorite}>
                <IoHeartSharp />
              </button>
            ) : (
              <button className="buttonFav" onClick={handleFavorite}>
                < IoHeartOutline/>
              </button>
            )}
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

const mapDispatchToProps = (dispatch) => {
  return {
    allMyFavorite: () => dispatch(allMyFavorite()),
    deleteCharacter: () => dispatch(deleteCharacter()),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
