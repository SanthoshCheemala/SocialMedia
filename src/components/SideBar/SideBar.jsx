import { Button } from '@mui/material';
import './SideBar.css'
import {

  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import Friends from '../Friends/Friends';


const SideBar = () => {
  return (
    <div className='SideBar'>
      <div className="SideWrapper">
              <ol className='SideBarList'>
                <li className='SideBarListItem'>
                  <RssFeed className="SideBarIcon"/>
                  <span className="SideListText">Feed</span>
                </li>
                <li className='SideBarListItem'>
                  <Chat className="SideBarIcon"/>
                  <span className="SideListText">Chat</span>
                </li>
                <li className='SideBarListItem'>
                  <PlayCircleFilledOutlined className="SideBarIcon"/>
                  <span className="SideListText">Videos</span>
                </li>
                <li className='SideBarListItem'>
                  <Group className="SideBarIcon"/>
                  <span className="SideListText">Group</span>
                </li>
                <li className='SideBarListItem'>
                  <Bookmark className="SideBarIcon"/>
                  <span className="SideListText">Bookmarks</span>
                </li>
                <li className='SideBarListItem'>
                  <HelpOutline className="SideBarIcon"/>
                  <span className="SideListText">Questions</span>
                </li>
                <li className='SideBarListItem'>
                  <WorkOutline className="SideBarIcon"/>
                  <span className="SideListText">Jobs</span>
                </li>
                <li className='SideBarListItem'>
                  <Event className="SideBarIcon"/>
                  <span className="SideListText">Events</span>
                </li>
                <li className='SideBarListItem'>
                  <School className="SideBarIcon"/>
                  <span className="SideListText">Courses</span>
                </li>
              </ol>
              <Button variant='contained'  sx={{
                border:'1px solid lightgray ',
                color:'black',
                fontWeight:'500',
                background:'lightgray',
                paddingLeft:'20px',
                paddingRight:'20px'
              }}
              >Show More</Button>
      <hr></hr>
      <Friends IsOnline={false} />
      </div>
    </div>
  )
}

export default SideBar