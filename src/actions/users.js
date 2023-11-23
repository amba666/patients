import axios from "axios";

import {ADD_USER, GET_USERS} from './types';

//GET USERS

export const getUsers = () => dispatch => {
    axios.get("")
        .then(res =>{
            dispatch({
                type: GET_USERS,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

//Add User
export const addUser = (user) => dispatch => {
    axios.post("", user)
        .then(res =>{
            dispatch({
                type: ADD_USER,
                payload: res.data
            });
        }).catch(err => console.log(err));
}
