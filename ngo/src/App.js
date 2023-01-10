
import Header from './components/Header'
import './App.css'
import Toolbar from './components/toolbar';
import TextContent from './components/text'
import Barrier from './components/Barrier';
import {text1, text2, text3, text4, text5, text6} from './components/text_content'
import {animalContainerContent, content1, content1_alt, content2, content2_alt, content3, content3_alt, second_content1, second_alt1, second_content2, second_alt2, second_content3,second_alt3} from './components/AnimalContainer';
import Donation from './components/Donation';
import doggo from './pictures/dogoo.svg'
import rhino from './pictures/rhino.svg'
import leopard from './pictures/macska.svg'
import cat from './pictures/Cat.svg'
import elephant from './pictures/Elephant.svg'
import pan from './pictures/Pansmth.svg'
import ContactCard from './components/ContactCard';



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
      <TextContent id='text4' title='Wildlife art' text={text4}/>
      <TextContent id='text5' title='News&events' text={text5}/>
      <Barrier title="Wildlife needs our help now!"
      content1= {animalContainerContent('first', doggo, content1, content1_alt)} 
      content2= {animalContainerContent('second', rhino, content2, content2_alt )}
      content3= {animalContainerContent('third', leopard, content3, content3_alt)}
      />
      <TextContent id='text6' title='Shop' text={text6}/>
      <ContactCard/>
      <Donation/>
    </div>
  );
}

export default App;
