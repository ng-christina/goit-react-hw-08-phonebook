import style from './filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterAction } from 'redux/filterSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = e => {
    dispatch(filterAction(e.target.value.trim()));
  };

  return (
    <div className={style.searchContainer}>
      {useSelector(selectContacts).length < 1 ? (
        <p className={style.p}>Add your first number in phonebook</p>
      ) : (
        <div className={style.div}>
          <input
            type="text"
            name="filter"
            placeholder="Search"
            className={style.inputName}
            title="Enter search name"
            value={filter}
            onChange={onChange}
          />
          <label className={style.search}> </label>
        </div>
      )}
    </div>
  );
};

export default Filter;
