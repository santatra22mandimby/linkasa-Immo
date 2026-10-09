import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUserCircle, faEyeSlash, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"
import './Authenticator.css'

class Register extends Component {
    render() {
        return (
            <>
                <div className="authentification flex h-dvh w-svw items-center place-content-center">
                    <div className="grid backdrop-blur-xs place-content-center w-auto h-auto py-10 px-10 shadow-2xs border rounded-2xl bg-[#0000006e]">
                        <h1 className='leading-none text-shadow-md text-[50px] font-bold text-[#ffffffc4]'> S'inscrire </h1>
                        <div className="flex colums-2 flex-nowrap gap-8">
                            <div className="w-1/2">
                                <div className="flex items-center justify-between border-b-2 mt-10">
                                    <input className="py-2 px-1 text-white" name="nom" type="text" placeholder="Nom" required />
                                    <FontAwesomeIcon icon={faUserCircle} className='text-[#549EA3]' size="1x" />
                                </div>
                                <div className="flex items-center justify-between border-b-2 mt-5">
                                    <input className="py-2 px-1 text-white" name="prenom" type="text" placeholder="Prénom" required />
                                    <FontAwesomeIcon icon={faUserCircle} className='text-[#549EA3]' size="1x" />
                                </div>
                                <div className="flex items-center justify-between border-b-2 mt-5">
                                    <input className="py-2 px-1 text-white" name="phone" type="text" placeholder="Phone" />
                                    <FontAwesomeIcon icon={faPhone} className='text-[#549EA3]' size="1x" />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="flex items-center justify-between border-b-2 mt-10">
                                    <input className="py-2 px-1 text-white" name="mail" type="text" placeholder="Email" required />
                                    <FontAwesomeIcon icon={faEnvelope} className='text-[#549EA3]' size="1x" />
                                </div>
                                <div className="flex items-center justify-between border-b-2 mt-5">
                                    <input className="py-2 px-1 text-white" name="pseudo" type="text" placeholder="Pseudo" required />
                                    <FontAwesomeIcon icon={faUserCircle} className='text-[#549EA3]' size="1x" />
                                </div>
                                <div className="flex items-center justify-between border-b-2 mt-5">
                                    <input className="py-2 px-1 text-white" name="mdp" type="text" placeholder="Mot de passe" required />
                                    <FontAwesomeIcon icon={faEyeSlash} className='text-[#549EA3]' size="1x" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="flex mt-8">
                                <input type="checkbox" name="valideCondition" required/>
                                <p className="text-[14px] ml-3">Voulez-vous valider les <a href="" className="font-bold border-b">CGV</a> et les <a href="" className="font-bold border-b">politiques de confidentialités</a></p>
                            </div>
                            <button className="w-xs btn-blue mt-8" type="submit"> Enregistrer </button>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default Register