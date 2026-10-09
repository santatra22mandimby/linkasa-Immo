import { Component } from "react";
import CardLCD from "../components/CardLCD/CardLCD";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faAngleLeft, faAngleRight, faLocationDot, faStarHalf, faStar } from '@fortawesome/free-solid-svg-icons'
import Menuhome from "../features/Menuhome";

const listLCD = {
    home1: {
        name: 'Villa',
        image: '/public/img/villa.webp',
        startPrice: '20.000',
        review: 12,
        star: 3,
        ville: 'Moramanga'
    },
    home2: {
        name: 'Studio',
        image: '/public/img/studio.webp',
        startPrice: '50.000',
        review: 10,
        star: 2,
        ville: 'Tamatave'
    },
    home3: {
        name: 'Appartement T2',
        image: '/public/img/villa-pied-dans-leau.webp',
        startPrice: '150.000',
        review: 10,
        star: 5,
        ville: 'Ampefy'
    },
    home4: {
        name: 'Bungallow',
        image: '/public/img/villa-pied-dans-leau2.webp',
        startPrice: '100.000',
        review: 20,
        star: 3,
        ville: 'Morondava'
    },
    home5: {
        name: 'Gîte LES BLEUETS',
        image: '/public/img/Gîte LES BLEUETS (7).webp',
        startPrice: '200.000',
        review: 30,
        star: 4.5,
        ville: 'toliara'
    },
    home6: {
        name: 'Gîte LES GERANIUMS',
        image: '/public/img/Gîte LES GERANIUMS (2).webp',
        startPrice: '200.000',
        review: 30,
        star: 5,
        ville: 'toliara'
    },
    home7: {
        name: 'Gîte LES GERANIUMS',
        image: '/public/img/Gîte LES GERANIUMS (8).webp',
        startPrice: '200.000',
        review: 30,
        star: 5,
        ville: 'toliara'
    },
    home8: {
        name: 'Maison pierre verdoyante',
        image: '/public/img/Maison pierre verdoyante location saisonniere Saint-Geyrac.webp',
        startPrice: '200.000',
        review: 30,
        star: 3,
        ville: 'toliara'
    },
    home9: {
        name: 'Saint-Geyrac',
        image: '/public/img/Terrasse maison pierre location saisonniere Saint-Geyrac.webp',
        startPrice: '200.000',
        review: 30,
        star: 4,
        ville: 'toliara'
    }
}

class Home extends Component {

    state = {
        listLCD
    }

    render() {

        const showListeLCD = Object.keys(listLCD)
            .map(idL => (
                <CardLCD
                    key={idL}
                    name={listLCD[idL].name}
                    image={listLCD[idL].image}
                    avis={listLCD[idL].review}
                    ville={listLCD[idL].ville}
                    startPrice={listLCD[idL].startPrice}
                    star={listLCD[idL].star}
                />
            ))

        return (
            <>
                {/* menu */}
                { <Menuhome/> }

                {/* section-body-1 */}
                <div className='section-body-1 min-h-175 max-lg:min-h-auto columns-2 flex flex-nowrap max-lg:flex-col px-10 py-10 lg:pb-30 gap-10 max-lg:gap-0 max-lg:py-10 max-lg:px-10 max-md:px-4'>
                    
                    <div className='w-2/5 max-lg:w-full place-content-end'>
                        <h1 className='text-start leading-none text-shadow-md text-[130px] max-lg:text-[100px] max-sm:text-[70px] font-bold text-[#ffffffc4]'>
                            Linkasa Immo
                        </h1>
                        <p className='text-start text-shadow-md text-[16px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur.
                        </p>
                        <div className='flex mt-10 gap-8 max-lg:place-content-center max-md:flex-col max-md:flex-wrap'>
                            <button className='btn-blue max-md:w-2/3 text-[16px]'>
                                Devenir hôte
                            </button>
                            <button className='btn-black max-md:w-2/3 text-[16px]'>
                                Se connecter
                            </button>
                        </div>
                    </div>

                    <div className='w-3/5 max-lg:w-full place-content-end pt-25 max-lg:pt-0'>
                        <div className='titre-vente flex columns-2 absolute max-lg:relative gap-6 max-lg:gap-3 right-25 max-sm:right-0'>
                            <p className='w-3/5 text-[80px] font-bold text-[#0000007c] max-lg:text-end max-sm:text-[50px]'>studio</p>
                            <div className='w-2/5 flex columns-2 gap-6 items-center'>
                                <button className='btn-icon'>
                                    <FontAwesomeIcon icon={faAngleLeft} size="1x" />
                                </button>
                                <button className='btn-icon'>
                                    <FontAwesomeIcon icon={faAngleRight} size="1x" />
                                </button>
                            </div>
                        </div>
                        {/* slide image */}
                        <div className='flex grid-3 grid-cols-3 gap-4 items-end max-lg:items-stretch max-md:gap-2'>
                            <img className='w-4/11 max-lg:w-1/3 aspect-5/6 max-md:aspct-5/5 rounded-2xl object-cover' src='/public/img/studio.webp' />
                            <img className='w-3/11 max-lg:w-1/3 rounded-2xl aspect-5/5 object-cover' src='/public/img/villa.webp' />
                            <img className='w-3/11 max-lg:w-1/3 rounded-2xl aspect-5/5 object-cover' src='/public/img/terrain.webp' />
                        </div>
                    </div>
                </div>

                {/* section-body-2 */}
                <div className='px-30 max-lg:px-10'>
                    <div className='section-body-2 min-h-100 bg-white'>
                        <h2 className='text-[70px] max-lg:text-[50px] max-sm:text-[40px] text-[#549EA3] font-bold text-start mt-10 leading-none'>
                            Location courte durée
                        </h2>

                        {/* liste card location courte durée */}
                        <div className='flex flex-wrap gap-5 place-content-start max-lg:place-content-between mt-5'>
                            {showListeLCD}
                        </div>
                    </div>
                </div>

                {/* section-body-2 */}
                <div className='px-30 max-lg:px-10'>
                    <div className='section-body-2 min-h-100 bg-white'>
                        <h2 className='text-[70px] max-lg:text-[50px] max-sm:text-[40px] text-[#549EA3] font-bold text-start mt-10 leading-none'>
                            Location immobilier
                        </h2>

                        {/* liste card location courte durée */}
                        <div className='flex flex-wrap gap-5 place-content-start max-lg:place-content-between mt-5'>
                            {showListeLCD}
                        </div>
                    </div>
                </div>

                {/* section-body-2 */}
                <div className='px-30 max-lg:px-10'>
                    <div className='section-body-2 min-h-100 bg-white'>
                        <h2 className='text-[70px] max-lg:text-[50px] max-sm:text-[40px] text-[#549EA3] font-bold text-start mt-10 leading-none'>
                            Vente terrain
                        </h2>

                        {/* liste card location courte durée */}
                        <div className='flex flex-wrap gap-5 place-content-start max-lg:place-content-between mt-5'>
                            {showListeLCD}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home