import {useState} from 'react';
function CreateDonateComponent() {
    const [message, setMessage] = useState('');
    const [number, setNumber] = useState('');

    const handleNumberChange = event =>{
        setNumber(event.target.value)
    }

    const handleChange = event =>{
        setMessage(event.target.value)
    }

    const handleClick = () =>{
        setMessage('')
        setNumber('')
    }

    return(
        <div className="Donation">
            <form onSubmit={(e) => {e.preventDefault();handleClick()}}>
                <input type="number" placeholder="Enter an amount please!" min="1" required value={number} onChange={handleNumberChange}></input> <br></br>
                <input type="email" required placeholder="Enter your email!" value={message} onChange={handleChange}></input><br></br>
                <input type="submit" value="Submit" ></input>
            </form>
        </div>
    )
}

export default CreateDonateComponent