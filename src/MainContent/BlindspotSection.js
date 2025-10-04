import React from 'react';

const BlindspotSection = ({ blindspotStories }) => {
  return (
    <section className="blindspot-section">
      <div className="blindspot-header">
        <div className="blindspot-title-section">
          <h2 className="blindspot-title">Blindspot</h2>
          <div className="blindspot-subtitle">Stories disproportionately covered by one side of the political spectrum</div>
        </div>
        <button className="learn-more-link" onClick={() => alert('Learn more about political bias in news coverage')}>
          Learn more about political bias in news coverage →
        </button>
      </div>

      <div className="blindspot-stories">
        {blindspotStories.map(story => (
          <div key={story.id} className="blindspot-story-card">
            <div className="story-coverage-indicator">
              <div className="coverage-type-badge">
                {story.coverageType}
              </div>
              <div className="time-ago">{story.timeAgo}</div>
            </div>

            <h3 className="story-title">{story.title}</h3>

            <div className="coverage-breakdown">
              <div className="coverage-bar">
                <div className="coverage-left" style={{width: `${story.leftCoverage}%`}}>
                  <span className="coverage-tooltip">Left: {story.leftCoverage}%</span>
                </div>
                <div className="coverage-center" style={{width: `${story.centerCoverage}%`}}>
                  <span className="coverage-tooltip">Center: {story.centerCoverage}%</span>
                </div>
                <div className="coverage-right" style={{width: `${story.rightCoverage}%`}}>
                  <span className="coverage-tooltip">Right: {story.rightCoverage}%</span>
                </div>
              </div>

              <div className="coverage-icons">
                <div className="coverage-icon left">
                  <span className="icon">⬅️</span>
                  <span className="count">{story.leftCoverage}</span>
                </div>
                <div className="coverage-icon center">
                  <span className="icon">⚪</span>
                  <span className="count">{story.centerCoverage}</span>
                </div>
                <div className="coverage-icon right">
                  <span className="icon">➡️</span>
                  <span className="count">{story.rightCoverage}</span>
                </div>
              </div>
            </div>

            <div className="story-actions">
              <button className="read-story-btn">Read Story</button>
              <span className="sources-count">{story.sources} sources</span>
            </div>
          </div>
        ))}
      </div>

      <div className="blindspot-footer">
        <button className="view-all-blindspot">View All Blindspot Stories →</button>
      </div>
    </section>
  );
};

export default BlindspotSection;