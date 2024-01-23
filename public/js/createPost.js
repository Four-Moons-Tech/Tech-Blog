savePostButton = document.getElementById('save-post')
function newPostFormHandler(event) {
    event.preventDefault();
  
    const title = document.getElementById('titlerID').value;
    const content = document.getElementById('postID').value;
  
     fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  savePostButton.addEventListener('submit', newFormHandler);