import './style.css';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = ({contacts,deleteContactHandler}) => {
    
    const getUID = (id) => {
        deleteContactHandler(id);
    }

    const renderContactList = contacts.map((contact) => {
        return (
            <ContactCard contact={contact} getUID={getUID}/>
        )
    })

    return (
        <div className='contact-list'>
            <div className='ct-ls'>
                <h2>Contact List</h2>
                <Link to='/add'>
                    <button className='btn'>Add</button>
                </Link>
            </div>
            {renderContactList}
        </div>
    );
}

export default ContactList;
