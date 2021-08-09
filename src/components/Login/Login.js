import React from 'react';
import './Login.css';
import Form from '../Form/Form';
import Preloader from '../Movies/Preloader/Preloader';

function Login(props) {
  return (
    <section className='login'>
      <Form
        title={'Рады видеть!'}
        button={'Войти'}
        register={'Ещё не зарегистрированы?'}
        sign={'Регистрация'}
        route={'signup'}
        submit={props.userLogin}
        error={props.error}
      />
      <Preloader state={props.statePreloader} />
    </section>
  );
}

export default Login;
