import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

import '../styles/login-register.css';
import '../styles/app.css';

function LoginRegister(props) {
  // For Registering
  const [signupFormState, setSignupFormState] = useState({
    email: '',
    password: '',
  });
  const [addUser] = useMutation(ADD_USER);

  const handleSignupFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: signupFormState.email,
        password: signupFormState.password,
        username: signupFormState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleSignupChange = (event) => {
    const { name, value } = event.target;
    setSignupFormState({
      ...signupFormState,
      [name]: value,
    });
  };

  // For Sign In
  const [loginFormState, setLoginFormState] = useState({
    username: '',
    password: '',
  });
  const [login, { error }] = useMutation(LOGIN);

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          username: loginFormState.username,
          password: loginFormState.password,
        },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginFormState({
      ...loginFormState,
      [name]: value,
    });
  };
  return (
    <div>
      <section className="login-register-main">
        <div className="login-register-container">
          <div className="login">
            <div className="login-title">LOGIN</div>
            <div className="login-input">
              <form onSubmit={handleLoginFormSubmit}>
                <input
                  placeholder="Username"
                  name="username"
                  type="username"
                  id="username"
                  onChange={handleLoginChange}
                />
                <br />
                <input
                  placeholder="Password"
                  name="password"
                  type="password"
                  id="pwd"
                  onChange={handleLoginChange}
                />
                <br />
                {error ? (
                  <div>
                    <p className="error-text">
                      The provided credentials are incorrect
                    </p>
                  </div>
                ) : null}
                <button className="login-btn btn-blue btn-small">LOGIN</button>
              </form>
            </div>
          </div>

          <div className="register">
            <div className="register-title">REGISTER</div>
            <div className="register-input">
              <form onSubmit={handleSignupFormSubmit}>
                <input
                  placeholder="Username"
                  name="username"
                  type="username"
                  id="username"
                  onChange={handleSignupChange}
                />
                <br />
                <input
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleSignupChange}
                />
                <br />
                <input
                  placeholder="Password"
                  name="password"
                  type="password"
                  id="password"
                  onChange={handleSignupChange}
                />
                <br />
                <button className="register-btn btn-blue btn-small">
                  REGISTER
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginRegister;
