import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { signUp } from '../useful-things/fetches'

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            password_confirmation: ''
        }
        this.handleChange  = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        if(this.state.password === this.state.password_confirmation) {
            signUp(this.state.email, this.state.password)
            .then(response => {
                if(response !== null) {
                    window.location = '/landing'
                }
            })
            .catch(errors => { console.log(errors) } )
        } else{
            alert("passwords don't match!")
        }
    }

    render() {
        return(
            <div className="sign-up-container">
                <div className="sign-up">
                    <h2>Sign up</h2>
                    <hr/>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={(event) => { this.handleChange(event) }} name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(event) => { this.handleChange(event) }} name="password" type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control onChange={(event) => { this.handleChange(event) }} name="password_confirmation" type="password" placeholder="Password Confirmation" />
                        </Form.Group>

                        <Button onClick={ this.handleSubmit } variant="primary" type="submit">Submit</Button>
                    </Form>
                </div>

            </div>
        )
    }
}

export default SignUp