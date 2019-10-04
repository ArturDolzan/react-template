import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
import {
    toast,
    Bounce
} from 'react-toastify';

class Registrar extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            passwordValid: ""
        }
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0 && this.state.password === this.state.passwordValid;
    }
    
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        this.notificar('Usuário registrado com sucesso!')

        this.props.history.push('/');
    }

    notificar = (mensagem) => this.toastId = toast(mensagem, {
        transition: Bounce,
        closeButton: true,
        autoClose: 5000,
        position: 'bottom-center',
        type: 'success'
    })
  
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
                        <FormGroup controlId="passwordValid" bsSize="large">
                            <ControlLabel>Confirmar Senha</ControlLabel>
                            <FormControl
                            value={this.state.passwordValid}
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
                            Registrar
                        </Button>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Registrar