import axios from 'axios';

// SocketIO
import SocketIOClient from 'socket.io-client';
const socket = SocketIOClient('http://localhost:8080');
console.log('socket is: ', socket);
socket.on('connect', () => {
  console.log("Connected to server");
});
socket.on('disconnect', () => {
  console.log("Disconnected");
  fetchPosts();
});

// const Variables
const rootUrl = 'http://reduxblog.herokuapp.com/api';
const apiKey = '?key=01211989'

// Action Functions
export function fetchPosts(testData) {
  console.log("Fetch posts was called");
  const request = axios.get(`${rootUrl}/posts${apiKey}`);
  return {
    type: 'FETCH_POSTS',
    payload: request
  };
}

export function sendMessage(data) {
  console.log("send message action's data was:", data);
  socket.emit('createMessage', data, () => {
    console.log("Hello");
  });
  return {
    type: 'SEND_MESSAGE',
    payload: data
  };
}

export function createBlog(data) {
  const request = axios.post(`${rootUrl}/posts${apiKey}`, data);
  return {
    type: 'NEW_BLOG',
    payload: request
  }
}