import './style.css' ;
import { Link } from 'react-router-dom';
import user from '../images/user-logo.png';

const ContactCard = ({contact,getUID}) => {

    return ( 
        <div className="contact-card">
                <div>
                    <img src={user} alt="logo" className="user-logo" />
                </div>
                <div>
                    <h3>{contact.name}</h3>
                    <h3>{contact.email}</h3>
                    <Link to={`/edit/${contact.id}`}>
                        <button className="btn edit-btn">Edit</button>
                    </Link>
                    <button className="del-btn" onClick={() => getUID(contact.id)}>Delete</button>
                </div>
            </div>
    );
}
 
export default ContactCard;
