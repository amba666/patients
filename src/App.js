import React, {Component, } from "react";import Nav from "./components/layouts/Nav";
import Home from "./components/layouts/Home";
import  { Provider } from 'react-redux';
import  store from './store';
// import Dashboard from "./components/layouts/Dasboard";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Login} from "./components/layouts/Login";
import {PatientsForm} from "./components/layouts/PatientsForm";
import {Patients} from "./components/layouts/Patients";
// import Patients from "./reducers/patients";
// import {Router} from "react-router-dom";
// import {Router} from "react-router-dom";

// import Users from "./components/layouts/Users";



class App extends Component{
  render() {
    return(
        <Provider store={ store }>
            <Nav/>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="patientform" element={<PatientsForm/>} />
                    <Route path="patients" element={<Patients/>} />
                </Routes>
            </Router>



        </Provider>
    );
  }
}
export default App;
