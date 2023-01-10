import doggo from '../dogoo.svg'
import rhino from '../rhino.svg'
import leopard from '../macska.svg'

function barrierComponent(props) {
    return (
        <div className="barrier-container">
        <h1 className="barrier-header">{props.id}</h1>
        {animalContainerContent('first', doggo, "40% of the world’s wildlife has been wiped out in the last 50 years.", "This is a cute picture of a dog")}
        {animalContainerContent('second', rhino, "Wildlife crime has been valued as a staggering multi-billion-dollar industry, threatening the survival of the natural world.", "This is a picture of a rhino" )}
        {animalContainerContent('third', leopard, "1,000,000 species of plants, insects, and mammals are at risk of extinction.", "This picture is a cat")}
    </div>
    )
}

function animalContainerContent(id, logo, text, altcontent) {
    return (
    <div className="header" id={id}>
        <div className="animals-container">
            <img src={logo} alt={altcontent}></img>
            <p>{text}</p>
        </div>
    </div>
    )
}

export default barrierComponent;