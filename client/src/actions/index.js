import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
    return async function(dispatch) {
        console.log('Inside actions...')
        const res = await axios.get('/home')
        dispatch({type: FETCH_USER, payload: res});
    };
};

// async function foobar() {
//     console.log("foobar")
//     return await axios.get('/home')
// }

// export const fetchUser = (dispatch) => {
//     const res = foobar() 
//     console.log("RES : ", res)
//     dispatch({type: FETCH_USER, payload: res});
// }

