import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-badge">
          Consultation Management Platform
        </span>

        <h1>
          Capture.
          <br />
          Track.
          <br />
          Convert.
        </h1>

        <p>
          Beacon helps businesses organize consultation requests,
          track every interaction, and manage clients from the first
          inquiry to successful delivery.
        </p>

        <Link to="/register" className="hero-btn">
          Get Started
        </Link>

      </div>

    </section>
  );
}

export default Hero;