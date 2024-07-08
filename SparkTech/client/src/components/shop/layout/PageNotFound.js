import React from "react";
import Layout from "./index";
import './AboutUs.css';

const PageNotFoundComponent = (props) => {
  return (
    <div class="sid">
      <h1>About Us</h1>
      <p>Welcome to our e-commerce website! We are dedicated to providing you with the best shopping experience possible.</p>
      <p>Our mission is to offer high-quality products at competitive prices, delivered with excellent customer service.</p>
      <h2>Our Team</h2>
      <div className="team">
        <div className="card">
        {/* <img src="profile.png" alt="Image 1" /> */}
        Sidhant Ganapure
        </div>
        <div className="card">
        {/* <img src="image1.jpg" alt="Image 1" /> */}
        Sahil Chougale
        </div>
        <div className="card">
        {/* <img src="image1.jpg" alt="Image 1" /> */}
        Ruchir Chougale
        </div>
        <div className="card">
        {/* <img src="image1.jpg" alt="Image 1" /> */}
        Rahel Palakhe
        </div>
      </div>
      <h2>Our Values</h2>
      <p>At Sparktech, we value:</p>
      <ul>
        <li>Quality: We carefully curate our products to ensure they meet our high standards.</li>
        <li>Customer Satisfaction: Your satisfaction is our top priority. We strive to exceed your expectations with every purchase.</li>
        <li>Innovation: We are always exploring new trends and technologies to improve our products and services.</li>
        <li>Sustainability: We are committed to reducing our environmental impact by [describe sustainability initiatives, e.g., using eco-friendly packaging, supporting fair trade practices, etc.].</li>
      </ul>
      <h2>Contact Us</h2>
      <p>If you have any questions, feedback, or inquiries, please don't hesitate to contact us:</p>
      <ul>
        <li>Email: sahilchougale@gmail.com</li>
        <li>Phone: 9011595998</li>
        <li>Address: DYPCET Kolhapur.</li>
      </ul>
    </div>
  );
};

const PageNotFound = (props) => {
  return <Layout children={<PageNotFoundComponent />} />;
};

export default PageNotFound;
