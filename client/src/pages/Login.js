import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import './Login.css';

import Auth from '../utils/auth';

const styles = {
  form: {
    display: 'flex'
  }
}

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  const renderForm = () => {
    // if (data) {
    //   return (
    //     <p>
    //       Success! You may now head{' '}
    //       <Link to="/">back to the homepage.</Link>
    //     </p>
    //   )
    // }
    return (
      <div >
      <form style={styles.form} onSubmit={handleFormSubmit} className="form">
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
      </div>
    );
  };

  return (
    <main>
      <h3 className='text-center'>Login</h3>
      <div>
        {renderForm()}
        {error && <div>{error.message}</div>}
      </div>
    </main>
  );
};

export default Login;
