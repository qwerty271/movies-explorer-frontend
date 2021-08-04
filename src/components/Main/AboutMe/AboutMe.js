import './AboutMe.css';
import photo from '../../../images/aboutMe_image.png';

function AboutMe() {
  return (
    <section className='about-me' id='student'>
      <h2 className='about-me__title'>Студент</h2>
      <hr className='about-me__line' />
      <div className='about-me__contain'>
        <div className='about-me__contain_text'>
          <h3 className='about-me__name'>Алексей</h3>
          <p className='about-me__who'>Фронтенд-разработчик, 24 года</p>
          <p className='about-me__text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul className='about-me__list'>
            <li className='about-me__item'>
              <a
                className='about-me__item_link'
                href='https://ru-ru.facebook.com/'
                target='_blank'
                rel='noreferrer'
              >
                Facebook
              </a>
            </li>
            <li className='about-me__item'>
              <a
                className='about-me__item_link'
                href='https://github.com/qwerty271'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className='about-me__image' alt='Фото' src={photo} />
      </div>
    </section>
  );
}

export default AboutMe;
