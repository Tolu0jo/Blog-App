import React, { useEffect } from 'react'
import { Link, useLocation} from 'react-router-dom'
import Menu from '../components/Menu'
import { useState } from 'react';
import api from '../axios';

const Single = () => {
  const[post,setPost]=useState({});

  const location = useLocation()
console.log(location)
//const postId = location.pathname.split('/')[location.pathname.split('/').length-1]
const postId = location.pathname.split('/')[2]
console.log(postId)

 useEffect(()=>{
     const fetchData = async()=>{
         try {
             const res = api.get(`/posts/${postId}`)
             setPost(res.data.posts)                
         } catch (error) {
             console.error(error)
         }
     };
     fetchData()
    },[post])
  return (
    <div className='single'>
        <div className="content">
            <img src={post?.img} alt="" />
       <div className="user">
        <img src={post?.username}alt="" />
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