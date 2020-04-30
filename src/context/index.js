import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import AUTH_SERVICE from '../services/AuthService';

export const AuthContext = React.createContext();

class AuthProvider extends React.Component {
    state = {
        formSignup: {
            email: '',
            password: ''
        },
        formLogin: {
            email: '',
            password: ''
        },
        currentUser: {},
        isLoggedIn: false,
        message: null
    };

    componentDidMount() {
        AUTH_SERVICE.getUser()
            .then(responseFromServer => {
                // console.log('res: ', responseFromServer);

                const { user } = responseFromServer.data;

                this.setState(prevState => ({
                    ...prevState,
                    currentUser: user,
                    isLoggedIn: true
                }));
            })
            .catch(err =>
                console.log('Error while getting the user: ', err.response.data)
            );
    }

    handleSignupInput = e => {
        const {
            target: { name, value }
        } = e;

        // console.log(name, value);
        this.setState(prevState => ({
            ...prevState,
            formSignup: {
                ...prevState.formSignup,
                [name]: value
            }
        }));
    };

    handleSignupSubmit = e => {
        e.preventDefault();
        // console.log(this.state.formSignup);

        // AUTH_SERVICE.signup({ username, email, password })
        // the same as above        ^^^^^^
        AUTH_SERVICE.signup(this.state.formSignup)
            .then(responseFromServer => {


                const {
                    data: { user, message }
                } = responseFromServer;

                this.setState(prevState => ({
                    ...prevState,
                    formSignup: {
                        email: '',
                        password: ''
                    },
                    currentUser: user,
                    isLoggedIn: true
                }));
                alert(`${message}`);
                this.props.history.push('/home');
            })
            .catch(err => {
                // console.log(err.response);
                if (err.response && err.response.data) {
                    this.setState(prevState => ({
                        ...prevState,
                        message: err.response.data.message
                    }));
                }
            });
    };

    handleLoginInput = e => {
        const {
            target: { name, value }
        } = e;
        this.setState(prevState => ({
            ...prevState,
            formLogin: {
                ...prevState.formLogin,
                [name]: value
            }
        }));
    };

    handleLoginSubmit = e => {
        e.preventDefault();

        AUTH_SERVICE.login(this.state.formLogin)
            .then(responseFromServer => {
                console.log('res from server: ', responseFromServer);
                const {
                    data: { user, message }
                } = responseFromServer;

                this.setState(prevState => ({
                    ...prevState,
                    formLogin: {
                        email: '',
                        password: ''
                    },
                    currentUser: user,
                    isLoggedIn: true
                }));
                alert(`${message}`);
                this.props.history.push('/home');
            })
            .catch(err => {
                // console.log(err.response);
                if (err.response && err.response.data) {
                    this.setState(prevState => ({
                        ...prevState,
                        message: err.response.data.message

                    }));
                    // this.props.history.push('/');
                    console.log(this.state.message + "*****************");
                    return (<Redirect to='/' />);
                }
            });
    };


    handleLogout = () => {
        AUTH_SERVICE.logout()
            .then(() => {
                this.setState(prevState => ({
                    ...prevState,
                    currentUser: {},
                    isLoggedIn: false
                }));
                this.props.history.push('/');
            })
            .catch(err => alert('Error while logout: ', err));
    };

    render() {
        const { state, handleSignupInput, handleSignupSubmit, handleLoginInput, handleLoginSubmit, handleLogout } = this;
        return (
            <div>
                <AuthContext.Provider
                    value={{
                        state,
                        handleSignupInput,
                        handleSignupSubmit,
                        handleLoginInput,
                        handleLoginSubmit,
                        handleLogout
                    }}
                >
                    {this.props.children}
                </AuthContext.Provider>
            </div>
        );
    }
}
export default withRouter(AuthProvider);

