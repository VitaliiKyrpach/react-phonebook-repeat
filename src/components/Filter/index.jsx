import { useDispatch, useSelector } from 'react-redux';
import { typeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const query = useSelector(selectFilter);
  const handleChange = e => {
    dispatch(typeFilter(e.target.value));
  };
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input type="text" name="filter" value={query} onChange={handleChange} />
    </div>
  );
};
