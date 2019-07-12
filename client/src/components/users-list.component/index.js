import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from "../Jumbotron";
import axios from 'axios';


const User = props => (
    <tr>
        <td className={props.user.name_completed ? 'completed' : ''}>{props.user.name}</td>
        <td className={props.user.gender_completed ? 'completed' : ''}>{props.user.gender}</td>
        <td>
            <Link to={"/edit/" + props.user._id}>Edit</Link>
        </td>
    </tr>
)


export default class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/furs')
            .then(response => {
                this.setState({ users: response.data })
                // console.log(response.data)
                // console.log("response: " + response)
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    userList() {
        return this.state.users.map(function (currentUser, i) {
            return <User user={currentUser} key={i} />;
        })
    }

    render() {
        return (
            <div>
               
                <Jumbotron>
                     <h3>Welcome to CocoApp Pal List</h3>
                     
                     <table className="table table-striped" style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.userList()}
                        </tbody>

                    </table>

                </Jumbotron>

            </div>
        )
    }
}

