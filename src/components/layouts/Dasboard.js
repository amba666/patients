import React, {Component, Fragment} from "react";
import PatientsForm from "./PatientsForm";
import Patients from "./Patients";

export class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <PatientsForm/>
                <Patients/>
            </Fragment>
        )
    }
}

export  default Dashboard;