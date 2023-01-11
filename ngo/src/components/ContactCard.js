import React, { useState } from 'react'
import Donation from './Donation';
function gatherLogData() {
	const data = {
		name: document.getElementById('fname').value,
		email: document.getElementById('femail').value,
		city: document.getElementById('fcity').value,
		adress: document.getElementById('faddress').value,
}
console.log(data)

}

function ContactCard () {
	const [isHidden, setIsHidden] = useState(false);
	console.log(document.getElementById('form'))
    return (
		<div className='formContainer'>
        <div className='actualForm' style={{display: isHidden ? 'none' : 'flex'}}>
    <form onSubmit={(e) => {e.preventDefault() ; gatherLogData(); setIsHidden(!isHidden)}} id="form">
	<label class='label' for="fname" name="name">Name:</label><br></br>
	<input type="text" id="fname" class="form" required></input><br></br>
	<label class='label'for="lname" name="email">Email:</label><br></br>
	<input type="email" id="femail" class="form" required></input><br></br>
	<label class='label' for="lname" name="city">City:</label><br></br>
	<input type="text" id="fcity" class="form" required></input><br></br>
	<label class='label' for="lname" name="address">Address:</label><br></br>
	<input type="text" id="faddress" class="form" required></input><br></br>
    <input type="submit" value="Submit"></input>
  </form>
        </div>
		<div  style={{display: isHidden ? 'flex' : 'none'}}>
			<h4>We appreciate you contacting us. One of our colleagues will get back in touch with you soon! <br></br>Have a great day!</h4>
		</div>
		<Donation/>
		</div>
    )
}

export default ContactCard