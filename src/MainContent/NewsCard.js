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
        <div className="news-category">{story.category} • {story.location || 'Global'}</div>
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
            <span className="left-stat">{story.leftCoverage}% Left coverage: {story.sources} sources</span>
          </div>
        </>
      )}
    </div>
  </div>
);

export default NewsCard;
