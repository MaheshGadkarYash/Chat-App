import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo ">
        <img
          src="https://images.unsplash.com/photo-1665376304352-a3f24ae74bf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://images.unsplash.com/photo-1665376304352-a3f24ae74bf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
