'use client'

import axios from "axios"
import AddPost from "./../components/AddPost"
import { useQuery } from "@tanstack/react-query"
import Post from "./../components/Post"
import { PostType } from "./../types/Posts"

//Fetch all posts
const allPosts = async() => {
  const response = await axios.get('/api/posts/getPosts')
  return response.data
}

export default function Posts() {

  const { data, error, isLoading } = useQuery<PostType[]>({
    queryFn: allPosts, 
    queryKey: ["posts"],
  })

  if (error) return error
  if (isLoading) return "Loading..."
  console.log(data)

  return (
    <main>
      <AddPost />
      {data?.map((post) => (
        <Post 
          key={post.id}
          comments={post.comments}
          name={post.user.name} 
          avatar={post.user.image} 
          title={post.title} 
          id={post.id}
        />
      ))}
    </main>
  )
}