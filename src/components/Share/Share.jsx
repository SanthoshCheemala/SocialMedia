import React from 'react'
import Person1 from '../Assests/person/1.jpeg'
import {PermMedia, Label,Room, EmojiEmotions} from "@mui/icons-material"
import './Share.css'
import { Button } from '@mui/material'
const Share = () => {
  return (
    <div>
        <div className="share">
            <div className='Write'>
            <img src={Person1} alt='' className='Share-Img' ></img>
            <input type="text" className="Sharetext" placeholder="What's in your mind Santhosh" />
            </div>
            <div className="post">
            <hr />
            <div className="Icon-button">
              <div className="TextIcon">
                    <div className="item">
                        <PermMedia sx={{color:'crimson'}} />
                        <span className="Text">
                            Photo or Video
                        </span>
                    </div>
                    <div className="item">
                        <Label sx={{color:'blue'}} />
                        <span className="Text">
                           Tag
                        </span>
                    </div>
                    <div className="item">
                        <Room sx={{color:'green'}} />
                        <span className="Text">
                            Location
                        </span>
                    </div>
                    <div className="item">
                        <EmojiEmotions sx={{color:'orange'}} />
                        <span className="Text">
                           Feelings
                        </span>
                    </div>
              </div>
              <Button size='small' variant='contained' color='success'>Share</Button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Share
