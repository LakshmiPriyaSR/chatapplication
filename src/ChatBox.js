import React from 'react';
import './App.css';
import MessageBox from './MessageBox';
import { Row } from 'react-bootstrap';

class ChatBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chatBox: [
            ],
            msgSendFlag: false
        };

        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage(e) {
        e.preventDefault();
        if (this.newMessage.value === '') {
            alert("Enter your message!!");
        } else {
            this.setState({
                msgSendFlag: true,
                chatBox: this.state.chatBox.concat([{
                    messageSent: this.newMessage.value,
                    messageReceive: "Got your message : " + this.newMessage.value
                }]),
            });
            this.newMessage.value = '';
        }
    }

    render() {
        const { chatBox } = this.state;

        return (
            <div className="container" >
                <div className="top-bar">
                    <h3>
                        <span className="" /> Chat {" "}
                    </h3>
                </div>

                <div className="msg_container_base">
                    {this.state.msgSendFlag ? <div>
                        <ul ref="chatBox">
                            {
                                chatBox.map((chat) =>
                                    <MessageBox chat={chat} />
                                )
                            }
                        </ul>
                    </div> : null}
                </div>
                <Row>
                    <form onSubmit={(e) => this.sendMessage(e)} className="">

                        <input
                            id="btn-input"
                            ref={evt => this.newMessage = evt}
                            type="text"
                            className="form-control input-sm"
                            placeholder="Type a message..."
                        />
                        <button className="btn btn-primary btn-sm" id="btn-chat" >
                            Send
                                        </button>
                    </form>
                </Row>
            </div>
        );
    }
}

export default ChatBox;

