import React, {Component} from 'react';
import axios from 'axios';

export default class EditUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user_name: '',
            user_gender: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/users/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                user_name: response.data.user_name,
                user_gender: response.data.user_gender
            })
        })
        .catch(function(error) {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <h3>Update User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Name: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.user_name}
                                onChange={this.onChangeUserName}
                                />
                    </div>
                    <div className='form-group'>
                        <label>Gender: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.user_gender}
                                onChange={this.onChangeUserGender}
                                />
                    </div>

                    <div className="form-group">
                            <label>Name: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.user_name}
                                onChange={this.onChangeUserName}
                            />
                    </div>
                        <div className="form-group">
                            <label>Gender: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.user_gender}
                                onChange={this.onChangeUserGender}
                            />
                    </div>
                </form>
            </div>
        )
    }
}