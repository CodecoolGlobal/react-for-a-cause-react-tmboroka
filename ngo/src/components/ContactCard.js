import React, { useState } from 'react'

function ContactCard () {
	const [isHidden, setIsHidden] = useState(false);

    return (
		<div className='formContainer'>
        <div style={{display: isHidden ? 'none' : 'block'}}>
    <form onSubmit={(e) => {e.preventDefault() ; setIsHidden(!isHidden)}} id="form">
	<label class='label' for="fname">Name:</label><br></br>
	<input type="text" id="fname" class="form" required></input><br></br>
	<label class='label'for="lname">Email:</label><br></br>
	<input type="email" id="femail" class="form" required></input><br></br>
	<label class='label' for="lname">City:</label><br></br>
	<input type="text" id="fcity" class="form" required></input><br></br>
	<label class='label' for="lname">Address:</label><br></br>
	<input type="text" id="faddress" class="form" required></input><br></br>
    <input type="submit" value="Submit"></input>
  </form>
        </div>
		<div style={{display: isHidden ? 'block' : 'none'}}>
			<h4>We appreciate you contacting us. One of our colleagues will get back in touch with you soon! <br></br>Have a great day!</h4>
		</div>
		</div>
		
    )
}

export default ContactCard