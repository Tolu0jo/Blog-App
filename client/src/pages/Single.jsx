import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  const[posts,setPosts]=useState([]);

  const cat = useLocation().search
//console.log(location)
 useEffect(()=>{
     const fetchData = async()=>{
         try {
             const res = api.get(`/posts/${cat}`)
             setPosts(res.data.posts)                
         } catch (error) {
             console.error(error)
         }
     } 
    },[cat])
  return (
    <div className='single'>
        <div className="content">
            <img src="https://images.unsplash.com/photo-1551021794-03be4ddaf67d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
       <div className="user">
        <img src="https://images.unsplash.com/photo-1579865346865-9223701ba92e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
        <Link to="/write?edit=2">
        <i className="editIcon fa-solid fa-pen-to-square"></i>
        </Link>
        <i className="deleteIcon fa-solid fa-trash"></i>
        </div>
       </div>
       <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat rerum non, laborum voluptas quis quibusdam quas culpa nemo aspernatur, odio obcaecati, corporis autem fugiat minima molestiae soluta amet modi. Nisi, accusamus veritatis eum architecto, qui optio vitae inventore, omnis necessitatibus voluptatem adipisci. Nesciunt culpa enim aliquid labore sunt ducimus vero ab, minima quisquam. Ipsa repellat quae provident eveniet quos odio assumenda. Totam quidem vel animi nam, iure non ea possimus amet! Recusandae neque placeat dolor maxime velit vitae ipsam repudiandae? Soluta laborum deleniti, dicta non modi illo ab quas sapiente minima quia cum, voluptatibus dolor sequi hic inventore itaque illum magni, expedita doloribus aliquam perferendis perspiciatis quam! Deleniti commodi explicabo laboriosam quibusdam, officia consequuntur sunt earum impedit nostrum eum eligendi exercitationem, officiis doloribus voluptas molestiae quae, odio iste sapiente fugiat et! Fugit et necessitatibus expedita odit animi corporis, dicta non quae asperiores vero, autem, esse voluptas unde nulla natus nam! Nobis quod earum ut ducimus ab illum perspiciatis iure doloremque dolorum repellat eos culpa, dolor totam voluptate illo optio, tempora eveniet. Eligendi, recusandae. Dolores, voluptatibus. Libero perspiciatis quo ipsam vitae qui, doloremque sunt expedita illum fugit ex veniam iure voluptatum nulla! Quam impedit nihil adipisci libero magni non, quod sequi?</p>
        </div>
        <div className="menu">
            <Menu/>
        </div>
    </div>
  )
}

export default Single