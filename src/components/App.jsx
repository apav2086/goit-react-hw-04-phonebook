import { useEffect, useState } from 'react';
import ContactList from './ContactList';
import Filter from './Filter';
import NameForm from './NameForm';
export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');


  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(Number(filter))
  );
  const handleDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem(contacts, JSON.stringify(contacts));
}, [contacts]);
  return (
    <div>
      <h2>Phonebook</h2>
      <NameForm setContacts={setContacts} contacts={contacts} />
      <Filter filter={filter} setFilter={setFilter}/>
      <ContactList filteredContacts={filteredContacts}
        handleDelete={handleDelete} />
    </div>
  );
};