import React, { useState } from 'react'
import './Post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RecommendIcon from '@mui/icons-material/Recommend';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/material';
const Post = (props) => {
    const [IsLiked,SetIsLiked] = useState(true)
    const [Likes,SetLikes] = useState(props.like)
    function HandleChange(){
        SetIsLiked(!IsLiked)
        SetLikes(prev=>(IsLiked?prev+1:prev-1))
    }
  return (
    <div>
        <div className="Post">
            <div className="PostWrapper">
                <div className="PostTop">
                    <div className="PostTop-1">
                        <img src={props.UserProfile} alt='' className='Image' />
                        <span className="UserName">{props.UserName}</span>
                        <span className="time">{props.Date}</span>
                    </div>
                    <Button size='small' sx={{
                        color:'black'
                    }}><MoreVertIcon /></Button>
                </div>
                <div className="Postcentre">

                    <div className="title">{props.Discussion}</div>
                    <img src={props.photo} className='Post-Img' alt='' />
                </div>
                <div className="PostBottom">
                    <div className="like">
                        <button className='Likebtn' onClick={HandleChange} ><RecommendIcon /></button>
                        <button className='Favbtn' onClick={HandleChange} ><FavoriteBorderIcon /></button>
                        <span className='peoplelike' >{Likes} people like it</span>
                    </div>
                    <div className="comment">{props.comment} comments</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post