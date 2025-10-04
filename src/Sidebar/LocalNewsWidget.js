import React from 'react';

const LocalNewsWidget = () => {
  return (
    <div className="local-news-widget">
      <h3 className="widget-title">Daily Local News</h3>
      <p className="widget-description">
        Discover stories and media bias happening right in your city.
      </p>
      <div className="location-form">
        <input type="text" placeholder="Enter your city's name" className="city-input" />
        <button className="submit-button">Submit</button>
      </div>
      <button className="location-button">📍 Set Location</button>
    </div>
  );
};

export default LocalNewsWidget;
