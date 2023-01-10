
import Header from './components/Header'
import './App.css'
import Toolbar from './components/toolbar';
import {TextContent, text1, text2, text3, text4, text5, text6} from './components/text'
import Barrier from './components/Barrier';
import {animalContainerContent, content1, content1_alt, content2, content2_alt, content3, content3_alt} from './components/AnimalContainer';
import doggo from './dogoo.svg'
import rhino from './rhino.svg'
import leopard from './macska.svg'

function App() {
  return (
    <div>
      <Header />,
      <Toolbar />,
      <TextContent id="text1" title='Our story' text={text1}/>,
      <TextContent id='text2' title='Our impact' text={text2}/>,
      <Barrier title="Wildlife needs our help now!"
      content1= {animalContainerContent('first', doggo, content1, content1_alt)} 
      content2= {animalContainerContent('second', rhino, content2, content2_alt )}
      content3= {animalContainerContent('third', leopard, content3, content3_alt)}
      />
      <TextContent id='text3' title='Take action' text={text3}/>,
      <TextContent id='text4' title='Wildlife art' text={text4}/>,
      <TextContent id='text5' title='News&events' text={text5}/>,
      <TextContent id='text6' title='Shop' text={text6}/>,
    </div>
  );
}

export default App;
