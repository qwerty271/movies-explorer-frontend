import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <hr className='footer__line' />
      <div className='footer__contain'>
        <p className='footer__date'>@ {new Date().getFullYear()}</p>
        <ul className='footer__list'>
          <li className='footer__item'>
            <a
              className='footer__link'
              href='https://praktikum.yandex.ru/'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__item'>
            <a
              className='footer__link'
              href='https://github.com/qwerty271'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
          <li className='footer__item'>
            <a
              className='footer__link'
              href='https://ru-ru.facebook.com/'
              target='_blank'
              rel='noreferrer'
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
