import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Menuhome extends Component {
    state ={
        isClick: false
    }

    clickMenu = () => {
        const isClick = !this.state.isClick
        console.log(isClick)
        this.className = 'border-b-2'
    }

    render() {
        const {isClick} = this.state

        return (
            <>
                <div className="flex w-full bg-[#549ea3a6] backdrop-blur-xs fixed z-99">
                    <div className="w-2/10 flex place-content-center justify-center">
                        <img src="/public/img/logo/linkasaLogo.png"
                            alt="logo-linkasa-immo"
                            className="w-2/6 aspect-auto object-contain"
                        />
                    </div>
                    <div className="w-8/10 flex justify-end px-8 max-md:hidden">
                        <ul className="flex gap-5 items-center">
                            <li onClick={this.clickMenu} className="text-[16px] font-medium cursor-pointer">Accueil</li>
                            <li className="text-[16px] font-medium cursor-pointer">A propos</li>
                            <li className="text-[16px] font-medium cursor-pointer">Qui somme-nous</li>
                            <li className="text-[16px] font-medium cursor-pointer">Contact</li>
                            <li className="text-[16px] font-medium cursor-pointer rounded-2xl py-1 px-5 bg-white text-[#549ea3a6]">
                                <FontAwesomeIcon className="me-2" icon={faUserCircle} size='1x' />
                                Se connecter
                            </li>
                        </ul>
                    </div>
                    <div className="hidden max-md:w-8/10 max-md:flex justify-end items-center">
                        <FontAwesomeIcon className="me-2" icon={faBars} size='1x' />
                    </div>
                </div>
            </>
        )
    }
}

export default Menuhome