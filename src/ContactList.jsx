import React from 'react';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className="divide-y divide-gray-200 mt-4">
      {contacts.map((contact, index) => (
        <li key={index} className="py-4 flex justify-between items-center">
          <span>{contact.name} - {contact.email} - {contact.phone}</span>
          <button 
            onClick={() => removeContact(index)} 
            className="bg-rose-500 text-white py-1 px-3 rounded-md hover:bg-rose-600"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

