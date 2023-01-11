
function AnimalPicture (props) {
    const name = props.name
    const pic = props.pic

    return (
        <div className="animal-pic-container">
            <img src={pic} alt={name}></img>
            <h2>{name}</h2>
            </div>    
    )
}

export default AnimalPicture