import './App.css';
import { auth, provider } from './firebase-config';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function App() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("User signed in: ", user);
      console.log("user.credential: ", credential)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error during sign in: ", errorMessage);
    });
  };

  return (
    <button onClick={signInWithGoogle} style={buttonStyle}>
      Sign in with Google
    </button>
  );
}


const buttonStyle = {
  backgroundColor: '#4285F4', 
  color: 'white', 
  border: 'none', 
  padding: '10px 20px', 
  margin: '10px', 
  borderRadius: '5px', 
  cursor: 'pointer', 
  fontSize: '16px'
};

export default App;
