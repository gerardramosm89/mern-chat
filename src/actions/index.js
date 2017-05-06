import axios from 'axios';

// SocketIO
import SocketIOClient from 'socket.io-client';
const socket = SocketIOClient('http://localhost:8080');

socket.on('connect', () => {
  console.log("Connected to server");
});
socket.on('disconnect', () => {
  console.log("Disconnected");
});


const rootUrl = 'http://reduxblog.herokuapp.com/api';

const apiKey = '?key=01211989'
export function fetchPosts(testData) {
  socket.emit('createMessage', {
    from: 'chris@kyg.com',
    text: "Hey man this is from the client!"
  }, () => {
    console.log("Hello");
  });
  const request = axios.get(`${rootUrl}/posts${apiKey}`);
  return {
    type: 'FETCH_POSTS',
    payload: request
  };
}

export function createBlog(data) {
  console.log("Post action attempted! and data we tried to pass through is: ", data);
  const request = axios.post(`${rootUrl}/posts${apiKey}`, data);

  return {
    type: 'NEW_BLOG',
    payload: request
  }
}