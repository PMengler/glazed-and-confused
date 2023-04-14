import React, {useState} from 'react';

import '../styles/login-register.css';
import '../styles/app.css';
import Header from '../components/Header';

const LoginRegister = () => {
    // const [formState, setFormState] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    // });

    // const [addUser, { error, data }] = useMutation(
    //     // Need to create mutation for adding a user
    // );

    // const handleChange = (e) => {
    //     const { name, value } = e.target;

    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     });
    // };

    // const handleFormSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const { data } = await addUser({
    //             variables: { ...formState },
    //         });

    //         Auth.login(data.addUser.token);
    //     } catch (err) {
    //         console.error(err)
    //     }
    // };
    return (
        <div>
            <Header />
            <section className="login-register-main">
                <div className="login-register-container">
                    <div className="login">
                        <div className="login-title">LOGIN</div>
                        <div className="login-input">
                            <input placeholder="Username"/><br/>
                            <input placeholder="Password"/><br/>
                            <button className="login-btn btn-blue btn-small">LOGIN</button>
                        </div>
                    </div>
                
                    <div className="register">
                        <div className="register-title">REGISTER</div>
                        <div className="register-input">
                            <input placeholder="Username"/><br/>
                            <input placeholder="Email Address"/><br/>
                            <input placeholder="Password"/><br/>
                            <button className="register-btn btn-blue btn-small">REGISTER</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LoginRegister;