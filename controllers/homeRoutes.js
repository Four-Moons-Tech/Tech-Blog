const router = require('express').Router();
const { response } = require('express');
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('sequelize')

router.get('/', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password'] },
        order: [['last_name', 'ASC']],
      });
  
      const users = userData.map((user) => user.get({ plain: true }));
  
      res.render('homepage', {
        users,
   
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.get('/login', (req, res) => {

    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;