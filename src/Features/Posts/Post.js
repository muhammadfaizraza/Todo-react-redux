import React from 'react'
import { useSelector } from 'react-redux'
import {ExportAll} from './PostSlice'
import '../../Style/Post.css'

const Post = () => {
const Post =  useSelector(ExportAll)
console.log(Post)

const rederPost = Post.map((post)=>( 


<article key={post.id}>
<h1>{post.content} </h1>
<h3>{post.describe} </h3>
</article>
))







  return (
    <div>
        
        {rederPost}
        </div>
  )
}

export default Post