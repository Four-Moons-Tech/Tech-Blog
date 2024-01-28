const router = require('express').Router();
const { response } = require('express');
const { User, Post, Comment } = require('../models');
// const withAuth = require('../utils/auth');
const sequelize = require('sequelize')

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }],
      // order: [['created_on', 'DESC']]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,

      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/dashboard', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [{ model: Post }],
      // order: [['created_on', 'DESC']]
      
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      user,

      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/addpost', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }],
      // order: [['created_on', 'DESC']]
      include: [{ model: Comment }]
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('addpost', {
      posts,

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

router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: [{model:User, 
          attributes: ['username']}]
        },
        {
          model: User,
          attributes: [
            'username'
          ]
        },


      ]
    })
    const post = postData.get({ plain: true });
    console.log(post)
    res.render('post',
      {
        post,
        logged_in: req.session.logged_in,
      });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;