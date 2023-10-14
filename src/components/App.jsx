import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <ContactList />
    </div>
  );
};
