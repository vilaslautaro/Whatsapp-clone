import { signInWithPopup } from "firebase/auth";
import { auth, GoogleProvider } from "../firebase";
import googleLogo from "../assets/images/google_logo.png";

const SignIn = () => {

    const signInWithGoogle = () => {
        signInWithPopup(auth, GoogleProvider)
        .then( result => {
            const user = result.user;
            console.log(user)
        })
        .catch( error => {
            console.log(error.message)
        })
    }

    return (
        <div style={{ textAlign: "center" }}>
            <button className="sign-in" onClick={signInWithGoogle} > <img src={googleLogo} alt="google logo" className="google-logo" />Inicia sesión con Google</button>
            <p>Bienvenido, disfruta de esta experiencia.</p>
        </div>
    );
}

export default SignIn;
