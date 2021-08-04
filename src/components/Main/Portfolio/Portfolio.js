import './Portfolio.css';
import Arrow from '../../../images/portfolio_arrow.svg';

function Portfolio() {
  return (
    <section className='porfolio'>
      <h2 className='porfolio__title'>Портфолио</h2>
      <div className='porfolio__item'>
        <p className='portfolio__item_text'>Статичный сайт</p>
        <a
          href='https://github.com/qwerty271?tab=repositories'
          target='_blank'
          rel='noreferrer'
        >
          <img className='porfolio__item_icon' alt='Стрелка' src={Arrow} />
        </a>
      </div>
      <hr className='porfolio__line' />
      <div className='porfolio__item'>
        <p className='portfolio__item_text'>Адаптивный сайт</p>
        <a
          href='https://github.com/qwerty271?tab=repositories'
          target='_blank'
          rel='noreferrer'
        >
          <img className='porfolio__item_icon' alt='Стрелка' src={Arrow} />
        </a>
      </div>
      <hr className='porfolio__line' />
      <div className='porfolio__item'>
        <p className='portfolio__item_text'>Одностраничное приложение</p>
        <a
          href='https://github.com/qwerty271?tab=repositories'
          target='_blank'
          rel='noreferrer'
        >
          <img className='porfolio__item_icon' alt='Стрелка' src={Arrow} />
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
