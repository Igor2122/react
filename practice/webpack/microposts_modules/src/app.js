import {
    http
} from './http';
import {
    ui
} from './ui';

// Get posts on domLoad 
document.addEventListener('DOMContentLoaded', getPosts);

// listen to add post button click
document.querySelector('.post-submit').addEventListener('click', addPost)

function getPosts() {

    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(err));

}

// Submit post to DB
function addPost () { //why i cannot do this with arrow function 
    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    const data = {
        title,
        body, // if the key and value are the same we can just leave it as single key/value
    }

    // Create Post
    http.post('http://localhost:3000/posts', data)
        .then(data => {
            ui.showAlert('Post Added', document.querySelector('.card'));
            ui.clearFields(document.querySelectorAll('.form-control'));
            getPosts();// so here we can see the newly added posts
        })
        .catch(err => console.log(err))

    
}


