/* eslint-disable @typescript-eslint/no-empty-function */
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';
import { AuthError } from 'firebase/auth';

import { signUpStart } from '../../store/redux/user/user.actions';

import FormInput from '../form-input/form-input';
import Button from '../button/button';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUpForm: React.FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //confirm passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      alert('User successfully created!');
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === 'auth/email-already-in-use') {
        alert('Email already in use');
      } else {
        console.log('Error in user creation:', error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password:</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="displayName"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
