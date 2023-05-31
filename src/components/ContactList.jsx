import css from '../styles/contactList.module.css';
export default function ContactList({ filteredContacts, handleDelete }) {
  return (
    <div>
          <h2>Contacts</h2>
          <p>Find contacts by name</p>
      <ul>
        {filteredContacts.map(contact => (
            <li   className={css.listItem} key={contact.id}>
                <p>
                {contact.name} : {contact.number}
                </p>
                <button type="button" onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}