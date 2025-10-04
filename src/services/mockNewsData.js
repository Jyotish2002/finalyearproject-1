// Mock/Demo data for when API key is not available
export const generateMockArticles = (count = 10, category = 'general') => {
  const headlines = {
    general: [
      'Global Markets Show Signs of Recovery Amid Economic Uncertainty',
      'New Technology Breakthrough Could Revolutionize Renewable Energy',
      'International Summit Addresses Climate Change Commitments',
      'Scientists Discover Potential Treatment for Rare Disease',
      'Major City Unveils Ambitious Urban Development Plan',
      'Education Reform Bill Passes After Lengthy Debate',
      'Space Agency Announces New Exploration Mission',
      'Historic Trade Agreement Signed Between Nations',
      'Medical Researchers Make Progress in Cancer Treatment',
      'Cultural Festival Draws Record-Breaking Attendance',
      'Transportation Infrastructure Projects Get Green Light',
      'Wildlife Conservation Efforts Show Promising Results',
      'Digital Privacy Laws Updated to Protect Consumers',
      'Archaeological Discovery Sheds Light on Ancient Civilization',
      'Innovative Agriculture Techniques Improve Food Security',
    ],
    technology: [
      'AI Breakthrough: New Model Achieves Human-Level Performance',
      'Quantum Computing Reaches New Milestone in Processing Power',
      'Tech Giant Announces Revolutionary Smartphone Features',
      'Cybersecurity Experts Warn of Emerging Threats',
      'Open Source Project Gains Massive Industry Support',
      'Virtual Reality Platform Transforms Remote Collaboration',
      'New Programming Language Promises Better Performance',
      'Cloud Computing Costs Drop as Competition Intensifies',
      'Blockchain Technology Finds New Applications in Healthcare',
      'Silicon Valley Startup Disrupts Traditional Banking',
    ],
    business: [
      'Stock Market Reaches All-Time High on Strong Earnings',
      'Major Merger Creates Industry Giant Worth $100 Billion',
      'Startup Raises Record-Breaking Funding Round',
      'Retail Sector Adapts to Changing Consumer Habits',
      'Economic Growth Exceeds Analyst Expectations',
      'Corporate Sustainability Initiatives Show Real Impact',
      'Small Business Support Programs Announced',
      'Real Estate Market Shows Signs of Stabilization',
      'International Trade Tensions Begin to Ease',
      'Innovation Hub Opens in Emerging Market',
    ],
    sports: [
      'Underdog Team Wins Championship in Stunning Upset',
      'Star Athlete Breaks Long-Standing World Record',
      'Olympic Committee Announces New Sports for Games',
      'Major League Expands with Two New Franchises',
      'Coaching Legend Announces Retirement After Successful Career',
      'Young Player Named Rookie of the Year',
      'Stadium Renovation Project Completed Ahead of Schedule',
      'International Tournament Schedule Released',
      'Sports Medicine Advances Help Athletes Recover Faster',
      'Local Team Clinches Playoff Spot in Final Game',
    ],
    entertainment: [
      'Award-Winning Film Breaks Box Office Records',
      'Popular Series Renewed for Multiple Seasons',
      'Music Festival Announces Star-Studded Lineup',
      'Broadway Show Receives Critical Acclaim',
      'Streaming Platform Unveils Original Content Strategy',
      'Celebrity Couple Announces Engagement',
      'Concert Tour Sells Out in Minutes',
      'Documentary Wins Top Film Festival Prize',
      'Gaming Industry Revenue Reaches New Peak',
      'Art Exhibition Features Works from Renowned Artists',
    ],
    science: [
      'Scientists Confirm Major Discovery in Particle Physics',
      'New Planet Discovered in Habitable Zone',
      'Medical Breakthrough Could Cure Common Disease',
      'Climate Study Reveals Unexpected Findings',
      'Genetic Research Opens New Treatment Possibilities',
      'Marine Biology Team Discovers New Species',
      'Renewable Energy Storage Technology Improves',
      'Neuroscience Research Advances Understanding of Brain',
      'Environmental Study Shows Positive Impact of Conservation',
      'Space Telescope Captures Stunning Images of Distant Galaxy',
    ],
    health: [
      'New Study Links Lifestyle Changes to Better Health Outcomes',
      'Hospital Implements Cutting-Edge Treatment Program',
      'Mental Health Awareness Campaign Launches Nationwide',
      'Vaccine Development Progresses for Emerging Virus',
      'Nutrition Guidelines Updated Based on Latest Research',
      'Fitness Trends Focus on Holistic Well-Being',
      'Healthcare Technology Improves Patient Care',
      'Public Health Initiative Targets Preventable Diseases',
      'Medical Device Receives Regulatory Approval',
      'Wellness Program Shows Long-Term Benefits',
    ],
  };

  const descriptions = [
    'Experts analyze the implications and discuss what this means for the future.',
    'Industry leaders weigh in on the significance of this development.',
    'New details emerge as the story continues to develop.',
    'Stakeholders from across the spectrum share their perspectives.',
    'Analysis reveals deeper insights into this trending topic.',
    'Officials provide updates on the latest developments.',
    'Reactions pour in from around the world.',
    'What you need to know about this breaking story.',
    'Comprehensive coverage of this developing situation.',
    'Key facts and analysis from our expert team.',
  ];

  const sources = [
    'The Daily Chronicle',
    'Global News Network',
    'National Review',
    'Metro Times',
    'World Report',
    'The Independent',
    'Evening Standard',
    'Morning Herald',
    'City Post',
    'Regional Tribune',
  ];

  const categoryHeadlines = headlines[category] || headlines.general;
  const articles = [];

  for (let i = 0; i < count; i++) {
    const headlineIndex = i % categoryHeadlines.length;
    const randomHours = Math.floor(Math.random() * 24) + 1;
    
    articles.push({
      source: {
        id: null,
        name: sources[i % sources.length],
      },
      author: 'News Staff',
      title: categoryHeadlines[headlineIndex],
      description: descriptions[i % descriptions.length],
      url: '#',
      urlToImage: `https://picsum.photos/800/450?random=${i}`,
      publishedAt: new Date(Date.now() - randomHours * 3600000).toISOString(),
      content: descriptions[i % descriptions.length],
    });
  }

  return articles;
};

export const mockNewsResponse = (category = 'general', count = 20) => {
  return {
    status: 'ok',
    totalResults: count,
    articles: generateMockArticles(count, category),
  };
};

export default {
  generateMockArticles,
  mockNewsResponse,
};
