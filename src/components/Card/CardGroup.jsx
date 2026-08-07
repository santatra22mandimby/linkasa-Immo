import { act } from 'react'
import './CardGroup.css'

function CardGroup({ imgTeam, nameTeam, detail, membreTeam, joindre, quiter, updateName }) {

    return (
        <>
            <div className="cardGroup">
                <img src={imgTeam} width="450px" heigth="300px" alt="" />
                <div className='champ'>
                    <input 
                        className='border border-white mt-4 mb-4 text-center'
                        value={nameTeam} type='text'
                        onChange={updateName}
                    />
                </div>
                <div className="infos">
                    <h2>{nameTeam.toUpperCase()}</h2>
                    <h3>{membreTeam}</h3>
                    <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur obcaecati fugit necessitatibus perspiciatis accusantium illum? Maiores consectetur ut a quod reprehenderit officia fuga soluta fugit incidunt! Modi deserunt corporis cumque?</p>
                    <div className="btnGroup mt-5">
                        <button onClick={joindre}>Joingre</button>
                        <button onClick={quiter}>Quiter</button>
                        {detail ? <button>{detail}</button> : ''}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardGroup