import React from 'react';
import './App.css';

class MessageBox extends React.Component {
    render() {
        let chat = this.props.chat;
        return (
            <div>
                <li className="msg_container base_sent messages">{chat.messageSent}</li>
                <li className="msg_container base_receive messages">{chat.messageReceive}</li>
            </div>
        )
    };
}

export default MessageBox;