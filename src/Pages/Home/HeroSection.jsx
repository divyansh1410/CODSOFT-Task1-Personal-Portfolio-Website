export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">I am Divyansh Pandey</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">A Frontend</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Currently pursuing my Bachelor's in Technology from 
            <br /> Galgotias College of Engineering & Technology.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
