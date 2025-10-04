import React from 'react';

const TopNewsStories = ({ topNewsStories, worldNewsStories }) => {
  return (
    <>
      <section className="top-stories-section">
        <div className="section-header">
          <h2 className="section-title">Top Stories</h2>
          <div className="section-filters">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Politics</button>
            <button className="filter-btn">Business</button>
            <button className="filter-btn">Technology</button>
          </div>
        </div>

        <div className="top-stories-grid">
          {topNewsStories.map(story => (
            <div key={story.id} className="story-card">
              <div className="story-header">
                <div className="story-category">{story.category}</div>
                <div className="story-source-count">{story.sources} sources</div>
              </div>

              <h3 className="story-title">{story.title}</h3>

              <div className="story-bias-bar">
                <div className="bias-bar">
                  <div className="bias-left" style={{width: `${story.leftCoverage}%`}}></div>
                  <div className="bias-center" style={{width: `${story.centerCoverage}%`}}></div>
                  <div className="bias-right" style={{width: `${story.rightCoverage}%`}}></div>
                </div>
                <div className="bias-labels">
                  <span className="bias-label left">{story.leftCoverage}% Left</span>
                  <span className="bias-label center">{story.centerCoverage}% Center</span>
                  <span className="bias-label right">{story.rightCoverage}% Right</span>
                </div>
              </div>

              <div className="story-actions">
                <button className="read-more-btn">Read More</button>
                <button className="save-btn">💾</button>
              </div>

              <div className="story-hover-content">
                <p className="story-summary">
                  This story has been covered by {story.sources} different sources across the political spectrum,
                  with {story.leftCoverage}% left-leaning, {story.centerCoverage}% center, and {story.rightCoverage}% right-leaning coverage.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="world-news-section">
        <div className="section-header">
          <h2 className="section-title">World News</h2>
          <button className="view-all-btn">View All →</button>
        </div>

        <div className="world-news-grid">
          {worldNewsStories.slice(0, 6).map(story => (
            <div key={story.id} className="world-story-card">
              <div className="story-location">{story.location}</div>
              <h4 className="story-title">{story.title}</h4>
              <div className="story-meta">
                <span className="story-category">{story.category}</span>
                <span className="story-sources">{story.sources} sources</span>
              </div>
              <div className="mini-bias-bar">
                <div className="bias-left" style={{width: `${story.leftCoverage}%`}}></div>
                <div className="bias-center" style={{width: `${story.centerCoverage}%`}}></div>
                <div className="bias-right" style={{width: `${story.rightCoverage}%`}}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TopNewsStories;
