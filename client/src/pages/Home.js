import React, { Component } from 'react';
// import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron"
import { Input, FormBtn } from "../components/Form";
import "./style.css";

class Homepage extends Component {
    render() {
        return (
            <Jumbotron >
                <div>
                    <p>Let's get you buddied up with new pup </p>
                </div>
                <form>
                    <Input name="name" placeholder="Name" />
                    <Input name="gender" placeholder="Gender" />
                    <Input name="breed" placeholder="Breed" />
                    <Input name="personality" placeholder="Personality" />
                    <Input id="desc" name="description" placeholder="Desription" />
                    
                    {/* <TextArea name="synopsis" placeholder="Synopsis (Optional)" /> */}
                    <FormBtn>Submit</FormBtn>
                </form>
            </Jumbotron>
        )
    }
}
export default Homepage;