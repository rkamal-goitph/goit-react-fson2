// SignUpForm.js
import React from 'react';
import { useSignUpForm } from 'context/SignUpContext';

export const ControlledSignUpForm = () => {
  const { username, email, password, handleInputChange, handleSubmit } =
    useSignUpForm();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};
