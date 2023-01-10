

function barrierComponent(props) {
    return (
        <div className="barrier-container">
        <h1 className="barrier-header">{props.title}</h1>
        
            {props.content1}
            {props.content2}
            {props.content3}
    </div>
    )
}


export default barrierComponent;