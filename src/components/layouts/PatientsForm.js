import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { addPatient } from "../../actions/patients";
import PropTypes from "prop-types";

export class PatientsForm extends Component {
    state = {
        name: "",
        age: "",
        sex: "",
        email: "",
        problem: "",
    };

    // const [formValue,setFormValue] = useState();

    static propTypes = {
        addPatients:  PropTypes.func.isRequired
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();

        const { name, age, sex, email, problem } = this.state;

        const patient = { name, age, sex, email, problem };

        addPatient(patient);


        this.setState({
            name: "",
            age: "",
            sex: "",
            email: "",
            message: "",
        });
    };

    render() {
        const { name, age, sex, email, message } = this.state;

        return (
            <div className="card p-4 mt-4 mb-4">
                <h2 className="font-bold">Add Patient Form</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-4">
                        <label className="block">Name</label>
                        <input
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block">Age</label>
                        <input
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            name="age"
                            onChange={this.onChange}
                            value={age}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block">Sex</label>
                        <input
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            name="sex"
                            onChange={this.onChange}
                            value={sex}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block">Email</label>
                        <input
                            type="email"
                            className="w-full border rounded px-3 py-2"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block">Problem</label>
                        <textarea
                            className="w-full border rounded px-3 py-2"
                            name="message"
                            onChange={this.onChange}
                            value={message}
                        ></textarea>
                    </div>

                    <div className="mb-4">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addPatient })(PatientsForm);