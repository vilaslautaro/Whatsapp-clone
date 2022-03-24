import { auth } from "../firebase"


const SignOut = () => {


    return auth.currentUser && 
    (
        <div>
            <button className='sign-out' onClick={() => auth.signOut }> Salir </button>
        </div>
    )
}


export default SignOut