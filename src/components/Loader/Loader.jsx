import { ThreeDots } from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader = () => (
  <div className={style.Loader}>
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#ec4700cc"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </div>
);
export default Loader;
