import React from "react";

class SendMessageForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit(e) {
        this.props.handleSubmitMessage({
            user: 'human',
            text: this.state.message
        })
        this.setState({
            message: ''
        })
        fetch('http://localhost:4000/', {
            method: 'POST',
            body: JSON.stringify({text: this.state.message}),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
        .then(res => res.json())
        .then(
            (data) => {
                this.props.handleSubmitMessage({
                    user: 'bot',
                    text: data.bot
                })
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        );
    } 

    render() {
        return (
            <div className='message-box'>
                <textarea 
                    value={this.state.message}
                    onChange={this.handleChange}
                    type='textarea' 
                    name='message' 
                    id='inp-message' 
                    placeholder='Send a message ...'/>
                <button className='btn-send' onClick={this.handleSubmit}>Send</button>
            </div>
        )
    }
}

export default SendMessageForm