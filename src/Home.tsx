// React App import components
import './Home.css'
import { useRef, useEffect, useState } from 'react';
// Import images and assets
import logo from '/src/assets/dark_nn.png'
import heroImg from '/src/assets/chelson-tamares-SyCC0GQi5S4-unsplash.jpg'
import nailCare from '/src/assets/pexels-cottonbro-3997386.jpg'
import nailArt from '/src/assets/pbc_set_48_v__Main_v2.png'
import cPalette from '/src/assets/pexels-photo-3735624.webp'
import pricing1 from '/src/assets/1.png'
import pricing2 from '/src/assets/2.png'
import facebookSVG from '/src/assets/icons8-facebook.svg'
import instaSVG from '/src/assets/icons8-instagram.svg'
import promoImg from '/src/assets/promo.png'
import yelpImg from '/src/assets/icons8-yelp-48.svg'
// Import Leaflet and its styles
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
// // Importing React Router components
// import { Link } from 'react-router-dom';

function Home() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  delete (L.Icon.Default.prototype as any)._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
  });
  useEffect(() => {
  if (!mapRef.current) return;

  // Prevent re-initializing if already rendered
  if (mapRef.current.children.length > 0) return;

  const map = L.map(mapRef.current).setView([34.832596, -87.616722], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([34.832596, -87.616722])
    .addTo(map)
    .bindPopup('Nice Nail Lounge')
    .openPopup();
  }, []);

  const [showPromo, setShowPromo] = useState(() => !localStorage.getItem("promoClosed"));
  const handleClosePromo = () => {
    setShowPromo(false);
    localStorage.setItem("promoClosed", "true");
  };
  return (
    <div className="main-wrapper">
      {/* PROMO POPUP */}
      {showPromo && (
        <div className="promo-modal">
          <div className="promo-modal-content">
            <button
              className="close-btn"
              onClick={handleClosePromo}
              aria-label="Close promo"
            >
              ×
            </button>
            <img src={promoImg} alt="Promotion" className="promo-img" />
          </div>
        </div>
      )}

      <div className="promo-popup">
        <button 
          className="promo-popup-btn"
          onClick={() => {
            localStorage.removeItem("promoClosed");
            window.location.reload();
        }}>GET 15% OFF YOUR FIRST APPOINTMENT!</button>
      </div>

    {/* Logo and Navigation Bar */}
      <div className="one-third-bg">
        <div className="one-third-content">
          <div className="navbar">
            <div className="logo-bar">
              <a href="/">
                <img src={logo} alt="Nice Nail Lounge Logo" className="logo-img" />
              </a>
            </div>
            <div className="navbar-right">
              <nav>
                <ul className="nav-links">
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#services">Pricing & Services</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </nav>
              <a href="https://app.squareup.com/appointments/book/o3j24jn8pdjk6a/LMJBD06SFWQ5P/start" className="cta-btn">
                Book Now
              </a>
            </div>
          </div>

          {/* Hero Image With Text Overlay */}
          <section className="hero-image">
            <img src={heroImg} alt="Nail Salon Hero" className="hero-img" />
            <div className="hero-overlay" />
            <div className="hero-text">
              <link href="https://fonts.googleapis.com/css2?family=Oleo+Script:wght@400;700&display=swap" rel="stylesheet"/>
              <h1>Welcome to Nice Nail Lounge</h1>
              <p>Simply Stunning. Simply Nice.</p>
            </div>
          </section>

          {/* Service Cards */}
          <section className="services">
            <h2>What We Offer</h2>
            <div className="service-list">
              <div className="service-card">
                <h3>Nail Care</h3>
                <p>Classic care with gentle touch and a splash of color.</p>
              </div>
              <div className="service-card">
                <h3>Pedicure Services</h3>
                <p>Wide choices of service for the ultimate relaxation.</p>
              </div>
              <div className="service-card">
                <h3>Nail Art & Designs</h3>
                <p>Custom art - simple, trendy, or bold. Your style!</p>
              </div>
            </div>
            <button className="cta-btn" 
            onClick={() => {
                  const el = document.getElementById("services");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}>More Services</button>
          </section>
        </div>
      </div>
      
      <section className="about-description" id="about">
        {/* Our Nail Care */}
        <div className="about-content">
          <div className="about-intro">
          <h2>About Us</h2>
          <p>
            At Nice Nail Lounge, we believe in more than just nails. 
            We’re about creating a welcoming space where you can relax, unwind, and leave feeling refreshed. 
            Our team is dedicated to providing exceptional service, using high-quality products and the latest techniques to ensure your nails look and feel their best. 
            Whether you’re here for a quick polish change or a full pampering session, we’re committed to making your experience enjoyable and memorable. 
            Join us in celebrating the art of nail care and let us help you express your unique style. 
            Your nails are our canvas, and we can’t wait to create something beautiful together!
          </p>
        </div>

          {/* Our Nail Care */}
          <div className="about">
            <div className = "side-by-side">
              <div className="left-content">
                <h2>Our Nail Care</h2>
                <p>
                  At Nice Nail Lounge, we blend skill, style, and a friendly touch. Whether it’s a quick polish or a full nail day, you’ll leave refreshed and smiling.
                </p>
              </div>
              <div className="vertical-divider"></div>
              <div className="right-image">
                <img src={nailCare} alt="About Nice Nail Lounge" />
              </div>
            </div>
          </div>

          {/* Our Nail Art */}
          <div className="about">
            <div className="side-by-side">
              <div className="left-content">
                <h2>Our Nail Art</h2>
                <p>
                  At Nice Nail Lounge, creativity is at your fingertips! Whether you’re dreaming of minimalist accents or bold, Instagram-worthy designs, our artists bring your vision to life with precision and style. Let’s make your nails your best accessory.
                </p>
              </div>
              <div className="vertical-divider"></div>
              <div className="right-image">
                <img src={nailArt} alt="Nail Art" />
              </div>
            </div>
          </div>

          {/* Colorful Palette */}
          <div className="about">
            <div className="side-by-side">
              <div className="left-content">
                <h2>Colorful Palette</h2>
                <p>
                  Why settle for the ordinary? At Nice Nail Lounge, We offer a wide spectrum of colors, finishes, and nail trends! From timeless classics to seasonal favorites. Our curated polish collection means you’ll always find the perfect shade to match your mood, your look, or your next adventure.
                </p>
              </div>
              <div className="vertical-divider"></div>
              <div className="right-image">
                <img src={cPalette} alt="Colorful Palette" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="other-one-third">
        {/* Pricing */}
        <div className="other-one-third-content">
          <section className="price" id="services">
            <h2>Pricing & Services</h2>
            <div className="pricing-img">
              <img src={pricing1} alt="Pricing 1" className="pricing-photo" />
              <img src={pricing2} alt="Pricing 2" className="pricing-photo" />
            </div>
          </section>

          {/* Contact Title */}
          <div className="contact" id="contact"><h2>Contact Us</h2></div>

          {/* Contact Card */}
          <section className="footer-boxes">
            <div className="footer-box about-box">
              <h3>About Us</h3>
              <p>
                {/* Replace this with your company info */}
                <strong>Nice Nail Lounge</strong><br />
                3111 Florence Blvd, Florence, AL 35634<br />
                <br></br>
                Mon - Sat: 9AM - 7PM<br />
                Sun: 1PM - 5PM
              </p>
            </div>
            <div className="footer-box contact-box">
              <h3>Contact Info</h3>
              <p>Call Us: <a href="tel:+12563492350">(256)-349-2350</a></p>
              <a href= "mailto:nicenaillounge@gmail.com">nicenaillounge@gmail.com</a>
            </div>
            <div className="footer-box social-box">
              <h3>Social Network</h3>
              <p>
                <a
                  href="https://www.facebook.com/p/Kims-Nails-100087780272339/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="facebook-link"
                >
                  {/* You can use a Facebook SVG or emoji for now */}
                  <img src={facebookSVG} alt="Facebook" className="facebook-svg-img" />
                </a>
                <a
                  href="https://www.instagram.com/nicenaillounge/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="insta-link"
                >
                  <img src={instaSVG} alt="Instagram" className="instagram-svg-img" />
                </a>

                <a
                  href="https://www.yelp.com/biz/nice-nail-lounge-florence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="yelp-link"
                >
                  <img src={yelpImg} alt="Yelp" className="yelp-svg-img" />
                </a>
                
              </p>
            </div>
          </section>
          <div id="map" ref={mapRef}></div>
        </div>
      </div>           
    </div>
  );
}

export default Home;
