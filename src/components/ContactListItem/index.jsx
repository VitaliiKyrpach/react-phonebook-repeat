import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';

export const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContacts(id));
  return (
    <li>
      {name}: {phone}
      <button type="button" onClick={() => handleDelete(id)}>
        delete
      </button>
    </li>
  );
};
