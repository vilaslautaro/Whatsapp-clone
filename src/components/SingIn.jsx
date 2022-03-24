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
                <img className="google-logo" src="https://res.cloudinary.com/dn7qsxzdf/image/upload/v1648143251/react-clone-whatsapp/google_logo_rp7asg.png" alt="Logo Google" />
                Inicia sesion con Google
            </button>
                <p className='textWelcome'>Bienvenido, disfruta de esta experiencia.</p>
        </div>
    )
}

export default SignIn