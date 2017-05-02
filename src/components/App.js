import React from 'react';
import ReactDOM from 'react-dom';
import SocketIOClient from 'socket.io-client';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.socket = SocketIOClient('http://localhost:8081');
    this.state = {
      from: '',
      message: ''
    }

  }
  componentDidMount() {
    this.socket.on('connect', () => {
      console.log("Connected to server");
    });
    this.socket.on('disconnect', () => {
      console.log("Disconnected from server");
    });
    this.socket.on('newMessage', (email) => {
      console.log('New message received', email);
    });
    this.socket.emit('createMessage', {
      from: 'chris@kyg.com',
      text: "Hey man this is from the client!"
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
    this.socket.emit('createMessage', {
      from: 'chris@kyg.com',
      text: "Hey man this is from the client!"
    });
  }
  render() {
    return (
      <div className="container">
        <div className="col-10 offset-1">
          <h1>MERN Chat!</h1>
          <form onSubmit={this.handleSubmit.bind(this) }>
            <label>from: </label>
            <input onChange={(e) => console.log(e.target.value)} className="form-control" type="text" />
            <label>message:</label>
            <input onChange={(e) => console.log(e.target.value)} className="form-control" type="text" />
            <button className="btn btn-primary">Submit</button> 
          </form>
         
        </div>
      </div>
    );
  }
}

export default App;