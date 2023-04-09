import React, { useState } from 'react';

import { useMutation } from '@apollo/client';

// Still need to create mutations
// import {  } from '../utils/mutations'

import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [addUser, { error, data }] = useMutation(
        // Need to create mutation for adding a user
    );

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (err) {
            console.error(err)
        }
    };

    return (
        <>
        <main>
            <form onSubmit={handleFormSubmit}>
                {/* Username */}
                <input
                    onChange={handleChange}
                />
                {/* Email */}
                <input
                    onChange={handleChange}
                />
                {/* Password */}
                <input
                    onChange={handleChange}
                />
            </form>
        </main>
        </>
    );
};