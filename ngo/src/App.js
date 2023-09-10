
import Header from './components/Header'
import './App.css'
import TextContent from './components/text'
import Barrier from './components/Barrier';
import { text1, text3, text4, text5} from './components/text_content'
import { animalContainerContent, content1, content1_alt, content2, content2_alt, content3, content3_alt, second_content1, second_alt1, second_content2, second_alt2, second_content3, second_alt3 } from './components/AnimalContainer';
import doggo from './pictures/dogoo.svg'
import rhino from './pictures/rhino.svg'
import leopard from './pictures/macska.svg'
import cat from './pictures/Cat.svg'
import elephant from './pictures/Elephant.svg'
import pan from './pictures/Pansmth.svg'
import ContactCard from './components/ContactCard';
import AnimalPicture from './components/AnimalPicture'
import Footer from './components/Footer'
import logo from './pictures/logo.png';


function App() {

  return (
    <div>
      <Header />
      <Barrier title="David Shepherd Wildlife Foundation"
        content1={animalContainerContent('first', cat, second_content1, second_alt1, 'textfirst')}
        content2={animalContainerContent('second', pan, second_content2, second_alt2, 'textsecond')}
        content3={animalContainerContent('third', elephant, second_content3, second_alt3, 'textthird')} />
      <TextContent id="text1" title='Our story' text={text1} />
      <TextContent id='text3' title='Take action' text={text3} />
      <div className='pictures'>
        <AnimalPicture id="animal-pic-first" name='Elephants' pic='https://images.newscientist.com/wp-content/uploads/2023/04/03151144/SEI_150766882.jpg?crop=4:3,smart&width=1200&height=900&upscale=true'/>
        <AnimalPicture id="animal-pic-second" name='Tigers' pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mwVvxksec2UyP09vyv0751IIlpjkJpViow&usqp=CAU' />
        <AnimalPicture id="animal-pic-third" name='Rhinos' pic='https://files.worldwildlife.org/wwfcmsprod/images/White_Rhino/hero_small/3yuabfu3jq_white_rhino_42993643.jpg' />
        <AnimalPicture id="animal-pic-fourth" name='Painted dogs' pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTycx5UrpKPIhIBlYdRR09-lBv57mLMZmLmlQ&usqp=CAU' />
        <AnimalPicture id="animal-pic-fifth" name='Pangolins' pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQStsiV67cRe6HoSarb-mE85-N3Ckp91Pk50w&usqp=CAU' />
        <AnimalPicture id="animal-pic-sixth" name='Snow leopards' pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6P49RPT5hdoh9Ujf0gOdDFvLsN8lM08fRXQ&usqp=CAU' />
      </div>
      <TextContent id='text4' title='Wildlife art' text={text4} />
      <Barrier title="Wildlife needs our help now!"
        content1={animalContainerContent('first', doggo, content1, content1_alt, 'textfirst')}
        content2={animalContainerContent('second', rhino, content2, content2_alt, 'textsecond')}
        content3={animalContainerContent('third', leopard, content3, content3_alt, 'textthird')}
      />
      <TextContent id='text5' title='News and events' text={text5} />
      <TextContent id='text6' title='Contact us' />
      <ContactCard />
      <Footer logo={logo}/>

    </div>
  );
}

export default App;
