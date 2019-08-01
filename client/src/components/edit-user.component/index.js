import React, {Component} from 'react';
import axios from 'axios';

export default class EditUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserGender = this.onChangeUserGender.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_name: '',
            user_gender: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/furs/'+this.props.match.params.id)
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

    onChangeUserName(e) {
        this.setState({
            user_name: e.target.value
        });
    }

    onChangeUserGender(e) {
        this.setState({
            user_gender: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            user_name: this.state.user_name,
            user_gender: this.state.user_gender
        };
        axios.post('http://localhost:3000/api/furs/update/' + this.props.match.params.id, obj)
        .then(res => console.log(res.data));

        this.props.history.push('/');
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
                    
                    <br/>
                    <div className="form-group">
                        <input type='submit' value='Update user' className="btn btn-primary" />
                    </div>

                    
                    </div>
                </form>
            </div>
        )
    }
}