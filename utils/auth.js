const withAuth = (req, res, next) => {
    
    // if the user is not logged in 
    if (!req.session.logged_in) {
      res.redirect('/login');//redirects to login
    } else {
      next();
    }
  };
  
  module.exports = withAuth;