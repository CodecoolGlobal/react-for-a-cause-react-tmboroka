
import Header from './components/Header'
import './App.css'
import Toolbar from './components/toolbar';
import Barrier from './components/Barrier';

function App() {
  return (
    <div>
      <Header />,
      <Toolbar />,
      <Barrier id={"Wildlife needs our help now!"}/>
    </div>
  );
}

export default App;
