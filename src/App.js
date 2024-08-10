import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {

  // const LOCAL_STORAGE_KEY="contacts";
  const API_URL='http://localhost:3500/contacts/';
  const [contacts,setContacts] = useState([]);
  const [userID,setUserID]=useState(0);

  // POST REQUEST
  const addContactHandler = async(contact) => {
      await fetch(API_URL,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(contact)
      });
      setContacts([...contacts, contact]);
  }

  // GET REQUEST
  const getContacts = async() => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setContacts(data);
  }

  useEffect(() => {
    // const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // setContacts(retrievedContacts);
    getContacts();
  },[])

  // useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  // }, [contacts])

  // DELETE REQUEST
  const deleteContactHandler = async(id) => {
    setUserID(id);
    console.log(id);
    
    // const newContacts=contacts.filter((contact) => contact.id!==id);
    // setContacts(newContacts);
    const response = await fetch(API_URL + id,{
      method:'DELETE'
    });
    const data = await response.json();
    console.log(data);
    setContacts(data);
  }

  return (
    <Router>
      <Header/>
      <Routes>
        <Route eaxct path='/' element={<ContactList contacts={contacts} deleteContactHandler={deleteContactHandler}/>} />
        <Route path='/add' element={<AddContact addContactHandler={addContactHandler}/>} />
      </Routes>
    </Router>
  );
}

export default App;