import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"

class Logar extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }
    
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.history.push('/');
    }

    render() {
        return (
            <Fragment>
                 <div className="Login">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="email" bsSize="large">
                            <ControlLabel>E-mail</ControlLabel>
                            <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Senha</ControlLabel>
                            <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            />
                        </FormGroup>
                        <Button
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit"
                        >
                            Login
                        </Button>
                        <Link className="d-flex justify-content-center" to={`/login/registrar`}>Registrar</Link>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Logar