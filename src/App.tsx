import './App.css'
import logo from '/src/assets/dark_nn.png'
import heroImg from '/src/assets/chelson-tamares-SyCC0GQi5S4-unsplash.jpg'
import nailCare from '/src/assets/pexels-cottonbro-3997386.jpg'
import nailArt from '/src/assets/pbc_set_48_v__Main_v2.png'
import cPalette from '/src/assets/pexels-photo-3735624.webp'
import pricing1 from '/src/assets/1.png'
import pricing2 from '/src/assets/2.png'
import facebookSVG from '/src/assets/icons8-facebook.svg'


function App() {
  return (
    <div className="main-wrapper">
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
                  <li><a href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                </ul>
              </nav>
              <button
                className="cta-btn"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}>
                Contacts
              </button>
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
            <h2>Our Services</h2>
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
                }}>Learn More</button>
          </section>
        </div>
      </div>
      
      <section className="about-description" id="about">
        {/* Our Nail Care */}
        <div className="about-content">
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
                  Why settle for the ordinary? We offer a wide spectrum of colors, finishes, and nail trends! From timeless classics to seasonal favorites. Our curated polish collection means you’ll always find the perfect shade to match your mood, your look, or your next adventure.
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
              <p>Call Us: (256)-349-2350</p>
              <a href= "mailto:nicenaillounge@gmail.com">nicenaillounge@gmail.com</a>
            </div>
            <div className="footer-box social-box">
              <h3>Follow Us</h3>
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
              </p>
            </div>
          </section>
        </div>
      </div>           
    </div>
  );
}

export default App;
