
import logo from '../pictures/logo.png';
import twitterLogo from '../pictures/twitter.svg';
import facebookLogo from '../pictures/facebook.svg';
import instagramLogo from '../pictures/instagram.svg';

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
          <a className='buttons' href='#text3'>
         <button className='buttons' onClick={linkButton}>Donate</button></a>
         <a className='buttons' href='#ContactCard'><button className='buttons'>Contact us</button></a>
         </div>
        </div>
      </header>
    )
  }

  function linkButton() {
    return 
  }

export default headerComoponent