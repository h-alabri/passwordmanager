// Import the configured Axios instance
import api from './api'; 

// Function to fetch users
export const fetchUsers = async () => {
  try {
    const response = await api.get('/api/user');
    return response.data; // Assuming the backend returns JSON data
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Re-throw to handle it in the component
  }
};
