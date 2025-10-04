import React from 'react';

const FeaturedStory = ({ featuredStory }) => {
  return (
    <section className="featured-story-section">
      <div className="featured-banner">
        <div className="featured-image">
          <div className="image-overlay"></div>
          <div className="featured-content">
            <div className="featured-meta">
              <span className="featured-category">{featuredStory.category}</span>
              <span className="featured-sources">{featuredStory.centerCoverage + featuredStory.leftCoverage + featuredStory.rightCoverage} sources</span>
            </div>
            <h1 className="featured-headline">{featuredStory.title}</h1>
            <div className="featured-bias-bar">
              <div className="bias-bar-container">
                <div className="bias-segment left" style={{width: `${featuredStory.leftCoverage}%`}}>
                  <span className="bias-label">Left {featuredStory.leftCoverage}%</span>
                </div>
                <div className="bias-segment center" style={{width: `${featuredStory.centerCoverage}%`}}>
                  <span className="bias-label">Center {featuredStory.centerCoverage}%</span>
                </div>
                <div className="bias-segment right" style={{width: `${featuredStory.rightCoverage}%`}}>
                  <span className="bias-label">Right {featuredStory.rightCoverage}%</span>
                </div>
              </div>
            </div>
            <div className="featured-actions">
              <button className="read-full-story">Read Full Story</button>
              <button className="view-sources">View All Sources</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStory;
