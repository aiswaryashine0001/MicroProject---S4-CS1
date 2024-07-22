// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formType, setFormType] = useState('login');
  const [error, setError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, such as sending data to a server
    console.log('Form submitted:', email, password);
  };

  const switchForm = () => {
    setFormType(formType === 'login' ? 'signup' : 'login');
    setError('');
  };

  return (
    <div className="LoginForm">
      <form onSubmit={handleFormSubmit} className="form">
        <h2>{formType === 'login' ? 'Login' : 'Sign Up'}</h2>
        {error && <div className="error">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{formType === 'login' ? 'Login' : 'Sign Up'}</button>
        <p onClick={switchForm} className="switch">
          {formType === 'login' ? 'Create an account' : 'Already have an account?'}
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
