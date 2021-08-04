import React from 'react';
import './Register.css';
import Form from '../Form/Form';

function Register() {
  return (
    <section className='register'>
      <Form
        input={'register'}
        title={'Добро пожаловать!'}
        button={'Зарегистрироваться'}
        register={'Уже зарегистрированы?'}
        sign={'Войти'}
        route={'signin'}
      />
    </section>
  );
}

export default Register;
