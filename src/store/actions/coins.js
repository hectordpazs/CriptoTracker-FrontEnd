import Swal from "sweetalert2";
import { concatArrays } from "../../helpers/concatArrays";
import { fetchConToken } from "../../helpers/fetch";
import { types } from "../types/types";


export const startInvesting = (name, invested) => {
    return async (dispatch) => {
        const resp = await fetchConToken('currencie', { name, invested }, 'POST');
        const body = await resp.json();

        console.log(body);
        
        if (body.ok) {
            dispatch(invest(body.currencie));
            
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    };
}

export const loadInvestedCoins = () => {
    return async (dispatch) => {
        const resp = await fetchConToken('currencie');
        const body = await resp.json();

        console.log(body);
        

        if (body.ok) {
            dispatch(walletLoadCoins(body.currencie));
        } else {
            Swal.fire('Error', body.msg, 'error');
        }

    }
}

const walletLoadCoins = (currencies) => ({
    type: types.walletLoadCoins,
    payload: currencies
});

const invest = (invest) => ({
    type: types.walletAddCoin,
    payload: invest
});