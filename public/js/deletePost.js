const delButtonHandler = async (event) => {
    console.log('delete button')
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    }
  };

  document.querySelectorAll('.delete-post').forEach((btn)=>{
    btn.addEventListener('click', delButtonHandler)
  })