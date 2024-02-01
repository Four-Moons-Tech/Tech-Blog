



function updatePostFormHandler(event) {
  event.preventDefault();
  const form = event.target
  const title = form.title.value
  const text = form.text.value

  fetch(`/api/posts/${form.dataset.id}`, {
    method: 'PUT',
    body: JSON.stringify({
       title, text
      }),
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

document.querySelector('.update-post').addEventListener('submit', updatePostFormHandler)