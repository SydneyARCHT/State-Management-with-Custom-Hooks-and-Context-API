import React, { createContext } from 'react';
import ContactList from '../components/ContactList';
import ContactDetail from '../components/ContactDetail';

const UserContext = createContext({
  contacts: [],
  selectedContact: null,
  setContacts: () => {},
  setSelectedContact: () => {},
});


export default UserContext;