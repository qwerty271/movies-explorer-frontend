import React from 'react';
import './Login.css';
import Form from '../Form/Form';

function Login() {
  return (
    <section className='login'>
      <Form
        title={'Рады видеть!'}
        button={'Войти'}
        register={'Ещё не зарегистрированы?'}
        sign={'Регистрация'}
        route={'signup'}
      />
    </section>
  );
}

export default Login;
