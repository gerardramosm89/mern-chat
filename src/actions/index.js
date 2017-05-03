import axios from 'axios';

const rootUrl = 'http://reduxblog.herokuapp.com/api';
const apiKey = '?key=01211989'
export function fetchPosts() {
  const request = axios.get(`${rootUrl}/posts${apiKey}`)
  return {
    type: 'FETCH_POSTS',
    payload: request
  };
}