
import logo from '../logo.png';
import twitterLogo from '../twitter.svg';
import facebookLogo from '../facebook.svg';
import instagramLogo from '../instagram.svg';

function headerComoponent (){
    return(
      <header className="header">
        <div className="headerDiv">
         <div className='logoContainer'>
         <a href="http://10.44.6.107:3000/">
          <img src={logo} alt='logo'></img>
          </a>
          <a href="https://twitter.com/dswfwildlife">
          <img src={twitterLogo} alt='twitter logo'></img>
          </a>
          <a href="https://www.facebook.com/DSWFWildlife/">
          <img src={facebookLogo} alt='facebook logo'></img>
          </a>
          <a href="https://www.instagram.com/dswfwildlife/">
          <img src={instagramLogo} alt='instagram logo'></img>
          </a>
         </div>
         <div className='button-containers'>
         <input className='buttons' type="button" value="Donate"></input>
         <input className='buttons' type="button" value="My account"></input>
         <input className='buttons' type="button" value="Contact us"></input>
         </div>
        </div>
      </header>
    )
  }

export default headerComoponent