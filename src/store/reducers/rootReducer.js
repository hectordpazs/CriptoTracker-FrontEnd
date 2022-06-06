import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { coinReducer } from "./coinReducer";
import { walletReducer } from "./walletReducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    wallet: walletReducer,
    coin: coinReducer,
})