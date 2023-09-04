import style from './filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterReducer } from 'redux/filterSlice';
import { selectContacts, selectFilter } from 'redux/selector';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.trim();
    dispatch(filterReducer(value));
  };

  const contactsLength = useSelector(selectContacts).length;

  return (
    <div className={style.searchContainer}>
      {contactsLength < 1 ? (
        <p className={style.p}>Add your first number in phonebook</p>
      ) : (
        <label className={style.search}>
          <input
            type="text"
            name="filter"
            placeholder="Search"
            className={style.inputName}
            title="Enter search name"
            onChange={onChange}
            value={filter}
          />
        </label>
      )}
    </div>
  );
};

export default Filter;
