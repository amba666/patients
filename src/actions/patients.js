import axios from "axios";
import  { GET_PATIENTS ,ADD_PATIENT } from "./types";



export  const getPatients = () =>  dispatch =>  {
    axios.get("http://localhost:3000")
        .then(res =>{
            dispatch({
                type:GET_PATIENTS,
                payload: res.data
            });

        })
        .catch(err=> console.log(err));
};


export const addPatient = (patient) => (dispatch) => {
    axios.post("", patient)
        .then((res) => {

            dispatch({
                type: ADD_PATIENT,
                payload: res.data,
            });
        })
        .catch((err) => {

            console.log(err);
        });


};

export default addPatient;