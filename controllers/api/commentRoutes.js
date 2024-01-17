const router = require('express').Router();
const { Comment, Post, User } = require('../../models');

router.get('/', (req, res) => {
    // find all comments
    Comment.findAll({
      include: {
        model: User,
        attributes: 'username'
      },
      include: {
        model: Post,
        attributes: ['created_on','post_id', 'user_id', 'text'  ]
      }
    })
      .then((commentData) => {
  
        res.json(commentData)
  
      }).catch(err => {
        console.log(err);
        res.status(500).json(err)
      });
  });
  
  router.get('/:id', (req, res) => {
    // find one comment by its `id` value
  
    Comment.findOne({
      where: {
        id: req.params.id
      },
      include: {
        model: User,
        attributes: 'username'
      },
      include: {
        model: Post,
        attributes: ['created_on','post_id', 'user_id', 'text'  ]
      }
  
    }).then((commentByID) => {
  
      res.json(commentByID)
  
    }).catch(err => {
      console.log(err);
      res.status(500).json(err)
    });

  });
  
  router.post('/', (req, res) => {
    Comment.create({
        text: req.body.text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
    })
      .then((newComment) => {
        res.json(newComment);
      }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
      });
  
    // create a new comment
  });
  
  router.put('/:id', (req, res) => {
    Comment.update(req.body,{
      where: {
        id: req.params.id
      }
    }).then((updatedComment) => {
      res.json(updatedComment)
    }).catch(()=>{
      console.log(err);
    res.status(500).json(err)
    })
  })
  router.delete('/:id', (req, res) => {
    // delete a comment by its `id` value
    Comment.destroy({
      where: {
        id: req.params.id,
      },
    }).then((deletedComment) => {
      res.json(deletedComment)
    }).catch((err) => {
      console.log(err)
    })
  
  });

module.exports = router;