import fetch from 'isomorphic-unfetch'

export function getProject(slug) {
  return fetch(`http://localhost:8000/project/${slug}`)
}

export function getProjects() {
  return fetch('http://localhost:8000/projects')
}

export function getPost(slug) {
  return fetch(`http://localhost:8000/post/${slug}`)
}

export function getPosts() {
  return fetch('http://localhost:8000/posts')
}
