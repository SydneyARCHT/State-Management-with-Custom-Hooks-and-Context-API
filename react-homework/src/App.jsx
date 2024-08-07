import React, { useState } from 'react';
import ContactList from './components/ContactList';
import PostList from './components/PostList';
import UserContext from './context/UserContext';
import ContactDetail from './components/ContactDetail'


function App() {
  const [contacts, setContacts] = useState([
    { name: 'John Doe', phone: '123-456-7890' },
    { name: 'Jane Smith', phone: '234-567-8901' },
    { name: 'Sydney Stiward', phone: '123-555-4444'}
  ]);

  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="App">
      <UserContext.Provider value={{ contacts, setContacts, selectedContact, setSelectedContact }}>
        <PostList />
        <ContactList />
        {selectedContact && <ContactDetail />}
      </UserContext.Provider>
    </div>
  );
}

export default App;