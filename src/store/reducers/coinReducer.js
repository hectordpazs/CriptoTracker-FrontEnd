import { types } from "../types/types";

const initialState = {
    coinlist: [
        'bitcoin',
        'ethereum',
        'ripple',
        'litecoin',
    ],
}

export const coinReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.coinAdd:
            return {
                ...state,
                coinlist: [...state.coinlist, action.payload],
            }
        case types.coinRemove:
            return {
                ...state,
                coinlist: state.coinlist.filter(coin => coin !== action.payload),
            }
        default:
            return state
    }
}

