import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCapsules, faNotesMedical, faStethoscope, faVialVirus, faXRay} from "@fortawesome/free-solid-svg-icons";


import React, {Component, Fragment} from "react";
import {Link, Route,  Routes} from "react-router-dom";
import {Login} from "./Login";

export class Cards extends Component {

    render() {
        return (

            <Fragment>



                <div className="separator-breadcrumb border-t text-black mt-4"></div>

                <div className="container mt-8 mx-auto">
                    <div className="grid grid-cols-3 gap-4">

                        <Link to="/Login">
                            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
                                <div className="flex justify-center items-center mb-4">
                                    <FontAwesomeIcon icon={faVialVirus} beatFade className="text-6xl text-gray-600 dark:text-gray-300"/>
                                </div>
                                <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">LABORATORY</h5>
                            </div>
                        </Link>

                        <div
                            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex justify-center items-center mb-4">
                                <FontAwesomeIcon icon={faStethoscope} beatFade className="text-6xl text-gray-600 dark:text-gray-300"/>
                            </div>
                            <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">CLINICAL SERVICES</h5>
                        </div>

                        <div
                            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex justify-center items-center mb-4">
                                <FontAwesomeIcon icon={faCapsules} beatFade className="text-6xl text-gray-600 dark:text-gray-300"/>
                            </div>
                            <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">STOCK
                                INVENTORY & BILLING</h5>
                        </div>

                        <div
                            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex justify-center items-center mb-4">
                                <FontAwesomeIcon icon={faNotesMedical} beatFade className="text-6xl text-gray-600 dark:text-gray-300"/>
                            </div>
                            <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">CONNECT</h5>
                        </div>

                        <div
                            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            <div className="flex justify-center items-center mb-4">
                                <FontAwesomeIcon icon={faXRay} beatFade className="text-6xl text-gray-600 dark:text-gray-300"/>
                            </div>
                            <h5 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">RADIOLOGY</h5>
                        </div>


                    </div>
                </div>


                <Routes>
                    <Route path="/Login" element={<Login/>} />
                </Routes>


             </Fragment>


        )
    }
}

export default Cards;