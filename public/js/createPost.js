// const { response } = require("express");

const savePostButton = document.getElementById('save-post');


function newPostFormHandler(event) {
    event.preventDefault();
    
    const title = document.getElementById('titleID').value;
    const content = document.getElementById('postID').value;
  
     fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({title, content}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then ((response)=> {
      if (response.ok) {
        document.location.replace('/dashboard')
      }
     }).catch((err) =>{
      console.log(err)
      
     }
     )
  }
  
  savePostButton.addEventListener('submit', newPostFormHandler);