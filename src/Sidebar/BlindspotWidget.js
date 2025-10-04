import React from 'react';

const BlindspotCard = ({ story }) => (
  <div className="blindspot-card">
    <div className="blindspot-meta">
      <span className={`coverage-badge ${story.leftCoverage === 0 ? 'right-missing' : 'left-low'}`}>
        {story.coverageType}
      </span>
      <span className="time-ago">{story.timeAgo}</span>
    </div>
    <h4 className="blindspot-title">{story.title}</h4>
    <div className="blindspot-coverage">
      <span className="left-coverage">Left {story.leftCoverage}%</span>
      <span className="center-coverage">Center {story.centerCoverage}%</span>
      <span className="right-coverage">Right {story.rightCoverage}%</span>
    </div>
  </div>
);

const BlindspotWidget = ({ blindspotStories }) => {
  return (
    <div className="blindspot-widget">
      <div className="widget-header">
        <div className="blindspot-brand">
          🎯 <span className="blindspot-text">BLINDSPOT</span><sup>™</sup>
        </div>
        <p className="blindspot-description">
          Stories disproportionately covered by one side of the political spectrum. 
          <a href="#" className="learn-more">Learn more about political bias in news coverage.</a>
        </p>
      </div>
      
      <div className="blindspot-stories">
        {blindspotStories.map(story => (
          <BlindspotCard key={story.id} story={story} />
        ))}
      </div>
      
      <button className="view-blindspot-feed">View Blindspot Feed</button>
    </div>
  );
};

export default BlindspotWidget;
