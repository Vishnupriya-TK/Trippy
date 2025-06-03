
import "./HeroStyles.css";

function Hero(props) {

  return (
    <div className={props.cName}>
      <img alt="Hero Image" src={props.heroImg} />
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        {props.url && (
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        )}
      </div>
    </div>
  );
}

export default Hero;
