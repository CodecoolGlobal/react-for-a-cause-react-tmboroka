function TextContent(props) {
    const title = props.title
    const text = props.text
    const id = props.id

    return (
        <div id={id} className='text-comp'>
            <h1 className='title-comp'>{title}</h1>
            <p className='text'>{text}</p>
        </div>
    )
}

export default TextContent;