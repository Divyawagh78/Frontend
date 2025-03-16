import api from '../config';

export const experienceService = {
  getAllExperiences: async () => {
    try {
      const response = await api.get('/experience');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch experiences' };
    }
  },

  getExperience: async (id) => {
    try {
      const response = await api.get(`/experience/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch experience' };
    }
  },

  createExperience: async (experienceData) => {
    try {
      const response = await api.post('/experience', experienceData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to create experience' };
    }
  },

  updateExperience: async (id, experienceData) => {
    try {
      const response = await api.put(`/experience/${id}`, experienceData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update experience' };
    }
  },

  deleteExperience: async (id) => {
    try {
      const response = await api.delete(`/experience/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to delete experience' };
    }
  }
}; 