Button = ({joindre, quiter, detail}) => {
    return (
        <>
            <div className="btnGroup">
                <button onClick={joindre}>Joingre</button>
                <button onClick={quiter}>Quiter</button>
                {detail ? <button>{detail}</button> : ''}
            </div>
        </>
    )
}

export default Button