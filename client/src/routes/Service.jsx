import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import serviceImg from "../assets/31.jpg";
import "../Component/ServiceStyles.css";
import travelVideo from "../assets/12.mp4"; // Importing video

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={serviceImg} title="Our Services" btnClass="hide" />

      {/* Video Background */}
      <div className="video-container">
        <video autoPlay loop muted>
          <source src={travelVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1>Explore, Experience & Enjoy</h1>
          <p>Discover your next adventure with Trippy!</p>
        </div>
      </div>

      <div className="service-container">
        <h2>What We Offer</h2>
        <p>
          At Trippy, we offer a range of travel-related services to make your journey smooth and enjoyable.
          From trip planning to accommodation and guided tours, we've got everything covered.
        </p>

        <div className="service-list">
          <div className="service-card">
            <h3>✈️ Travel Planning</h3>
            <p>Personalized itineraries and travel guides tailored to your preferences.</p>
          </div>

          <div className="service-card">
            <h3>🏨 Hotel Booking</h3>
            <p>Find the best stays at top-rated hotels with exclusive deals.</p>
          </div>

          <div className="service-card">
            <h3>🚗 Car Rentals</h3>
            <p>Rent cars easily for city exploration or road trips at affordable prices.</p>
          </div>

          <div className="service-card">
            <h3>🌍 Guided Tours</h3>
            <p>Join expert-guided tours for an in-depth experience of your destination.</p>
          </div>

          <div className="service-card">
            <h3>📅 Custom Packages</h3>
            <p>Get customized vacation packages based on your budget and interests.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
