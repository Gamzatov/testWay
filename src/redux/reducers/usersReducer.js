import { GET_USERS, SET_LOADED } from "../actionTypes";

const initialState = {
    users: [],

    isLoaded: false
};


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: {
            return {
                ...state,
                users: action.payload,
                isLoaded: true
            }
        }
        case SET_LOADED: {
            return {
                ...state,
                isLoaded: action.payload
            }
        }

        default:
            return state
    }
};