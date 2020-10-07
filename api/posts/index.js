import fetch from 'isomorphic-fetch' 

export function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
}

export function getPost(slug) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?title=${slug}`)
}

export function getPostId(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
}
export function getPostComment(id) {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
}