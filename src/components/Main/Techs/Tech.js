import './Tech.css';

function Tech() {
  return (
    <section className='tech' id='tech'>
      <h2 className='tech__title'>Технологии</h2>
      <hr className='tech__line' />
      <h3 className='tech__name'>7 технологий</h3>
      <p className='tech__text'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className='tech__contain'>
        <p className='tech__contain_element'>HTML</p>
        <p className='tech__contain_element'>CSS</p>
        <p className='tech__contain_element'>JS</p>
        <p className='tech__contain_element'>React</p>
        <p className='tech__contain_element'>Git</p>
        <p className='tech__contain_element'>Express.js</p>
        <p className='tech__contain_element'>MongoDB</p>
      </div>
    </section>
  );
}

export default Tech;
