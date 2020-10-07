import fetch from 'isomorphic-fetch'
//https://medium.com/@matswainson/building-a-search-component-for-your-next-js-markdown-blog-9e75e0e7d210
export function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
}

export function getPost(slug) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?title=${slug}`)
}

export function getPostId(post_id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
}
export function getPostComment(id) {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
}