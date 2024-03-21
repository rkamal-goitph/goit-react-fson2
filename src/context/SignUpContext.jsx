// SignUpContext.js
import React, { createContext, useContext, useState } from 'react';

const SignUpContext = createContext();

export const useSignUpForm = () => useContext(SignUpContext);

export const SignUpProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Assuming refs are passed via context to this function
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Log the collected form data
    console.log('Form Data:', { username, email, password });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <SignUpContext.Provider
      value={{ username, email, password, handleInputChange, handleSubmit }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
