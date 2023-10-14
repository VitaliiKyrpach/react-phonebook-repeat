import { ContactListItem } from 'components/ContactListItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const filtered = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ul>
      {filtered &&
        filtered.map(({ id, name, phone }) => (
          <ContactListItem key={id} id={id} name={name} phone={phone} />
        ))}
    </ul>
  );
};
