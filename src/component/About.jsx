import React from 'react';
import visionImage1 from '../assets/project-1.jpg';
import visionImage2 from '../assets/project-2.jpg';
import visionImage3 from '../assets/project-3.jpg';
import visionImage4 from '../assets/project-4.jpg';
import visionImage5 from '../assets/project-5.jpg';
import './About.css'

const About = () => {
  return (
    <div className="about-section">
      <section className="about-hero-section">
        <h1>About Climate Action News</h1>
        <p>Our platform is dedicated to providing accurate and up-to-date news about climate change and sustainability.</p>
      </section>

      <section className="about-details-section">
        <h2>Our Vision</h2>

        <div className="vision-cards-section">
          <div className="vision-card">
            <img src={visionImage1} alt="Vision 1" />
            <h3>Protecting Forests</h3>
            <p>Trees are essential to the health of our planet. They absorb carbon dioxide, produce oxygen, stabilize soil, and support a wide range of biodiversity. However, deforestation, driven by various human activities, continues to threaten these vital ecosystems.</p>
          </div>
          <div className="vision-card">
            <img src={visionImage2} alt="Vision 2" />
            <h3>Renewable Energy</h3>
            <p>
            Renewable energy refers to energy derived from natural sources that are replenished on a human timescale, unlike fossil fuels which are finite and depleting. Here are some key aspects of renewable energy.</p>
          </div>
          <div className="vision-card">
            <img src={visionImage3} alt="Vision 3" />
            <h3>Reducing Greenhouse Gases</h3>
            <p>Greenhouse gases (GHGs) like carbon dioxide (CO2), methane (CH4), and nitrous oxide (N2O) trap heat in the Earth's atmosphere, contributing to global warming and climate change. Reducing these emissions is essential to mitigate the adverse effects of climate change.</p>
          </div>
          <div className="vision-card">
            <img src={visionImage4} alt="Vision 4" />
            <h3>Combating Plastic Pollution</h3>
            <p>Plastic pollution is one of the most pressing environmental issues, causing significant harm to ecosystems, wildlife, and human health. Single-use plastics and poor waste management have led to widespread contamination of land and water.</p>
          </div>
          <div className="vision-card">
            <img src={visionImage5} alt="Vision 5" />
            <h3>Preserving the Wild</h3>
            <p>
            Wildlife refers to all living organisms that are not domesticated and exist naturally in the wild. This encompasses a diverse range of species including animals, plants, fungi, and microorganisms. Here’s an overview of wildlife and its significance.</p>
          </div>
        </div>

        <h2>Our Team</h2>
        <div className="team-cards-section">
          <div className="team-card">
            <p>Ritesh Maurya</p>
          </div>
          <div className="team-card">
            <p>Uday Mhordhraya</p>
          </div>
          <div className="team-card">
            <p>Shravan Kalambe</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
