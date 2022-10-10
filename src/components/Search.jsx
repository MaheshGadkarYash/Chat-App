import React from 'react'

const Search = () => {
  return (
    <div className='search'>
    <div className="searchForm">
        <input type="text" placeholder='Find A User'/>
    </div>
    <div className="userChat">
        <img src="https://images.unsplash.com/photo-1665376304352-a3f24ae74bf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
        <div className="userChatInfo">
            <span>Jane</span>
        </div>
    </div>

    </div>
  )
}

export default Search