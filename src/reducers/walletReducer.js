// la Wallet tendra el estado inicial siguiente

import { types } from "../types/types";

// uid:123121256, name:Hector, walletId:231231456, investedcoins:[]

//el usuario esta en el state sacar del state con useSelector y obtener

//si no sirve, hacer un nuevo type que se llame walletLogin y de ahi sacar
//user

//const wallett = localStorage.getItem('wallet')||null;

const initialState = {
    wallet: null,
    investedCoins: [],
    logged: false,
}

export const walletReducer = (state=initialState, action)=>{
    switch (action.type){
        //casos del reducer a resolver
        case types.walletLogin: 
            return {
                ...state,
                ...action.payload,
                logged: true,
            }
        
        case types.walletInvestedCoins:
            return {
                ...state,
                investedCoins: action.payload,
            }

        case types.walletLogout:
            return {
                ...initialState,
                logged: false,
            }

        case types.walletAddCoin:
            return {
                ...state,
                investedCoins: [...state.investedCoins, action.payload],
            }

        case types.walletLoadCoins:
            return {
                ...state,
                investedCoins: [...action.payload]
            }
        

        default:
            return state
    }
}