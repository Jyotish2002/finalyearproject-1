import React from 'react';

const FeaturedStory = ({ featuredStory }) => {
  return (
    <section className="featured-story-section">
      <div className="featured-story">
        <div className="featured-content">
          <h1 className="featured-title">{featuredStory.title}</h1>
          <div className="featured-coverage-bar">
            <div className="coverage-segment left-segment" style={{width: `${featuredStory.leftCoverage}%`}}>
              <span>Left {featuredStory.leftCoverage}%</span>
            </div>
            <div className="coverage-segment center-segment" style={{width: `${featuredStory.centerCoverage}%`}}>
              <span>Center {featuredStory.centerCoverage}%</span>
            </div>
            <div className="coverage-segment right-segment" style={{width: `${featuredStory.rightCoverage}%`}}>
              <span>{featuredStory.rightCoverage}%</span>
            </div>
          </div>
        </div>
        <div className="featured-bg"></div>
      </div>
    </section>
  );
};

export default FeaturedStory;
