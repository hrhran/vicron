import { CHATS, messages } from './Chats.constants';
import Chat from '../../atoms/Chatsblock';
import { useState } from 'react';
import './Chats.Modules.scss';
import Message from '../../atoms/Message';
import Chatsblock from '../../atoms/Chatsblock';
const Chats = () => {
    const [selectedChat, setSelectedChat] = useState(null);
    const handleChatClick = (id) => {
        console.log(id);
        setSelectedChat(id);
    }

    return (
        <div className='chat'>
            <div className='chatlist'>
                {CHATS.map((chatdetails) => {
                    return (
                        <Chatsblock
                            key={chatdetails?.id}
                            name={chatdetails?.name}
                            lastMessage={chatdetails?.lastMessage}
                            time={chatdetails?.time}
                            unreadCount={chatdetails?.unreadCount}
                            isSelected={selectedChat === chatdetails?.id}
                            onClick={() => handleChatClick(chatdetails?.id)}
                        />
                    );
                })}
            </div>
            <div className='chat-message'>
                {messages.map((message) => {
                    return (
                        <Message
                            message={message.message}
                            key={message?.id}
                            isSender={message?.isSender}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default Chats;