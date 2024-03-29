const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/', (req, res) => {
  // find all posts
  Post.findAll({
    include: {
      model: User,
      attributes: 'username'
    }
  })
    .then((postData) => {

      res.json(postData)

    }).catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
});

router.get('/:id', (req, res) => {
  // find one post by its `id` value

  Post.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: User,
      attributes: 'username'
    }

  }).then((postByID) => {

    res.json(postByID)

  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  });

});

router.post('/', (req, res) => {
  Post.create({
    title: req.body.title,
    text: req.body.text,
    user_id: req.session.user_id,
    

  })
    .then((newPost) => {
      res.json(newPost);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err)
    });


});



router.put('/:id', (req, res) => {
  Post.update({
    title: req.body.title,
    text: req.body.text,
  }, 
  {
    where: {
      id: req.params.id
    }
  }).then((updatedPost) => {
    res.json(updatedPost)
  }).catch((err) => {
    console.log(err);
    res.status(500).json(err)
  })
})

router.delete('/:id', (req, res) => {
  console.log('deleting post')
  // delete a post by its `id` value
  Post.destroy({
    where: {
      id: req.params.id,
    },
  }).then((deletedPost) => {
    res.json(deletedPost)
  }).catch((err) => {
    console.log(err)
  })

});

module.exports = router;







