import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import { Search } from '@mui/icons-material';
import {  useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
  return (
    <div className='NavBar'>
        <div className="NavBarLeft">
            <button className="pro" onClick={()=>{navigate('/')}}><h2>SanSocial</h2></button>
        </div>
        <div className="NavBarCentre">
            <div className="Search">
                <Search  sx={{cursor:'pointer'}} />
                <input type='text' placeholder='Search for friend,post and video' />
            </div>
        </div>
                <div className='NavBarRight'>
                <div className='Mine'>
                        <p>HomePage</p>
                        <p>TimeLine</p>
                    </div>
                    <div className='Logo'>
                                <div className="Icon">
                                    <PersonIcon />
                                    <span className='Icon-Badge'>1</span>
                                </div>
                                <div className="Icon">
                                    <ChatIcon />
                                    <span className='Icon-Badge'>1</span>
                                </div>
                                <div className="Icon">
                                    <NotificationsIcon />
                                    <span className='Icon-Badge'>1</span>
                                </div>
                    </div>
            <div className="img-container">
                <button className='pro'onClick={()=>{navigate('profile')}} ><img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='santhosh' height={35} width={35} /></button>
            </div>
        </div>
    </div>
  )
}

export default NavBar