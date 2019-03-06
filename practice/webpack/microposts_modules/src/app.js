import { http } from './http';
import { ui } from './ui';

// Get posts on dom load 

document.addEventListener('DOMContentLoaded', getPosts);

function getPosts () {
    console.log('respose')
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err));
        console.log('respose')
}