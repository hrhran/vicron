const Message = (props) => {
    const {message, key, isSender}=props;
    return (
        <div className="message-box" key={key} style={isSender ?{background:'linear-gradient(to right, rgb(255,152,93), rgb(255,61,87))'}:{marginLeft:'auto', background:'linear-gradient(to right, rgb(250,48,90), rgb(128,36,206))'}}>
            <img src="img/vikram.jpg" className="message-profile" style={isSender ? {left:'-10px'}:{right:'-10px'}}></img>
            <h3>{message}</h3>
        </div>
    );
}
export default Message;