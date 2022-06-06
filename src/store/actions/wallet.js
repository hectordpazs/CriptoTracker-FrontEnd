import Swal from 'sweetalert2';
import { fetchConToken } from "../../helpers/fetch";
import { types } from '../types/types';

export const startWalletLogin = (password) => {
    return async (dispatch) => {
        const resp = await fetchConToken('wallet/login', { password }, 'POST');
        const body = await resp.json();
        
        if (body.ok) {
            dispatch(walletLogin({
                wallet: body.wallet._id,
                user: body.wallet.user,
            }));
            
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    };
}

export const startWalletRegister = (password) => {
    return async (dispatch) => {
        const resp = await fetchConToken('wallet', {password }, 'POST');
        const body = await resp.json();

        if (body.ok) {
            dispatch(walletLogin({
                wallet: body.wallet._id,
                user: body.wallet.user,
            }));
            localStorage.setItem('wallet', JSON.stringify(body.wallet));
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    };
}

export const getWallet = () => {
    return async (dispatch, getState) => {
        try {
            const resp = await fetchConToken(`wallet`, 'GET');
            const body = await resp.json();

            const wallet = body.wallet[0];

            if (wallet) {
                dispatch(walletLogin({
                    wallet: wallet._id,
                    user: wallet.user,
                }));
                localStorage.setItem('wallet', JSON.stringify(body.wallet));
            } 
        } catch (error) {
            Swal.fire('Error', error.message, 'error');
        }
            
        }
}

const walletLogin = (wallet) => ({
    type: types.walletLogin,
    payload: wallet
});

export const walletLogout = () => ({
    type: types.walletLogout
});