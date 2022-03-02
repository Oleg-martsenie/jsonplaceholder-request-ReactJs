import React from 'react'
import { Posts } from '../../types/posts'

interface Props {
    data: Posts
}

export const PostAnswer = ({data}: Props) => {
  return (
    <div className="posts" >
        <h3>{data.title}</h3>
        <div className="content">
            <span># {data.id}</span>
            <span># {data.userId}</span>
        </div>
        <p>{data.body}</p>
    </div>
    )
}
