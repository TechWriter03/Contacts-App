import { useNavigate } from 'react-router-dom';
import './style.css';
import ContactCard from './ContactCard';

const ContactList = ({contacts,deleteContactHandler}) => {
    
    const getUID = (id) => {
        deleteContactHandler(id);
    }

    const renderContactList = contacts.map((contact) => {
        return (
            <ContactCard contact={contact} getUID={getUID}/>
        )
    })

    const navigate=useNavigate();
    const add = () => {
        navigate('/add');
    }

    return (
        <div className='contact-list'>
            <div className='ct-ls'>
                <h2>Contact List</h2>
                <button className='btn' onClick={add}>Add</button>
            </div>
            {renderContactList}
        </div>
    );
}

export default ContactList;