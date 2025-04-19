import React, { useState, useEffect } from "react";
import "./Home.css";
import homeImage from "../assets/home.jpg"; // Correct path
import eventImage from "../assets/event.jpg"; // New image for the event section

const Home = () => {
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    const newVisitorCount = Math.floor(Math.random() * 10000) + 1;
    setVisitorCount(newVisitorCount);
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Climate Action News</h1>
        <p>
          "Let's Make Our Earth Green and Clean: Your Source for the Latest
          Updates on Climate Change and Sustainability."
        </p>
      </section>

      <section className="main-info-section">
        <div className="left-info">
          <h2>About Us</h2>
          <p>
            Climate Action News Aggregator is a centralized platform designed to
            gather and curate the latest news, updates, and insights related to
            climate change and sustainability from various trusted sources
            around the world. Our goal is to provide users with a one-stop
            destination to stay informed about the most pressing environmental
            issues, scientific discoveries, policy developments, and innovative
            solutions aimed at combating climate change.
            <hr />
            This platform collects news from diverse channels such as global
            media outlets, environmental organizations, research institutions,
            and climate advocacy groups. By aggregating these sources, we ensure
            that users receive a wide range of perspectives on topics like
            renewable energy, carbon reduction strategies, climate justice,
            ecosystem preservation, and international climate agreements.
          </p>
        </div>
        <div className="right-info">
          <img src={homeImage} alt="Climate action" className="info-image" />
        </div>
      </section>

      <section className="events">
        <div className="events-content">
          {/* Left part: Image */}
          <div className="events-image">
            <img src={eventImage} alt="Upcoming events" className="info-image" />
          </div>

          {/* Right part: Event details */}
          <div className="events-details">
            <h2>Upcoming Climate Events</h2>
            <ul>
              <li>World Climate Summit - October 12, 2024</li>
              <li>Green Tech Conference - November 5, 2024</li>
              <li>Global Sustainability Forum - December 18, 2024</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
