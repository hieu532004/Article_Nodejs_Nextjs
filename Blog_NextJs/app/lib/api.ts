import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAllArticles = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${API_URL}/articles`, {
      params: { page, limit }
    });
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return { data: { articles: [], pagination: { totalRecord: 0, limit, page } } };
  }
};

export const getArticleById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/articles/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching article:', error);
    throw error;
  }
};