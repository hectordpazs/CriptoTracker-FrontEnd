import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { walletReducer } from "./walletReducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    wallet: walletReducer
})