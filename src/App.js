import React, { useEffect, useState } from "react"; 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import "./App.css"; // Import CSS file


const App = () => {
  const [data, setData] = useState(null);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/welcome")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) {
    return (
      <div style={backgroundStyle}>
        <NavBar />
        <div className="container" style={containerStyle}>

          <h1>Loading...</h1>
          <p>Fetching data from backend...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={backgroundStyle}>
      <NavBar setShowPrivacyPolicy={setShowPrivacyPolicy} />
      {showPrivacyPolicy ? (
      <div className="privacy-policy" style={{ marginTop: "80px", padding: "20px" }}>
        <h2>Privacy Policy</h2>
        <p>Privacy Policy - Titto Esports

        1. Introduction
Welcome to Titto Gaming. Your privacy is important to us, and we are committed to protecting any personal information you share with us. This Privacy Policy explains how we collect, use, and protect your data when you use our gaming platform.

2. Information We Collect
Since we do not have a sign-in/sign-up system, we collect limited user data:

Google Form Registrations: If you register for challenges, we collect the data you submit (e.g., name, email, phone number, gaming ID).
Website Usage Data: We may use analytics tools to track visits, page views, and interactions.
Cookies & Tracking: We may use cookies to improve user experience, but we do not store sensitive data.
3. How We Use Your Information
We use the collected information for:

Managing challenge registrations.
Sending event updates and notifications.
Improving user experience on our platform.
We do not sell or share your data with third parties for marketing purposes.

4. Third-Party Services
We may use third-party services (e.g., YouTube for videos, Google Forms for registrations, payment gateways if applicable). Each service has its own privacy policy, and we recommend reviewing them.

5. Security Measures
We implement security measures to protect your data. However, online transmissions are never 100% secure, so please use our services at your discretion.

6. Changes to Privacy Policy
We may update this policy as needed. Any significant changes will be communicated on our website.

7. Contact Us
For any privacy concerns, contact us at:
📧 Email: bp279576@gmail.com
📞 Phone: +91 7619138513

        </p>
        <button 
  onClick={() => setShowPrivacyPolicy(false)} 
  style={{
    backgroundColor: "red",
    color: "white",
    fontSize: "18px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px"
  }}
>
  Close
</button>

      </div>
    ) : (
      <div className="container">
        <h1>Welcome to Titto Esports</h1>
        <p className="description-text">{data.description}</p>

        {/* Image Carousel */}
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={3000}
        >
          <div>
            <img src="/Moving_image2.png" alt="Image 1" />
            {/* <p className="legend">Solo Match</p> */}
          </div>
          <div>
            <img src="/Moving_image1.png" alt="Image 2" />
            {/* <p className="legend">Stay Updated</p>Discriptions */}
          </div>
          <div>
            <img src="/Moving_image3.jpg" alt="Image 3" />
            {/* <p className="legend">Let's Go!! Its BGMI</p>Discriptions */}
          </div>
          {/* Add more images as needed */}
        </Carousel>

        <div className="content-container">
  {/* Left side: Challenges + List */}
  <div className="challenges-section">
    <h2>Challenges</h2>
    <ul>
      <li>
        <span className="challenge-label">Match Type:</span>
        <span className="challenge-value">{data.challenge.type}</span>
      </li>
      <li>
        <span className="challenge-label">Fee:</span>
        <span className="challenge-value">{data.challenge.fee}</span>
      </li>
      <li>
        <span className="challenge-label">Map:</span>
        <span className="challenge-value">{data.challenge.map}</span>
      </li>
    </ul>
  </div>

 {/* Right side: Challenge Guide + Video */}
 <div className="challenge-guide-section">
    <h2 className="challenge-guide-heading">Challenge Guide</h2>

    {/* Resizable Video Container */}
    <div className="video-container" contentEditable="true">
      <video controls>
      <source src="/VID20201122064205.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>

        <h2>Schedule</h2>
        <p className="schedule-text">{data.schedule}</p>

        <a
          href={data.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="register-button"
        >
          Register Here
        </a>
        {/* Skid Marks Effect */}
<div className="skid-marks"></div>

        <h2 style={{ textAlign: "right", marginRight: "20px" }}>Disclaimer</h2>

<p className="disclaimer-text">
  Participation in our gaming challenges is intended for entertainment purposes only. Titto Esports is not responsible for any technical issues, including but not limited to power outages, internet connectivity problems, or game malfunctions, that may affect gameplay or tournament outcomes. By participating, you acknowledge that you are engaging at your own risk and discretion.Participation in games on Titto Esports involves an element of financial risk and may be habit-forming. Please play responsibly and at your own risk. Ensure that you fully understand the rules and risks involved before participating.

Users must be 18 years or older to register and participate. Please ensure compliance with all local laws and regulations regarding online gaming and competitions.
</p>


      </div>)}

      <Footer />
    </div>
  );
};

// ✅ Navigation Bar
const NavBar = ({ setShowPrivacyPolicy }) => (
  <div style={navBarStyle}>
    <img src="/Titto_Esports.png" alt="Titto Gaming Logo" style={logoStyle} />
    <div style={navLinksStyle}>
      <a href="#" className="nav-link" onClick={() => setShowPrivacyPolicy(true)}>
        Privacy Policy
      </a>
      <a
        href="https://docs.google.com/forms/d/1dRp77nP6vumnDHZSirKprhbbCowMAM5uE-7gEJ3ClkQ/edit"
        target="_blank"
        rel="noopener noreferrer"
        className="register-button"
      >
        Register
      </a>
    </div>
  </div>
);


// ✅ New Footer Component (3-Section Layout)
const Footer = () => (
  <div style={footerStyle}>
    <div style={footerContentStyle}>
      {/* 📌 Contact Us Section (Left) */}
      {/* 📌 Contact Us Section (Left) */}
      <div style={footerSectionStyle}>
  <h3>Contact Us</h3>
  <p style={{ fontSize: "14px", marginBottom: "10px" }}>
    For any further queries or for collaboration, contact us on:
  </p>
  <ul style={{ listStyleType: "none", padding: 0 }}>
    <li style={{ marginBottom: "5px" }}>
      <strong>📧 Email:</strong> 
      <a href="mailto:bp279576@gmail.com" style={footerLinkStyle}> bp279576@gmail.com</a>
    </li>
    <li>
      <strong>📞 Phone:</strong> +91 7619138513
    </li>
  </ul>
</div>


      {/* 📌 Instagram Section (Center) */}
      <div style={footerSectionStyle}>
        <h3>Instagram</h3>
        <a href="https://www.instagram.com/titu___75?igsh=OWpuNjJhMjZlYjNm&utm_source=qr" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>
          @titu___75
        </a>
        <br />
        <a href="https://www.instagram.com/_dharmaraj_patil?igsh=MW54aWx2OG9iaHF5aQ==" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>
          @_dharmaraj_patil
        </a>
      </div>

      {/* 📌 YouTube Section (Right) */}
      <div style={footerSectionStyle}>
        <h3>YouTube</h3>
        <a href="https://www.youtube.com/@titya2154/streams" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>
          yourchannel: TITYA
        </a>
        <br />
        <img src="/Titto_Esports.png" alt="YouTube Profile" style={profileImageStyle} />
      </div>
    </div>
  </div>
);

// ✅ Styles
const backgroundStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundImage: "url('/backgroung.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  color: "white",
  textAlign: "center",
};


const navBarStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "60px",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "2 2px",
  zIndex: 1000,
  gap:"50px"
};
const navLinksStyle = {
  display: "flex",
  alignItems: "center",
  gap: "20px", // Reduce gap if needed
  maxWidth: "fit-content", // Ensures links don’t stretch too much
  whiteSpace: "nowrap", // Prevents text from wrapping
  overflow: "hidden", // Stops items from spilling over
};

const logoStyle = {
  height: "60px",
};


// ✅ Footer Styles
const footerStyle = {
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  padding: "10px",
  textAlign: "center",
  color: "white",
};



const footerContentStyle = {
  display: "flex",
  justifyContent: "space-around",// Adjusts spacing between sections
  alignItems: "flex-start",
  maxWidth: "100%",
  margin: "0 auto",
  gap: "40px", // Add space between the three sections
};

const footerSectionStyle = {
  flex: 1,
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  gap: "15px", // Adds spacing between content inside each section
};

const footerLinkStyle = {
  color: "#FFD700",
  textDecoration: "none",
  fontWeight: "bold",
};

const profileImageStyle = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  marginTop: "10px",
};
const containerStyle = {
  flex: 1, // This pushes the footer down
  padding: "20px",
};


export default App; 