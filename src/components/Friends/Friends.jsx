import React from 'react'
import './Friends.css'
import { Users } from "../Assests/DummyData/DummayData";
const Friends = (props) => {
  return (
    <div>
        <div className="friendProfile">
        <ol className="profile">
              {Users.map((item,index)=>(
                <li className="profileList" key={index}>
                    {props.IsOnline &&<span className="Dot"></span> }
                 <img className="Profile-Img" src={item.profilePicture} height={35} width={35} alt=""  />
                <span className="profileName">{item.username}</span> 
              </li>
              ))}
        </ol>
      </div>
    </div>
  )
}

export default Friends