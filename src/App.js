import React, {Component, } from "react";import Nav from "./components/layouts/Nav";
import Home from "./components/layouts/Home";
import  { Provider } from 'react-redux';
import  store from './store'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Login} from "./components/layouts/Login";
import PatientsForm from "./components/layouts/PatientsForm";
import Patients from "./components/layouts/Patients";




class App extends Component{
  render() {
    return(
        < Provider store={ store }>
            <Nav/>

        {/*<PatientsForm/>*/}



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
