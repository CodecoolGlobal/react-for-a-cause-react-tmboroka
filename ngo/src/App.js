
import Header from './components/Header'
import './App.css'
import Toolbar from './components/toolbar';
import Text from './components/text'
import Barrier from './components/Barrier';


function App() {
  return (
    <div>
      <Header />,
      <Toolbar />,
      <Text />
      <Barrier id={"Wildlife needs our help now!"}/>
    </div>
  );
}

export default App;
