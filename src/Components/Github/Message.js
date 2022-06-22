import React from "react";


function Message({ message }) {

 const quote = {color:"white", opacity:"60%",fontFamily:  'Cinzel',fontSize:"1.5rem"}


  return (
    <div className={message.type}>
      <div className={`msg-${message.type}`}>
        <div className="letter"></div>
      </div>
      <div className="shadow"></div>
      <h2 className="titl" style={quote}>“So if you want to go fast, if you want to get done quickly, if you want your code to be easy to write, make it easy to read.” — Robert C. Martin</h2>
      {message.desc && <p className="message" ></p>}
    </div>
  );
}

export default Message;
