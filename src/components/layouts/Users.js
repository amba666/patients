import React, { Component, Fragment} from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getUsers } from "../../actions/users";


export class Users extends Component{
    static propTypes = {
        users: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getUsers();
    }

    render(){
        return(
            <Fragment >
                <h2 className="text-2xl text-center font-bold mb-4">Users</h2>
                <table className="table-fixed w-full">
                    <thead>
                    <tr>
                        <th className="w-1/3">Email</th>
                        <th className="w-1/3">Password</th>
                        <th className="w-1/3"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.users.map((user, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{user.email}</td>
                            <td className="border px-4 py-2">{user.password}</td>
                            <td className="border px-4 py-2">
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Delete
                                </button>
                            </td>
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
        users: state.users.users
    }
);

export default connect(mapStateToProps, {getUsers})(Users);