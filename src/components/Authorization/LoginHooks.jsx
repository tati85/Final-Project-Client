import React, { useState, useEffect } from 'react';
import {
    MDBIcon,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBInput,

} from "mdbreact";

import Joi from '@hapi/joi';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/auth/authorization';

function LoginHooks(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const isAuthenticated = useSelector(state => state.users.isAuthenticated)
    const dispatch = useDispatch();



    schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: ['com', 'net', 'es', 'org'] }).required().label('Email'),
        password: Joi.string().pattern(new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}')).required().label('Password')
    });
    handleToggleActive = () => {
        props.onClickLogin();
    };
    myValidate = () => {
        //const options = { abortEarly: false };
        const account = { email, password }
        const { error } = schema.validate(account);
        if (!error) return null;
        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    }
    onSubmit = e => {
        e.preventDefault();
        const errors = this.myValidate();
        setErrors({ errors: errors || {} })
        if (errors) return;
        const userData = {
            email: email,
            password: password
        };

        dispatch(loginUser(userData));
    };
    useEffect(() => {
        if (isAuthenticated)
            props.history.push('/home');
    }, [isAuthenticated]);


    return (
        <div>
            <MDBCard id="classic-card">
                <MDBCardBody className="white-text">
                    <form onSubmit={e => onSubmit(e)}>
                        <h3 className="text-center">
                            <MDBIcon icon="user" />
                                Login
                           </h3>
                        <hr className="hr-light" />

                        <MDBInput
                            className='white-text'
                            iconClass="white-text"
                            label="Your email"
                            icon="envelope"
                            name="email"
                            group
                            type="email"
                            validate
                            success="right"
                            onChange={e => setEmail(e.target.value)}
                        />
                        {errors.email && <div className='alert alert-danger'>{errors.email}</div>
                        }

                        <MDBInput
                            className='white-text'
                            iconClass="white-text"
                            label="Your password"
                            icon="lock"
                            name="password"
                            group
                            type="password"
                            validate
                            onChange={e => setPassword(e.target.value)}
                        />
                        {errors.password && <div className='alert alert-danger'>{errors.password}</div>}

                        <div className="text-center mt-4 black-text">
                            <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                            <hr className="hr-light" />
                            <div className="text-center d-flex justify-content-center white-label">
                                <h6 className="mb-4 white-text">Don't have an account?    </h6>
                                <MDBBtn outline color="default-color" onClick={handleToggleActive}>Sing Up</MDBBtn>

                            </div>
                        </div>

                    </form>
                </MDBCardBody>
            </MDBCard>

        </div>
    );
}

export default LoginHooks;