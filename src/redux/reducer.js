/* eslint-disable array-callback-return */
import {
  CREATE_CHARACTER,
  DELETE_CHARACTER,
  GET_CHARACTER,
  ALL_MY_FAVORITES
} from "./action";

const initialState = {
  characters: [],
  myCharacters: [],
  MyFavorites: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        characters: action.payload,
      };
      case ALL_MY_FAVORITES:
        return {
          ...state,
          MyFavorites: [...state.MyFavorites, action.payload]
        };
    case DELETE_CHARACTER:
      return {
        ...state,
        MyFavorites: state.MyFavorites.filter(
          (character) => character !== action.payload
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
