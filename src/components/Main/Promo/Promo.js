import React from 'react';

import landingPromo from '../../../images/landing_promo.svg';
import './Promo.css';
import Header from '../../Header/Header';

function Promo() {
  return (
    <div className='promo'>
      <Header type={1}></Header>
      <img src={landingPromo} alt='лендинг' className='promo__image' />
      <h1 className='promo__text'>
        Учебный проект студента факультета Веб-разработки.
      </h1>
    </div>
  );
}

export default Promo;
