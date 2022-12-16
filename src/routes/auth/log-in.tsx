import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

const LogIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h2>This is the sign in page!</h2>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
    </div>
  );
};

export default LogIn;
