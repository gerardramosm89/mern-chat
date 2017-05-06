import React from 'react';
import ReactDOM from 'react-dom';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    // this.socket = SocketIOClient('http://localhost:8080');
    this.state = {
      from: '',
      message: '',
      messages: []
    }
  }
  componentDidMount() {
    // this.socket.on('connect', () => {
    //   console.log("Connected to server");
    // });
    // this.socket.on('disconnect', () => {
    //   console.log("Disconnected from server");
    // });
    // this.socket.on('newMessage', (message) => {
    //   console.log('New message received', message);
    //   let curMessages = this.state.messages;
    //   curMessages.push(message);
    //   this.setState({ 
    //     messages: curMessages 
    //   }, () => console.log("message was pushed!"));
    //   this.scrollToBottom();
    // });
    // this.socket.emit('createMessage', {
    //   from: 'chris@kyg.com',
    //   text: "Hey man this is from the client!"
    // });
    console.log("the currentProps are: ", this.props);
  }
  componentWillUnMount() {
    // console.log("Should be disconnecting");
    // this.socket.disconnect();
  }
  scrollToBottom() {
    var messages = document.body.querySelector('#messages');
    var messagesContainer = document.body.querySelector('.messages--container');
    var newMessage = messages.lastChild;
    var newMessageHeight = messages.lastChild.clientHeight;
    if (newMessage.previousSibling) {
      var siblingHeight = newMessage.previousSibling.clientHeight;
    } else {
      siblingHeight = 0;
    }
    var clientHeight = messagesContainer.clientHeight;
    var scrollTop = messagesContainer.scrollTop;
    var scrollHeight = messages.scrollHeight;
    if (clientHeight + scrollTop + newMessageHeight + siblingHeight >= scrollHeight) {
      document.body.querySelector('.messages--container').scrollTop = scrollHeight - clientHeight;
    }
    
  }
  renderMessages() {
    return this.state.messages.map(message => {
      return (
        <li>
          <p>{`${message.from}: ${message.text}`}</p>
        </li>
      );
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    // this.socket.emit('createMessage', {
    //   from: this.state.from,
    //   text: this.state.message
    // }, (data) => {
    //   // console.log(data);
    // });
    // this.setState({
    //   message: ''
    // })
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
            <input name="from" onChange={this.changeFrom.bind(this)} className="form-control" type="text" value={this.state.from} />
            <label>message:</label>
            <input name="message" onChange={this.changeFrom.bind(this)} className="form-control" type="text" value={this.state.message} />
            <button className="btn btn-primary">Submit</button>
          </form>
          <div className="messages--container col-10 offset-1">
            <ul id="messages">
              {this.renderMessages()}
            </ul>
          </div>


        </div>
      </div>
    );
  }
}

export default Chat;