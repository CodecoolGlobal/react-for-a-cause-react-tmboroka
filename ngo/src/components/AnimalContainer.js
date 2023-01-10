function animalContainerContent(id,logo, text, altcontent) {
    return (
        <div className="header" id={id}>
        <div id={id} className="animals-container">
            <img src={logo} alt={altcontent}></img>
            <p>{text}</p>
            </div>
    </div>
    )
}
const content1  = "40% of the world’s wildlife has been wiped out in the last 50 years."
const content1_alt = "This is a cute picture of a dog"
const content2 = "Wildlife crime has been valued as a staggering multi-billion-dollar industry, threatening the survival of the natural world."
const content2_alt = "This is a picture of a rhino"
const content3 = "1,000,000 species of plants, insects, and mammals are at risk of extinction."
const content3_alt = "This picture is a cat"

export {animalContainerContent, content1, content1_alt, content2, content2_alt, content3, content3_alt}