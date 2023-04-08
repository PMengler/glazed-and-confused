import React, { useState } from 'react';

import { useMutation } from '@apollo/client';

// Still need to create mutations
// import {  } from '../utils/mutations'

// Still need to create the util functions
// import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [addUser, { error, data }] = useMutation(
        // Need to create mutation for adding a user
    );

    return (
        <>
        <main>
            
        </main>
        </>
    );
};