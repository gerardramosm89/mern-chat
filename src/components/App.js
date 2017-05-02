import React from 'react';
import ReactDOM from 'react-dom';
import SocketIOClient from 'socket.io-client';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.socket = SocketIOClient('http://localhost:8081');


  }
  componentDidMount() {
    this.socket.on('connect', () => {
      console.log("Connected to server");
    })
  }
  render() {
    return (
      <div className="container">
        <div className="display-3">
          <h1>MERN Chat!</h1>
        </div>
      </div>
    );
  }
}

export default App;