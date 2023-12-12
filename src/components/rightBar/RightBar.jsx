import './rightBar.css'
import Gift from '../Assests/pngwing.com.png'
import online from '../Assests/ad.png'
import Friends from '../Friends/Friends'

const RightBar = () => {
  return (
    <div className='RightBar'>
      <div className="RightWrapper">
      <div className="top">
        <div className="Gift">
        <img src={Gift} alt='Gift' width={'75px'} height={'75px'} />
        <span className="birthDay"><span className="birthName">Santhosh Cheemala</span> and <span className="birthName">3 others</span> have birhday today</span>
        </div>
      </div>
      <div className="middle">
          <img className='online' src={online} alt='cold'/>
      </div>
      <div className="bottom">
          <span className='birthName'>Online Friends</span>
          <Friends IsOnline={true} />

      </div>
      </div>
    </div>
  )
}

export default RightBar