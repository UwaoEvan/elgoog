import { combineReducers } from "redux";
import characters from "../actions/characters";

export default combineReducers({
    characters: characters
})