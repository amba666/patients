import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Patients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/client/');
            setClients(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2 className="font-bold">Clients List</h2>
            <table className="table-fixed w-full">
                <thead>
                <tr>
                    <th className="border px-2 py-1">ID</th>
                    <th className="border px-2 py-1">Name</th>
                    <th className="border px-2 py-1">Mobile</th>
                    <th className="border px-2 py-1">Age</th>
                    <th className="border px-2 py-1">Sex</th>
                </tr>
                </thead>
                <tbody>
                {clients.map((client) => (
                    <tr className="border" key={client.id}>
                        <td className="border px-2 py-1">{client.id}</td>
                        <td className="border px-2 py-1">{client.name}</td>
                        <td className="border px-2 py-1">{client.mobile}</td>
                        <td className="border px-2 py-1">{client.age}</td>
                        <td className="border px-2 py-1">{client.sex}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Patients;