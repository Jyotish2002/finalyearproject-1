import React, { useState } from 'react';
import { 
  featuredStory, 
  dailyBriefingData, 
  briefingStories, 
  topNewsStories, 
  worldNewsStories, 
  blindspotStories, 
  topicCategories 
} from './mockData';

// Import Components - Fixed paths to match your structure
import MainNavbar from './Navigation/MainNavbar';
import TopicsBar from './Navigation/TopicsBar';
import DailyBriefing from './MainContent/DailyBriefing';
import FeaturedStory from './MainContent/FeaturedStory';
import TopNewsStories from './MainContent/TopNewsStories';
import BlindspotWidget from './Sidebar/BlindspotWidget';
import NewsBiasWidget from './Sidebar/NewsBiasWidget';
import LocalNewsWidget from './Sidebar/LocalNewsWidget';
import Footer from './Layout/Footer';

// Import CSS
import './styles/global.css';
import './styles/header.css';
import './styles/topics.css';
import './styles/main-content.css';
import './styles/sidebar.css';
import './styles/footer.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeTopic, setActiveTopic] = useState('Israel-Gaza');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="ground-news-app">
      {/* Top Banner */}
      <div className="promo-banner">
        <span>See every side of every news story</span>
        <button className="get-started-btn">Get Started</button>
      </div>

      <MainNavbar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <TopicsBar 
        topicCategories={topicCategories}
        activeTopic={activeTopic}
        setActiveTopic={setActiveTopic}
      />

      <div className="main-layout">
        <div className="content-wrapper">
          <main className="main-content">
            <DailyBriefing 
              dailyBriefingData={dailyBriefingData}
              briefingStories={briefingStories}
            />
            <FeaturedStory featuredStory={featuredStory} />
            <TopNewsStories 
              topNewsStories={topNewsStories}
              worldNewsStories={worldNewsStories}
            />
          </main>

          <aside className="sidebar">
            <BlindspotWidget blindspotStories={blindspotStories} />
            <NewsBiasWidget />
            <LocalNewsWidget />
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
