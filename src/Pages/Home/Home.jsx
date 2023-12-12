import './Home.css'
import SideBar from '../../components/SideBar/SideBar';
import Feed from '../../components/Feed/Feed';
import RightBar from '../../components/rightBar/RightBar';

const Home = () => {
  return (
    <div>
        <div className="HomeContainer">
          <SideBar className='SideBar' />
          <Feed className="Feed" />
          <RightBar />
        </div>
    </div>
  )
}

export default Home