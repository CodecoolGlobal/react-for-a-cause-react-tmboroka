import logo from './logo.png';
import twitterLogo from './twitter.svg';
import facebookLogo from './facebook.svg';
import instagramLogo from './instagram.svg';
import './App.css';

function divComponent (className){
  return (
    <div className={className}>

    </div>
  )
}

function headerComoponent (){
  return(
    <header className="header">
      <div className="headerDiv">
       <div className='logoContainer'>
       <a href="http://10.44.6.107:3000/">
        <img src={logo}></img>
        </a>
        <a href="https://twitter.com/dswfwildlife">
        <img src={twitterLogo}></img>
        </a>
        <a href="https://www.facebook.com/DSWFWildlife/">
        <img src={facebookLogo}></img>
        </a>
        <a href="https://www.instagram.com/dswfwildlife/">
        <img src={instagramLogo}></img>
        </a>
       </div>
      </div>
    </header>
  )
}

function App() {
  return (
  divComponent("Header"),
  headerComoponent()
  );
}

export default App;
