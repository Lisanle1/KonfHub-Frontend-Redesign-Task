import axios from 'axios';

const API_URL = 'https://dev-api.konfhub.com';

export const getEventData = async () => {
  try {
    const response = await axios.get(`${API_URL}/event/public/konfhub-frontend-evaluation-task`);
    return response.data;
  } catch (error) {
    console.error('Error fetching event data:', error);
    throw error;
  }
};
