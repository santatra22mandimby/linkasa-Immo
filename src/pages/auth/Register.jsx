import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUserCircle, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
import './Authenticator.css'

class Register extends Component {
    render() {
        return (
            <>
                <div className="authentification flex h-dvh w-svw items-center place-content-center">
                    <div className="grid backdrop-blur-xs place-content-center h-auto py-10 px-18 shadow-2xs border rounded-2xl bg-[#0000006e]">
                        <h1 className='leading-none text-shadow-md text-[50px] font-bold text-[#ffffffc4]'> S'inscrire </h1>
                        <div className="flex items-center justify-between border-b-2 mt-10">
                            <input className="py-2 px-1 text-white" name="identifiant" type="text" placeholder="Identifiant" required />
                            <FontAwesomeIcon icon={faUserCircle} size="1x" />
                        </div>
                        <div className="flex items-center justify-between border-b-2 mt-5">
                            <input className="py-2 px-1 text-white" name="mdp" type="text" placeholder="Mot de passe" required />
                            <FontAwesomeIcon icon={faEyeSlash} size="1x" />
                        </div>

                        <button className="w-xs btn-blue mt-8" type="submit"> Se connecter </button>
                        <div className="flex place-content-center items-center justify-between mt-8">
                            <span className="w-1/5 border-b-2"></span>
                            <a className="" href="">ou se connecter avec</a>
                            <span className="w-1/5 border-b-2"></span>
                        </div>
                        <div className="flex justify-center gap-5 mt-8">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                            <FontAwesomeIcon icon={faGoogle} size="2x" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Register