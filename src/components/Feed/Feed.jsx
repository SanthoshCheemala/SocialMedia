import './Feed.css'
import Share from '../Share/Share'
import Post from '../post/Post'
import { Users,Persons } from "../Assests/DummyData/DummayData";
function Feed() {
  return (
    <div className='feed'>
      <div className="FeedWrapper">
        <Share />
      {Persons.map((Person,index)=>(
        <Post key={index} 
        UserName={Users[index].username} 
        UserProfile={Users[index].profilePicture} 
        Date={Person.date} 
        photo = {Person.photo}
        like = {Person.like}
        comment = {Person.comment}
        Discussion = {Person.desc}
        />  
      ))}
      </div>
    </div>
  )
}

export default Feed
