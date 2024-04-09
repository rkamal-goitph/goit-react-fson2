// ControlledSignUpForm.js
import React, { useMemo } from 'react';
import { useSignUpForm } from 'context/SignUpProvider';
import styles from './ControlledSignUpForm.module.css';

export const ControlledSignUpForm = () => {
  const { username, email, password, handleInputChange, handleSubmit } =
    useSignUpForm();

  // Memoize form validation
  const isFormValid = useMemo(() => {
    const isUsernameValid = username.length >= 3;
    const isEmailValid = email.includes('@'); // Simple validation for example
    const isPasswordValid = password.length >= 8;
    return isUsernameValid && isEmailValid && isPasswordValid;
  }, [username, email, password]);

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
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
        {!isFormValid && (
          <p className={styles.error}>
            Form is invalid. Please check your inputs.
          </p>
        )}
        <button type="submit" disabled={!isFormValid}>
          Sign Up
        </button>
      </form>
    </div>
  );
};
