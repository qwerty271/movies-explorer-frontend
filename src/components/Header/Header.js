import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import menu from '../../images/menu_icon.svg';
import close from '../../images/close_button.svg';
// import { useHistory } from 'react-router-dom';
import './Header.css';

function Header(props) {
  const navType = props.type;
  const [visible, setVisible] = React.useState();
  const test = true;
  const [menuVisible, setMenuVisible] = React.useState(false);
  // const history = useHistory();

  React.useEffect(() => {
    if (test) {
      window.addEventListener('resize', resize);
      resize();
    }
    return () => {
      window.removeEventListener('resize', resize);
    };
  });

  function resize() {
    setVisible(window.innerWidth);
  }

  function changeVisible() {
    setMenuVisible(menuVisible === true ? false : true);
  }

  return (
    <header className='header'>
      <Link to='/'>
        <img src={logo} alt='логотип' className='header__logo' />
      </Link>
      <div
        className={` ${
          !navType ? 'header__navigation_active' : 'header__navigation'
        }`}
      >
        <Link to='/signup' className='header__button header__button_register'>
          Регистрация
        </Link>
        <Link to='/signin' className='header__button header__button_login'>
          Войти
        </Link>
      </div>
      <div
        className={` ${
          navType && visible > 769
            ? 'header__navigation_active'
            : 'header__navigation'
        } `}
      >
        <Link to='/movies' className='header__text'>
          Фильмы
        </Link>
        <Link to='/saved-movies' className='header__text'>
          Сохранённые фильмы
        </Link>
        <Link
          to='/profile'
          className='header__button header__button_account'
        ></Link>
      </div>
      <img
        className={` ${
          navType && visible < 769 && !menuVisible
            ? 'header__burger_active'
            : 'header__burger'
        } `}
        alt='меню'
        src={menu}
        onClick={changeVisible}
      />
      <div
        className={`${menuVisible ? 'header__menu_active' : 'header__menu'}`}
      >
        <img
          className='header__menu_close'
          src={close}
          alt='крестик'
          onClick={changeVisible}
        />
        <ul className='header__menu_list'>
          <li className='header__menu_item'>
            <Link to='/' className='header__menu_text'>
              Главная
            </Link>
          </li>
          <li className='header__menu_item'>
            <Link to='/movies' className='header__menu_text'>
              Фильмы
            </Link>
          </li>
          <li className='header__menu_item'>
            <Link to='/saved-movies' className='header__menu_text'>
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <Link to='/profile' className='header__menu_account'></Link>
      </div>
    </header>
  );
}

export default Header;
