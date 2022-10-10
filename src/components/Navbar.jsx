import React from "react";


const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Mahi Chat</span>
      <div className="user">
        <img src="https://images.unsplash.com/photo-1665376304352-a3f24ae74bf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="img" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
