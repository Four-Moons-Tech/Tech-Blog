const saveCommentButton = document.getElementById('save-comment');


function newCommentFormHandler(event) {
  event.preventDefault();

  const post_id = document.getElementById('postId').value;
  const text = document.getElementById('commentID').value;

  fetch('/api/comments', {
    method: 'POST',
    body: JSON.stringify({ post_id, text }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (response.ok) {
      document.location.reload()
    }
  }).catch((err) => {
    
    console.log(err)

  }
  )
}

saveCommentButton.addEventListener('click', newCommentFormHandler);