import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import aboutImg from "../assets/21.jpg";
import "../Component/AboutStyles.css";
import travelVideo from "../assets/123.mp4";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={aboutImg} title="About Us" btnClass="hide" />
      
      <div className="about-container">
        <h2>Who We Are</h2>
        <p>
          Welcome to Trippy! We are a passionate team of travelers dedicated to bringing you the best travel experiences. 
          Our platform helps you explore breathtaking destinations, plan your trips, and create unforgettable memories.
        </p>
        
        {/* Video Section */}
        <div className="video-container">
          <video src={travelVideo} autoPlay loop muted playsInline className="about-video" />
        </div>
        
        <h2>Our Mission</h2>
        <p>
          Our mission is to inspire and empower travelers by providing curated travel guides, insider tips, and seamless booking options.
          Whether you're an adventurer or a leisure traveler, we make travel easy and enjoyable for everyone.
        </p>

        <h2 id="ccc">Why Choose Us?</h2>
        <ul id="ccc">
          <li>🌍 Discover unique travel destinations</li>
          <li>🏨 Handpicked accommodations and activities</li>
          <li>📅 Hassle-free trip planning</li>
          <li>✈️ Best deals on flights & hotels</li>
        </ul>
      </div>
    </>
  );
}

export default About;
