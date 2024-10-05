import { useSelector, useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome,{user.name} </p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
}

// irynaback2@gmail.com
// sergeybear34@gmail.com
// olgabear56@gmail.com
// ertrtrtt@gmail.com
