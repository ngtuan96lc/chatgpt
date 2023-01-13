import React from "react";

class Message extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: props.user,
            text: props.text
        }
    }

    render () {
        return (
            <div className={`message message-${this.state.user} ${this.state.user}`}>
                <div className={`message-text message-text-${this.state.user}`}>{this.state.text}</div>
            </div>
        )
    }
}

export default Message