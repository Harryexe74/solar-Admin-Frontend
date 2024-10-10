
// utils/auth.js
import { login } from '../components/redux/auth/authSlice';

// export const checkAuth = (dispatch) => {
//   const token = localStorage.getItem('token');
//   const user = localStorage.getItem('user');
//   if (token && user) {
//     dispatch(login({ token, user: JSON.parse(user) }));
//   }
// };



export const checkAuth = (dispatch) => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  // Check if token and user data exist
  if (token && user) {
    try {
      // Parse the user data from localStorage
      const parsedUser = JSON.parse(user);
      
      // Dispatch the login action with token and user data
      dispatch(login({ token, user: parsedUser }));
    } catch (error) {
      console.error('Failed to parse user data:', error);
      // Optionally, you can dispatch a logout or handle the error
    }
  } else {
    console.warn('No token or user data found in localStorage.');
    // Optionally, you can dispatch a logout action here if the user is not authenticated
  }
};
