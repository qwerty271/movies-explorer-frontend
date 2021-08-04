import React from 'react';
import Promo from './Promo/Promo';
import NavTab from '../Main/NavTab/NavTab';
import AboutProject from '../Main/AboutProject/AboutProject';
import Tech from '../Main/Techs/Tech';
import AboutMe from '../Main/AboutMe/AboutMe';
import Portfolio from '../Main/Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main(props) {
  return (
    <React.Fragment>
      <Promo type={props.type} />
      <NavTab />
      <AboutProject />
      <Tech />
      <AboutMe />
      <Portfolio />
      <Footer />
    </React.Fragment>
  );
}

export default Main;
