export const GET_CHARACTER = "GET_CHARACTER";
export const DELETE_CHARACTER = "DELETE_CHARACTER";
export const CREATE_CHARACTER = "FORM_CHARACTER";
export const ALL_MY_FAVORITES = "ALL_MY_FAVORITES";

export const getCharacter = () => {
  return function (dispatch) {
    //la action creator no puede hacer una peticion a la api, le delega esta peticion a una funcion
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "GET_CHARACTER", payload: data.results })
      );
  };
};
export const deleteCharacter = (character) => {
  return { type: DELETE_CHARACTER, payload: character };
};
export const createCharacter = (character) => {
  return { type: CREATE_CHARACTER, payload: character };
};
export const allMyFavorite = (character) => {
  return { type: ALL_MY_FAVORITES, payload: character };
};


