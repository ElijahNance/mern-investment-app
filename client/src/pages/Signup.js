import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import './Signup.css';

const styles = {
  form: {
    display:'flex'
  }
}

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  const renderForm = () => {
    if (data) {
      return (
      <p>
        Success! You may now head{' '}
        <Link to="/">back to the homepage.</Link>
      </p>
      )
    } 
    return (
      <form style={styles.form} onSubmit={handleFormSubmit} className="form">
        <input
          placeholder="Your username"
          name="username"
          type="text"
          value={formState.name}
          onChange={handleChange}
          className="username"
        />
        <input
          placeholder="Your email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          className="email"
        />
        <input
          placeholder="******"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
          className="password"
        />
        <button type="submit" className='submit'>
          Submit
        </button>
      </form>
    );
  };

  return (
    <main>
      <h4 className='text-center'>Sign Up</h4>
      <div>
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
    </main>
  );
};

export default Signup;
