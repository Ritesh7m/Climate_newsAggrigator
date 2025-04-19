import React from 'react';

const Weather = () => {
  return (
    <div style={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
      <iframe
        src="https://weatherapp-theta-eight.vercel.app/"
        title="Weather App"
        style={{ border: 'none', height: '100%', width: '100%' }}
      />
    </div>
  );
};

export default Weather;