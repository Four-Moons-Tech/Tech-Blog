const signupFormHandler = async (event) => {
    event.preventDefault();
  
  
    
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (first_name && last_name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
  
        headers: { 'Content-Type': 'application/json' },
      });
  
      
  
      if (response.ok) {
        document.location.replace('/dashboard');
        console.log('success!')
      } else {
        console.log('error');
        alert(response.statusText);
      }
    }
  };

  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);