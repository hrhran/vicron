const Chatsblock = (props) => {
    const { key, name, lastMessage, time, unreadCount, isSelected, onClick } = props;
    return (
        <div className="chat-block" style={{ background: isSelected ? 'linear-gradient(to right, rgb(250,48,90), rgb(128,36,206))' : 'rgb(23,28,41)' }} key={key} onClick={onClick}>
            <img src="img/vikram.jpg" className="chat-profile"></img>
            <div className='chat-details'>
                <h3>{name}</h3>
                <h4>{lastMessage}</h4>
            </div>
            <div className='message-details'>
                <h3>{time}</h3>
                <span className='unseen-count'>{unreadCount}</span>
            </div>
        </div>
    );
};
export default Chatsblock