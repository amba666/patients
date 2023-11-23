import React, {Component, Fragment} from "react";
import Cards from "./Cards";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import {PatientsForm} from "./PatientsForm";
// import {Route,  Routes} from "react-router-dom";
// import {Login} from "./Login";


export class Home extends Component{
    render() {
        return(
            <Fragment>


            <h1 className="text-3xl font-bold text-center mt-4">Welcome to Softmed Health Services </h1>

                <Cards />



            </Fragment>
        )
    }
}

export default Home;