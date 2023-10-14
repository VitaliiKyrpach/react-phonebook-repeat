import { useDispatch } from 'react-redux';
import { typeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(typeFilter(e.target.value));
  };
  return <input type="text" onChange={handleChange} />;
};
