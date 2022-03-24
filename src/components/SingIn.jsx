import googleLogo from '../Assets/Images/googleicon.png'
import { signInWithPopup } from 'firebase/auth'
import { auth, GoogleProvider } from '../firebase'

const SignIn = () => {


    const signIntWithGoogle = () => {
        signInWithPopup(auth, GoogleProvider)
        .then( res => {
            console.log(res)
        })
        .catch( e => console.log(e.message))
    }

    return (
        <div style={{ textAlign: "center"}}>
            <button className="sign-in" onClick={signIntWithGoogle}>
                <img className="logoGoogle" src={googleLogo} alt="Logo Google" />
                Inicia sesion con Google
            </button>
                <p className='textWelcome'>Bienvenido, disfruta de esta experiencia.</p>
        </div>
    )
}

export default SignIn