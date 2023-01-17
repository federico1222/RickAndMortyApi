/* eslint-disable array-callback-return */
import {
  CREATE_CHARACTER,
  DELETE_CHARACTER,
  GET_CHARACTER,
} from "./action";

const initialState = {
  characters: [],
  myCharacters: [],
  detail: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        characters: action.payload,
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        characters: state.characters.filter(
          (character) => character.id !== action.payload
        ),
      };
    case CREATE_CHARACTER:
      return {
        ...state,
        myCharacters: [...state.characters, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
