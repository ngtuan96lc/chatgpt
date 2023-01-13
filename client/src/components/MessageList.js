import React from "react";
import Message from "./Message";

class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {this.props.messages.map((message, index) => {
                    return(
                        <Message key={index.toString()} user={message.user} text={message.text} />
                    )
                })}
            </div>
        )
    }
}

export default MessageList;