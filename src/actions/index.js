import axios from 'axios';

const rootUrl = 'http://reduxblog.herokuapp.com/api';
const apiKey = '?key=01211989'
export function fetchPosts(testData) {
  const request = axios.get(`${rootUrl}/posts${apiKey}`);
  console.log("data from front end through reducer is: ", testData);
  return {
    type: 'FETCH_POSTS',
    payload: request
  };
}