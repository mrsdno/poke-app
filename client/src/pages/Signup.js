import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import '../App.css'

import Auth from '../utils/auth';

const SignUp = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [addUser, { error }] = useMutation(ADD_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try{
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        }
        catch (e) {
            console.error(e);
        }
    };

    return (
        <main>
            <div className='SignUp'>
                <div className='card-body'>
                    <h3 className='card-title red-text' style={{color:"white"}}>
                        Sign Up!
                    </h3>
                    <form className='login-form' onSubmit={handleFormSubmit}>

                        {/* username input */}
                        <input 
                        className='form-1'
                        name='username'
                        type='username'
                        id='user-signup'
                        placeholder='Username'
                        value={formState.username}
                        onChange={handleChange}
                        />
                        
                        <br></br>

                        {/* Email input */}
                        <input
                        className='form-1'
                        name='email'
                        type='email'
                        id='email-signup'
                        placeholder='Your Email'
                        value={formState.email}
                        onChange={handleChange}
                        />

                        <br></br>

                        {/* password input */}
                        <input
                        className='form-1'
                        name='password'
                        type='password'
                        id='password-signup'
                        placeholder='********'
                        value={formState.password}
                        onChange={handleChange}
                        />

                        <br></br>

                        <button className='btn-3' type='submit'>
                            Submit
                        </button>

                    </form>

                    {/* Gives error if signup fails */}
                    {error && <div>Signup Failed</div>}
                </div>
            </div>
        </main>

    );
};


export default SignUp;