import React, { useState } from 'react'
function gatherLogData() {
	const data = {
		name: document.getElementById('fname').value,
		email: document.getElementById('femail').value,
		subject: document.getElementById('fcity').value,
		message: document.getElementById('faddress').value,
	}
	console.log(data)

}

function ContactCard() {
	const [isHidden, setIsHidden] = useState(false);
	return (
		<div className='formContainer'>
			<div className='actualForm' style={{ display: isHidden ? 'none' : 'flex' }}>
				<form onSubmit={(e) => { e.preventDefault(); gatherLogData(); setIsHidden(!isHidden) }} id="form">
					<label className='label' for="fname" name="name">Name:</label><br></br>
					<input type="text" id="fname" className="form" required></input><br></br>
					<label className='label' for="lname" name="email">Email:</label><br></br>
					<input type="email" id="femail" className="form" required></input><br></br>
					<label className='label' for="lname" name="city">Subject:</label><br></br>
					<input type="text" id="fcity" className="form" required></input><br></br>
					<label className='label' for="lname" name="address">Message:</label><br></br>
					<input type="text" id="faddress" className="form" required></input><br></br>
					<input type="submit" value="Submit"></input>
				</form>
			</div>
			<div style={{ display: isHidden ? 'flex' : 'none' }}>
				<h4 className='form-text'>We appreciate you contacting us. One of our colleagues will get back in touch with you soon! <br></br>Have a great day!</h4>
			</div>
		</div>
	)
}

export default ContactCard