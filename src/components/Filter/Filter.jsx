import style from './filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterAction } from 'redux/filterSlice';
import { selectFilter } from 'redux/selector';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value;
    dispatch(filterAction(value));
  };

  return (
    <div className={style.searchContainer}>
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
    </div>
  );
};

export default Filter;
