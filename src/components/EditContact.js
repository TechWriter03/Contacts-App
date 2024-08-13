import { useEffect, useState } from "react";
import { useParams, useNavigate} from 'react-router-dom';

const EditContact = ({contacts, editContactHandler}) => {

    const [contact, setContact] = useState({name:'',email:''});
    const {id} = useParams(); 
    const navigate=useNavigate();

    useEffect(() => {
        const currentContact = contacts.find((itr) => itr.id === id);
        if(currentContact)
            setContact(currentContact);
        console.log(currentContact);
    },[id, contacts]);

    const edit = (e) => {
        e.preventDefault();
        if(contact.name !== '' && contact.email !== '') {
            console.log(contact);
            editContactHandler(contact);
        }
        navigate('/');
    }

    return ( 
        <div className="add-contact">
            <div><h2>Edit Contact</h2></div>
            <div>
                <form>
                    <label><h3>Name</h3></label>
                    <input type="text" placeholder="Name" name='name' value={contact.name} onChange={(e) => setContact({...contact,name:e.target.value})}/>
                    <label><h3>Email</h3></label>
                    <input type="email" placeholder="Email" name='email' value={contact.email} onChange={(e) => setContact({...contact,email:e.target.value})}/>
                    <button className="btn" type="submit" onClick={edit}>Done</button>
                </form>
            </div>
        </div>
    );
}
 
export default EditContact;
