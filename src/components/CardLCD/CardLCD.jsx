import { act } from "react";

/* icon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf, faLocationDot } from "@fortawesome/free-solid-svg-icons";

/* theme.js */
import { theme } from "../../theme";

function CardLCD({startPrice, name, ville, avis, image, star}) {
    const showStar = []

    for(let i=0; i<star; i++) {
        showStar.push(<FontAwesomeIcon icon={faStar} className='text-[#549EA3]' size='1x' />)
    }

    const colorPrimary = theme.colors.primary

    return (
        <>
            <div className='w-2/11 max-lg:w-3/10 max-md:w-5/11 flex-col'>
                <div className='flex flex-col items-center relative'>
                    <img className='rounded-t-xl aspect-3/2 object-cover' src={image} />
                    <div className='bg-[#41382096] backdrop-blur-md flex justify-evenly w-4/5 px-3 py-1 rounded-4xl absolute -bottom-3'>
                        <p className='text-[15px] max-md:text-[13px] leading-none'>{startPrice} <span>Ar / nuitée</span></p>
                    </div>
                </div>

                {/* détail */}
                <div className='pt-6 px-2 flex flex-col items-start pb-5'>
                    <p className='text-black text-[20px] font-semibold'>{name}</p>
                    <div className='flex mt-3 items-center'>
                        <FontAwesomeIcon icon={faLocationDot} className='text-[#549EA3]' size='1x' />
                        <p className='text-[#586264]'>{ville}</p>
                    </div>
                    <div className='flex mt-1 items-center'>
                        {
                            showStar
                        }
                        <p className='text-[#586264] ms-2'> {avis} avis</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardLCD