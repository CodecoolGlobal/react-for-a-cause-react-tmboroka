import { useState } from 'react';
function CreateDonateComponent(props) {
    const [message, setMessage] = useState('');
    const [Hidden, setHidden] = useState(false);

    const handleChange = event => {
        setMessage(document.getElementById(`${props.id}`).value)
    }

    return (
        <div>
            <div style={{ display: Hidden ? "none" : "block" }} className="Donation">
                <form className='adopt-form' onSubmit={(e) => { e.preventDefault(); setHidden(!Hidden); handleChange() }}>
                    <label className='label'>Name your animal</label>
                    <input className='input' id={props.id} type="text" placeholder="Enter a name for your animal" required ></input> <br></br>
                    <input className='input' type="email" required placeholder="Enter your email!"></input><br></br>
                    <input type="submit" value="Submit" ></input>
                </form>
                <h3 className='form-text'>{props.name}</h3>
            </div>
            <div style={{ display: Hidden ? "block" : "none" }} className="Donation">
                <h3 className='form-text'>Thank you for helping us protect by adopting {message}!</h3>
            </div>
        </div>
    )
}

export default CreateDonateComponent