import { configWhatsapp } from "../Assets/Lotties/lotties"
import Lottie from 'lottie-react';
import SignIn from "./SingIn";

const Welcome = () => {


    return (
        <main className="welcome">
            <Lottie {...configWhatsapp}/>
            <SignIn />
        </main>
    )
}

export default Welcome