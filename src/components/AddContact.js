import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'
import {v4 as uuidv4} from 'uuid';

const AddContact = ({addContactHandler}) => {

    const [contact,setContact]=useState({id:uuidv4(),name:"",email:""})
    const navigate=useNavigate();

    const add = (e) => {
        e.preventDefault();
        if(contact.name === "" || contact.email === "") {
            alert("All fields are mandatory !")
            return;
        }
        addContactHandler(contact);
        setContact({id:uuidv4(),name:"",email:""});
        navigate('/');
    }

    return ( 
        <div className="add-contact">
            <div><h2>Add Contact</h2></div>
            <div>
                <form>
                    <label><h3>Name</h3></label>
                    <input type="text" placeholder="Name" name='name' value={contact.name} onChange={(e) => setContact({...contact,name:e.target.value})}/>
                    <label><h3>Email</h3></label>
                    <input type="email" placeholder="Email" name='email' value={contact.email} onChange={(e) => setContact({...contact,email:e.target.value})}/>
                    <button className="btn" onClick={add}>Add</button>
                </form>
            </div>
        </div>
    );
}
 
export default AddContact;
