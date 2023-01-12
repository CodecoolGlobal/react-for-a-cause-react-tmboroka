function animalContainerContent(id,logo, text, altcontent, idp) {
    return (
        <div className="header" id={id}>
        <div className="animals-container">
            <img   src={logo} alt={altcontent}></img>
            <p id={idp} className="text">{text}</p>
            </div>
    </div>
    )
}
//First barrier texts

const content1  = "40% of the world’s wildlife has been wiped out in the last 50 years."
const content1_alt = "This is a cute picture of a dog"
const content2 = "Wildlife crime has been valued as a staggering multi-billion-dollar industry, threatening the survival of the natural world."
const content2_alt = "This is a picture of a rhino"
const content3 = "1,000,000 species of plants, insects, and mammals are at risk of extinction."
const content3_alt = "This picture is a cat"


//Second barrier texts

const second_content1 = "We fight wildlife crime through ranger programmes and law enforcement initiatives."
const second_alt1 = "This is a picture about a cat"
const second_content2 = "We protect endangered species in their natural habitats."
const second_alt2 = "This is a picture pangolin"
const second_content3 = "We engage with communities to educate and raise awareness to reduce threats to wildlife."
const second_alt3 = "This is a picture of an elephant"

export {animalContainerContent, content1, content1_alt, content2, content2_alt, content3, content3_alt, second_content1, second_alt1, second_content2, second_alt2, second_content3,second_alt3}