import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const ContactDetail = () => {
  const { selectedContact } = useContext(UserContext);

  if (!selectedContact) {
    return null; 
  }

  return (
    <div>
      <h2>Contact Detail</h2>
      <p><strong>Name:</strong> {selectedContact.name}</p>
      <p><strong>Phone:</strong> {selectedContact.phone}</p>
    </div>
  );
};

export default ContactDetail;