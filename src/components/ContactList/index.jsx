import { ContactListItem } from 'components/ContactListItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const type = useSelector(state => state.filter);
  const filtered =
    contacts &&
    contacts.filter(contact => contact.name.toLowerCase().includes(type));
  return (
    <ul>
      {filtered &&
        filtered.map(({ id, name, phone }) => (
          <ContactListItem key={id} id={id} name={name} phone={phone} />
        ))}
    </ul>
  );
};
