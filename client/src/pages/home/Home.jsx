import Header from '../../components/header/Header'
import Post from '../../components/post/Post'
import SideBar from '../../components/sidebar/SideBar'
import Posts from '../../components/posts/Posts'
import './Home.css'

const Home = () => {
  return (
<>
    <Header />
    <div className='home'>
    <Posts/>
    <SideBar/>
    </div>
    </>
   
  )
}

export default Home