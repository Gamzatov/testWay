import { GET_USERS } from "../actionsTypes";
import axios from "axios";


export const setLoaded = (payload) => {
    return {
        type: 'SET_LOADED',
        payload,

    }
}


export const api = axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users');
export const fetchUsers = (users) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });
    api.then((res) => {
        dispatch(getUsers(res.data));
    });
};

export const getUsers = (payload) => {
    return {
        type: GET_USERS,
        payload
    }
};