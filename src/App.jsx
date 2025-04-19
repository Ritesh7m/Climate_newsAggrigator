import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './component/Navbar'; 
import Footer from './component/Footer';
import ScrollToTop from './component/ScrollToTop'; // Import ScrollToTop

const Home = lazy(() => import("./component/Home"));
const Newsapp = lazy(() => import('./component/Newsapp'));
const About = lazy(() => import("./component/About"));
const Contact = lazy(() => import("./component/Contact"));
const Weather = lazy(() => import('./component/Weather'));

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<Newsapp />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


