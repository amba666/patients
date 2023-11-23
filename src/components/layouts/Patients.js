import React, {Component, Fragment} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
 import { getPatients} from "../../actions/patients";


export  class Patients extends Component{
    static propTypes = {
        patients: PropTypes.array.isRequired,
        getPatients: PropTypes.func.isRequired,

    };

    componentDidMount() {
        this.props.getPatients();
    }

    render(){

        return(
            <Fragment>
                <h2 className="font-bold">Patients</h2>
                <table className="table-auto w-full border-collapse">
                    <thead>
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Age</th>
                        <th className="border px-4 py-2">Sex</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Problem</th>
                        <th className="border px-4 py-2" />
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.patients.map((patient) => (
                        <tr key={patient.id} className="border">
                            <td className="border px-4 py-2">{patient.id}</td>
                            <td className="border px-4 py-2">{patient.name}</td>
                            <td className="border px-4 py-2">{patient.age}</td>
                            <td className="border px-4 py-2">{patient.sex}</td>
                            <td className="border px-4 py-2">{patient.email}</td>
                            <td className="border px-4 py-2">{patient.problem}</td>
                            <td className="border px-4 py-2" />
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps= state =>(
    {
        patients: state.patients.patients
    }
);
export default connect(mapStateToProps, { getPatients })(Patients);