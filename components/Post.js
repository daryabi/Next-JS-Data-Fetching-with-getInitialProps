import React from 'react'
import Link from 'next/link'

const PostItem = ({ post }) => (
  <>
    <Link route='post' params={{ slug: post.title }}>
      <a>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </a>
    </Link>
  </>
)

export default PostItem