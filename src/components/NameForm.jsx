import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function NameForm({ contacts, setContacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  
  const handleSubmit = evt => {
    evt.preventDefault();

    const duplicateContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (duplicateContact) {
      alert('Duplicate contact');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    setContacts(prevState => [...prevState, newContact]);
    setName('');
    setNumber('');
  };

  return (
    <div>
      <p>Name</p>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            required
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="inputContainer">
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onChange}
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
}