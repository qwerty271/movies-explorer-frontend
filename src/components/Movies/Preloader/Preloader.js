import './Preloader.css';

function Preloader(props) {
  return (
    <section
      className={`preloader ${props.state ? 'preloader__active' : ''}`}
    />
  );
}

export default Preloader;
