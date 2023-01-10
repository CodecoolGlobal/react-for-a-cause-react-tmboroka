
import Header from './components/Header'
import './App.css'
import Toolbar from './components/toolbar';
import TextContent from './components/text'
import Barrier from './components/Barrier';
import {text1, text2, text3, text4, text5, text6} from './components/text_content'

function App() {
  return (
    <div>
      <Header />,
      <Toolbar />,
      <Barrier title="Wildlife needs our help now!"/>
      <TextContent id="text1" title='Our story' text={text1}/>,
      <TextContent id='text2' title='Our impact' text={text2}/>,
      <TextContent id='text3' title='Take action' text={text3}/>,
      <TextContent id='text4' title='Wildlife art' text={text4}/>,
      <TextContent id='text5' title='News&events' text={text5}/>,
      <TextContent id='text6' title='Shop' text={text6}/>,
    </div>
  );
}

export default App;
