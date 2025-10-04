import React from 'react';

const NewsCard = ({ story, showImage = false, isMainStory = false }) => (
  <div className={`news-card ${isMainStory ? 'main-story' : ''} ${showImage ? 'with-image' : ''}`}>
    {showImage && story.image && (
      <div className="news-image">
        <div className="image-placeholder">📰</div>
      </div>
    )}
    <div className="news-content">
      {story.category && (
        <div className="news-meta">
          <span className="news-category">{story.category}</span>
          {story.location && <span className="news-location">• {story.location}</span>}
          {story.timeAgo && <span className="news-time">• {story.timeAgo}</span>}
        </div>
      )}
      <h3 className="news-title">{story.title}</h3>
      {story.description && (
        <p className="news-description">{story.description}</p>
      )}
      
      {(story.leftCoverage !== undefined) && (
        <>
          <div className="coverage-bar">
            <div 
              className="coverage-left" 
              style={{width: `${story.leftCoverage}%`}}
            ></div>
            <div 
              className="coverage-center" 
              style={{width: `${story.centerCoverage}%`}}
            ></div>
            <div 
              className="coverage-right" 
              style={{width: `${story.rightCoverage}%`}}
            ></div>
          </div>
          <div className="coverage-stats">
            <span className="sources-count">{story.sources || story.centerCoverage} sources</span>
            <div className="bias-breakdown">
              <span className="left-stat">{story.leftCoverage}% Left</span>
              <span className="center-stat">{story.centerCoverage}% Center</span>
              <span className="right-stat">{story.rightCoverage}% Right</span>
            </div>
          </div>
        </>
      )}
      
      {story.coverageType && (
        <div className="coverage-indicator">
          <span className="coverage-type">{story.coverageType}</span>
        </div>
      )}
    </div>
  </div>
);

export default NewsCard;
