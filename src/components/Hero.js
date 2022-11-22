import "./HeroStyles.css";

function Home(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="Heroimg" src={props.img} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btn}>
            {props.btntext}{" "}
          </a>
        </div>
      </div>
    </>
  );
}
export default Home;
