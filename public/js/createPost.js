
const savePostButton = document.getElementById('save-post');


function newPostFormHandler(event) {
  event.preventDefault();

  const title = document.getElementById('titleID').value;
  const text = document.getElementById('postID').value;

  fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({ title, text }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (response.ok) {
      document.location.replace('/dashboard')
    }
  }).catch((err) => {
    
    console.log(err)

  }
  )
}

savePostButton.addEventListener('click', newPostFormHandler);