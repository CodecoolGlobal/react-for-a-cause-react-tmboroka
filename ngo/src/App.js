
import Header from './components/Header'
import './App.css'
import Toolbar from './components/toolbar';
import TextContent from './components/text'
import Barrier from './components/Barrier';
import {text1, text2, text3, text4, text5, text6} from './components/text_content'
import {animalContainerContent, content1, content1_alt, content2, content2_alt, content3, content3_alt, second_content1, second_alt1, second_content2, second_alt2, second_content3,second_alt3} from './components/AnimalContainer';
import doggo from './pictures/dogoo.svg'
import rhino from './pictures/rhino.svg'
import leopard from './pictures/macska.svg'
import cat from './pictures/Cat.svg'
import elephant from './pictures/Elephant.svg'
import pan from './pictures/Pansmth.svg'
import ContactCard from './components/ContactCard';
import AnimalPicture from './components/AnimalPicture'
import './ContactCard.css'



function App() {

  return (
    <div>
      <Header />
      <Toolbar />
      <TextContent id="text1" title='Our story' text={text1}/>
      <TextContent id='text2' title='Our impact' text={text2}/>
      <Barrier title="Our Impact"
      content1={animalContainerContent('first',cat, second_content1,second_alt1 )}
      content2={animalContainerContent('second',pan, second_content2, second_alt2)}
      content3={animalContainerContent('third', elephant, second_content3, second_alt3)}/>
      <TextContent id='text3' title='Take action' text={text3}/>
      <div className='pictures'>
      <AnimalPicture name='Elephants' pic='https://davidshepherd.org/wp-content/uploads/2020/05/elephant-feature-james-kydd-david-shepherd-wildlife-foundation.jpg'/>
      <AnimalPicture name='Tigers' pic='https://davidshepherd.org/wp-content/uploads/2020/04/walking-tiger-feature-surya-ramachandran-david-shepherd-wildlife-foundation.jpg'/>
      <AnimalPicture name='Rhinos' pic='https://davidshepherd.org/wp-content/uploads/2020/05/rhino-feature-james-kydd-david-shepherd-wildlife-foundation.jpg'/>
      <AnimalPicture name='Painted dogs' pic='https://davidshepherd.org/wp-content/uploads/2020/05/painted-dog-pack-feature-nicholas-dyer-david-shepherd-wildlife-foundation.jpg' />
      <AnimalPicture name='Pangolins' pic='https://davidshepherd.org/wp-content/uploads/2020/05/pangolin-feature-johan-vermeulen-david-shepherd-wildlife-foundation.jpg' />
      <AnimalPicture name='Snow leopards' pic='https://davidshepherd.org/wp-content/uploads/2020/05/snow-leopard-Behzad-Larry-feature-david-shepherd-wildlife-foundation.jpg' />
      </div>
      <TextContent id='text4' title='Wildlife art' text={text4}/>
      <TextContent id='text5' title='News and events' text={text5}/>
      <Barrier title="Wildlife needs our help now!"
      content1= {animalContainerContent('first', doggo, content1, content1_alt)} 
      content2= {animalContainerContent('second', rhino, content2, content2_alt )}
      content3= {animalContainerContent('third', leopard, content3, content3_alt)}
      />
      <TextContent id='text6' title='Shop' text={text6}/>
      <ContactCard/>
      
    </div>
  );
}

export default App;
