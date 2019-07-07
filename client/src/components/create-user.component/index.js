import React, { Component } from 'react';
import API from "../../utils/API";

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
        console.log(`User name: ${this.state.name}`)
        console.log(`User gender: ${this.state.gender}`)

        this.setState({
            name: '',
            gender: ''
        })
    }
        
    loadInfo = () => {
        API.getInfo()
          .then(res =>
            this.setState({ user : res.data, name: "", gender: "" })
          )
          .catch(err => console.log(err));
      };

        handleFormSubmit = event => {
            event.preventDefault();
            if (this.state.name && this.state.gender) {
              API.saveInfo({
                name: this.state.name,
                gender: this.state.gender
                // synopsis: this.state.synopsis
              })
                .then(res => this.loadInfo())
                .catch(err => console.log(err));
            }

    
    }

    render() {
        return (
            <div>
                <p>Welcome to CocoApp Create User!</p>
                <form onClick={this.handleFormSubmit}>
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

