import axios from 'axios';
import { mockNewsResponse } from './mockNewsData';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = process.env.REACT_APP_NEWS_API_BASE_URL || 'https://newsapi.org/v2';

// Check if API key is available
const USE_MOCK_DATA = !API_KEY || API_KEY === 'your_api_key_here';

// Create axios instance with default config
const newsAPI = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
});

// News API Service
export const newsService = {
  // Get top headlines
  getTopHeadlines: async (params = {}) => {
    // Use mock data if no API key
    if (USE_MOCK_DATA) {
      console.log('📰 Using mock data (No API key configured)');
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockNewsResponse(params.category || 'general', params.pageSize || 20));
        }, 500); // Simulate network delay
      });
    }

    try {
      const response = await newsAPI.get('/top-headlines', {
        params: {
          country: params.country || 'us',
          category: params.category,
          q: params.query,
          pageSize: params.pageSize || 20,
          page: params.page || 1,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching top headlines:', error);
      throw error;
    }
  },

  // Search everything
  searchNews: async (query, params = {}) => {
    // Use mock data if no API key
    if (USE_MOCK_DATA) {
      console.log('📰 Using mock data (No API key configured)');
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockNewsResponse('general', params.pageSize || 20));
        }, 500);
      });
    }

    try {
      const response = await newsAPI.get('/everything', {
        params: {
          q: query,
          language: params.language || 'en',
          sortBy: params.sortBy || 'publishedAt',
          pageSize: params.pageSize || 20,
          page: params.page || 1,
          from: params.from,
          to: params.to,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error searching news:', error);
      throw error;
    }
  },

  // Get news by category
  getNewsByCategory: async (category, params = {}) => {
    // Use mock data if no API key
    if (USE_MOCK_DATA) {
      console.log(`📰 Using mock ${category} data (No API key configured)`);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockNewsResponse(category, params.pageSize || 20));
        }, 500);
      });
    }

    try {
      const response = await newsAPI.get('/top-headlines', {
        params: {
          category: category,
          country: params.country || 'us',
          pageSize: params.pageSize || 20,
          page: params.page || 1,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${category} news:`, error);
      throw error;
    }
  },

  // Get news by source
  getNewsBySource: async (sources, params = {}) => {
    // Use mock data if no API key
    if (USE_MOCK_DATA) {
      console.log('📰 Using mock data (No API key configured)');
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockNewsResponse('general', params.pageSize || 20));
        }, 500);
      });
    }

    try {
      const response = await newsAPI.get('/top-headlines', {
        params: {
          sources: sources,
          pageSize: params.pageSize || 20,
          page: params.page || 1,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching news by source:', error);
      throw error;
    }
  },

  // Get sources
  getSources: async (params = {}) => {
    // Use mock data if no API key
    if (USE_MOCK_DATA) {
      console.log('📰 Using mock data (No API key configured)');
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            status: 'ok',
            sources: [
              { id: 'mock-source-1', name: 'Demo News Network', category: 'general' },
              { id: 'mock-source-2', name: 'Sample Times', category: 'general' },
            ],
          });
        }, 500);
      });
    }

    try {
      const response = await newsAPI.get('/sources', {
        params: {
          category: params.category,
          language: params.language || 'en',
          country: params.country,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching sources:', error);
      throw error;
    }
  },
};

export default newsService;
