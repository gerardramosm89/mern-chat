import _ from 'lodash';

import SocketIOClient from 'socket.io-client';


console.log("blogs_reducer was loaded");
export default function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_POSTS':
      console.log(action.payload.data);
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}