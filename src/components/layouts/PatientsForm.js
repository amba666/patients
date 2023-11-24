import React, {Fragment, useState} from 'react';
import axios from "axios";
import Patients from "./Patients";
// import Patients from "./Patients";
// import {render} from "react-dom";

function PatientsForm(){

    const url = "http://127.0.0.1:8000/api/client/";
    const [data, setData] = useState({
        name: "",
        client_id: "",
        mobile: "",
        age: "",
        sex: "",
    });

    function submit(e) {
        e.preventDefault();
        axios
            .post(url, {
                name: data.name,
                client_id: data.client_id,
                mobile: data.mobile,
                age: data.age,
                sex: data.sex,
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function handle(e) {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
    }
        return(
        <Fragment>
            <div className="card p-4 mt-4 mb-4">
                <h2 className="font-bold">Add Patient Form</h2>
                <form onSubmit={(e)=> submit(e)}>
                    <div className="mb-4">
                        <label className="block">Client Name</label>
                        <input
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            name="name" id="name" onChange={(e)=>handle(e)} value={data.name}/>
                    </div>

                    <div className="mb-4">
                        <label className="block">Client Id</label>
                        <input
                            type="number"
                            className="w-full border rounded px-3 py-2"
                            name="client_id" id="client_id" onChange={(e)=>handle(e)} value={data.client_id}/>
                    </div>

                    <div className="mb-4">
                        <label className="block">Phone</label>
                        <input
                            type="tel"
                            className="w-full border rounded px-3 py-2"
                            name="mobile" id="mobile" onChange={(e)=>handle(e)} value={data.mobile}/>
                    </div>


                    <div className="mb-4">
                        <label className="block">Age</label>
                        <input
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            name="age" id="age" onChange={(e)=>handle(e)} value={data.age}/>
                    </div>


                    <div className="mb-4">
                        <label className="block">Sex</label>
                        <input
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            name="sex" id="sex" onChange={(e)=>handle(e)} value={data.sex}/>
                    </div>





                    <div className="mb-4">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </div>


                </form>
                </div>

            <Patients />
        </Fragment>

        )


}



export default PatientsForm;