import React from 'react';

const FeaturedNewsGallery = ({ stories }) => {
  return (
    <section className="featured-news-gallery">
      <div className="gallery-header">
        <h2 className="section-title">Today's Top Stories</h2>
        <p className="gallery-subtitle">Curated stories with diverse perspectives</p>
      </div>

      <div className="gallery-grid">
        {/* Main Featured Card - Large */}
        <div className="gallery-card gallery-card-large">
          <div className="gallery-image">
            <img src={stories[0]?.image || "/api/placeholder/800/500"} alt={stories[0]?.title} />
            <div className="image-overlay"></div>
            <div className="trending-badge">🔥 Trending</div>
          </div>
          <div className="gallery-content">
            <span className="gallery-category">{stories[0]?.category || 'Technology'}</span>
            <h3 className="gallery-title">{stories[0]?.title || 'Japan Elects First Female Prime Minister in Historic Vote'}</h3>
            <p className="gallery-excerpt">
              {stories[0]?.description || 'In a landmark moment for Japanese politics, the nation has elected its first female prime minister, marking a significant shift in the country\'s traditionally male-dominated political landscape.'}
            </p>
            <div className="gallery-meta">
              <span className="source-count">📰 {stories[0]?.sources || 156} sources</span>
              <span className="read-time">⏱️ 5 min read</span>
            </div>
            <div className="coverage-bar">
              <div className="coverage-left" style={{width: `${stories[0]?.leftCoverage || 45}%`}}></div>
              <div className="coverage-center" style={{width: `${stories[0]?.centerCoverage || 35}%`}}></div>
              <div className="coverage-right" style={{width: `${stories[0]?.rightCoverage || 20}%`}}></div>
            </div>
            <div className="coverage-labels">
              <span className="left-stat">{stories[0]?.leftCoverage || 45}% Left</span>
              <span className="center-stat">{stories[0]?.centerCoverage || 35}% Center</span>
              <span className="right-stat">{stories[0]?.rightCoverage || 20}% Right</span>
            </div>
          </div>
        </div>

        {/* Secondary Featured Cards - Medium */}
        <div className="gallery-card gallery-card-medium">
          <div className="gallery-image">
            <img src={stories[1]?.image || "/api/placeholder/600/400"} alt={stories[1]?.title} />
            <div className="image-overlay"></div>
          </div>
          <div className="gallery-content">
            <span className="gallery-category">{stories[1]?.category || 'Business'}</span>
            <h3 className="gallery-title">{stories[1]?.title || 'Global Markets React to New Economic Policies'}</h3>
            <div className="gallery-meta">
              <span className="source-count">📰 {stories[1]?.sources || 89} sources</span>
            </div>
            <div className="coverage-bar">
              <div className="coverage-left" style={{width: `${stories[1]?.leftCoverage || 38}%`}}></div>
              <div className="coverage-center" style={{width: `${stories[1]?.centerCoverage || 42}%`}}></div>
              <div className="coverage-right" style={{width: `${stories[1]?.rightCoverage || 20}%`}}></div>
            </div>
          </div>
        </div>

        <div className="gallery-card gallery-card-medium">
          <div className="gallery-image">
            <img src={stories[2]?.image || "/api/placeholder/600/400"} alt={stories[2]?.title} />
            <div className="image-overlay"></div>
            <div className="original-badge">🏆 Original Reporting</div>
          </div>
          <div className="gallery-content">
            <span className="gallery-category">{stories[2]?.category || 'Science'}</span>
            <h3 className="gallery-title">{stories[2]?.title || 'Breakthrough in Renewable Energy Storage Technology'}</h3>
            <div className="gallery-meta">
              <span className="source-count">📰 {stories[2]?.sources || 67} sources</span>
            </div>
            <div className="coverage-bar">
              <div className="coverage-left" style={{width: `${stories[2]?.leftCoverage || 52}%`}}></div>
              <div className="coverage-center" style={{width: `${stories[2]?.centerCoverage || 28}%`}}></div>
              <div className="coverage-right" style={{width: `${stories[2]?.rightCoverage || 20}%`}}></div>
            </div>
          </div>
        </div>

        {/* Smaller Grid Cards */}
        {[3, 4, 5].map((index) => (
          <div key={index} className="gallery-card gallery-card-small">
            <div className="gallery-image-small">
              <img src={stories[index]?.image || "/api/placeholder/400/300"} alt={stories[index]?.title} />
              <div className="image-overlay"></div>
            </div>
            <div className="gallery-content">
              <span className="gallery-category">{stories[index]?.category || 'World'}</span>
              <h3 className="gallery-title">{stories[index]?.title || 'International Summit Addresses Climate Change Initiatives'}</h3>
              <div className="gallery-meta-small">
                <span className="source-count-small">📰 {stories[index]?.sources || 45} sources</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-footer">
        <button className="view-all-button">
          View All Stories
          <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default FeaturedNewsGallery;
