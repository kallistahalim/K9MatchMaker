import React, { Component } from 'react';
import Axios from 'axios';

export default class UsersList extends Component {

    constructor(props) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserGender = this.onChangeUserGender.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            gender: '',
            // user_breed: '',
            // user_personality: '',
            // user_desc: ''
        }
    }

    onChangeUserName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeUserGender(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('New user submitted:');

        console.log(`User name: ${this.state.user_name}`);
        console.log(`User gender: ${this.state.user_gender}`);

        const newUser = {
            user_name: this.state.user_name,
            user_gender: this.state.user_gender
        }

        Axios.post('http://localhost:3001', newUser)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            gender: ''
        })
    }
    
    }

    render() {
        return (
            <div>
                <p>Welcome to CocoApp Create User!</p>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeUserName}
                        />;
                    </div>
                    <div className="form-group">
                        <label>Gender: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.gender}
                            onChange={this.onChangeUserGender}
                        />;
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary"/>  
                    </div>
                </form>
            </div>
        )
    }
}

