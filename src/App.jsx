import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const removeContact = (index) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Contact Manager</h1>
      <div className="max-w-xl mx-auto bg-white p-5 rounded shadow">
        <ContactForm addContact={addContact} />
        <ContactList contacts={contacts} removeContact={removeContact} />
      </div>
    </div>
  );
};

export default App;

