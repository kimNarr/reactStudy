function Box({name ="누구",title="키",children}) {
    return(
        <div className="box">
            <h2>{name}</h2>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Box;