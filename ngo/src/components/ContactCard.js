function ContactCard () {
    return (
        <div>
    <form id="form">
	<label class='label' for="fname">Name:</label><br></br>
	<input type="text" id="fname" class="form" required></input><br></br>
	<label class='label'for="lname">Email:</label><br></br>
	<input type="text" id="femail" class="form" required></input><br></br>
	<label class='label' for="lname">City:</label><br></br>
	<input type="text" id="fcity" class="form" required></input><br></br>
	<label class='label' for="lname">Address:</label><br></br>
	<input type="text" id="faddress" class="form" required></input><br></br>
    <button>Submit</button>
  </form>
        </div>
    )
}

export default ContactCard