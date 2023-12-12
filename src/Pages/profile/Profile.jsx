import React from 'react'
import './Profile.css'
import Person from '../../components/Assests/person/1.jpeg'
import SideBar from '../../components/SideBar/SideBar'
import Feed from '../../components/Feed/Feed'
import {Users} from '../../components/Assests/DummyData/DummayData'
const Profile = () => {
  return (
    <div>
        <div className="ProfileWrapper">
            <div className="Left">
                <SideBar />
            </div>
            <div className="Right">
                <div className="Profile">
                        <img src='https://wallpapercave.com/wp/wp2777161.jpg' className='Place' alt='swit'/>
                        <img src={Person}  alt='Santhosh' className='Person' />
                        <div className='bio'>
                        <h3>Jennifer Lawrrence</h3>
                        <p>Hello my friends!</p>
                        </div>
                </div>
                <div className="Details">
                    <div className="food">
                        <Feed />
                    </div>
                    <div className="AboutMe">
                        <div className="Information">
                            <h4>User Information</h4>
                            
                        </div>
                        <div className="Freinds">
                            <div className="div">
                                <pre><span className='head'>City:</span>    New York</pre>
                                <pre><span className='head'>From:</span>    Madrid</pre>
                                <pre><span className='head'>RelationShip:</span>    Single</pre>
                            </div>
                            <h4>User Friends</h4>
                            <div className="Current-Friends">
                                {Users.map((User)=>(
                                    <div className="">
                                        <img src={User.profilePicture}  className='User-Profile' alt='user' height={'100'} width={'100'} />
                                        <p>{User.username}</p>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile