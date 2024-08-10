import './style.css' ;
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
                    <button className="btn edit-btn">Edit</button>
                    <button className="del-btn" onClick={() => getUID(contact.id)}>Delete</button>
                </div>
            </div>
    );
}
 
export default ContactCard;