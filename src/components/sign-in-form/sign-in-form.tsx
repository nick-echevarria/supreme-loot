/* eslint-disable @typescript-eslint/no-empty-function */
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  googleSignInStart,
  emailSignInStart
} from '../../store/redux/user/user.actions';

import { AuthError } from 'firebase/auth';

import FormInput from '../form-input/form-input';
import Button from '../button/button';

const defaultFormFields = {
  email: '',
  password: ''
};

const SignInForm: React.FC = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      alert('Sign in successful!');
      resetFormFields();
    } catch (error) {
      switch ((error as AuthError).code) {
        case 'auth/wrong-password':
          alert('Incorrect password for email supplied');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email!');
          break;
        default:
          console.log('Error signing in:', error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign ip with your email and password:</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
