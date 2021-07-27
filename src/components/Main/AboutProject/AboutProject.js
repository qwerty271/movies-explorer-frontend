import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id='project'>
      <h2 className='about-project__title'>О проекте</h2>
      <hr className='about-project__line' />
      <div className='about-project__description'>
        <div className='about-project__description_contain'>
          <h3 className='about-project__description_text-uppercase'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__description_text-lowercase'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__description_contain'>
          <h3 className='about-project__description_text-uppercase'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__description_text-lowercase'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='weeks'>
        <div className='weeks__indicator weeks__indicator_short'>
          <p className='weeks__title weeks__title_short'>1 неделя</p>
        </div>
        <div className='weeks__indicator weeks__indicator_long'>
          <p className='weeks__title weeks__title_long'>4 недели</p>
        </div>
        <p className='weeks__text'>Back-end</p>
        <p className='weeks__text'>Front-end</p>
      </div>
    </section>
  );
}
export default AboutProject;
