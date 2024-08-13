import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import EditContact from './components/EditContact';

function App() {

  const API_URL='http://localhost:3500/contacts/';
  const [contacts,setContacts] = useState([]);
  const [userID,setUserID]=useState(0);
  
  useEffect(() => {
    getContacts();
  },[])

  // POST REQUEST (CREATE)
  const addContactHandler = async(contact) => {
      const response = await fetch(API_URL,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(contact)
      });
      const data = await response.json();
      console.log(data + ' is created successfully');
      getContacts();
  }

  // GET REQUEST (READ)
  const getContacts = async() => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setContacts(data);
  }

  // PUT REQUEST (UPDATE)
  const editContactHandler = async(contact) => {
    const response = await fetch(API_URL + contact.id,{
      method:'PUT',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(contact)
    });
    const data = await response.json();
    console.log(data + ' is updated successfully');
    getContacts();
  }

  // DELETE REQUEST (DELETE)
  const deleteContactHandler = async(id) => {
    setUserID(id);
    const response = await fetch(API_URL + id, {
      method:'DELETE'
    });
    const data = await response.json();
    console.log(data + ' is deleted successfully');
    getContacts();
  }

  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<ContactList contacts={contacts} deleteContactHandler={deleteContactHandler} />} />
        <Route path='/add' element={<AddContact addContactHandler={addContactHandler} />} />
        <Route path='/edit/:id' element={<EditContact contacts={contacts} editContactHandler={editContactHandler} />}/>
      </Routes>
    </Router>
  );  
}

export default App;
