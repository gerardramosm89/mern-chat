import React from 'react';
import ReactDOM from 'react-dom';
import SocketIOClient from 'socket.io-client';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.socket = SocketIOClient('http://localhost:8081');
    this.state = {
      from: '',
      message: '',
      messages: []
    }

  }
  componentDidMount() {
    this.socket.on('connect', () => {
      console.log("Connected to server");
    });
    this.socket.on('disconnect', () => {
      console.log("Disconnected from server");
    });
    this.socket.on('newMessage', (message) => {
      console.log('New message received', message);
      let curMessages = this.state.messages;
      curMessages.push(message);
      this.setState({ 
        messages: curMessages 
      }, () => console.log("message was pushed!"));
    });
    // this.socket.emit('createMessage', {
    //   from: 'chris@kyg.com',
    //   text: "Hey man this is from the client!"
    // });
  }
  renderMessages() {
    return this.state.messages.map(message => {
      return (
        <li>
          <p>{`${message.from}: ${message.text}`}</p>
          {/*<p>{message.text}</p>*/}
        </li>
      );
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    this.socket.emit('createMessage', {
      from: this.state.from,
      text: this.state.message
    }, (data) => {
      console.log(data);
    });
  }
  changeFrom(e) {
    let targetName = e.target.name;
    switch (targetName) {
      case 'from':
        this.setState({ from: e.target.value });
        break;
      case 'message':
        this.setState({ message: e.target.value });
        break;
      default:
        console.log("We are out of targetNames");
    }
  }
  render() {
    return (
      <div className="container">
        <div className="col-10 offset-1">
          <h1>MERN Chat!</h1>
          <form onSubmit={this.handleSubmit.bind(this) }>
            <label>from: </label>
            <input name="from" onChange={this.changeFrom.bind(this)} className="form-control" type="text" />
            <label>message:</label>
            <input name="message" onChange={this.changeFrom.bind(this)} className="form-control" type="text" />
            <button className="btn btn-primary">Submit</button>
          </form>

          <ul id="messages">
            {this.renderMessages()}
          </ul>

        </div>
      </div>
    );
  }
}

export default App;