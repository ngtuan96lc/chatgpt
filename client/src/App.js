import './index.css';
import React from 'react';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: [
                {user: "bot", text: "Hi, can I help you?"}
            ]
        }
        this.handleSubmitMessage = this.handleSubmitMessage.bind(this)
    }

    handleSubmitMessage(message) {
        this.setState({
            messages: [...this.state.messages, message]
        })
    }

    render() {
        return (
            <div className='wrapper-chatbox'>
                <h1>ChatGPT - Chat with me</h1>
                <div className='formChat'>
                    <MessageList messages={this.state.messages}/>
                    <SendMessageForm handleSubmitMessage={this.handleSubmitMessage}/>
                </div>
            </div>
        )
    }    
};


export default App;