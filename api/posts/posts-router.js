const express = require('express');
const router = express.Router();
const Posts = require("./posts-model");

const { logger, validateUserId, validateUser, validatePostId, validatePost } = require("../middleware/middleware");

router.get('/', logger, (req, res) => {
  // do your magic!
  Posts.get()
    .then(post => {
      res.status(200).json(post)
    })
    .catch(error => {
      res.status(500).json({ error: "Error retrieving posts"} )
    })
});

router.get('/:id', logger, validatePostId, (req, res) => {
  // do your magic!
  // this needs a middleware to verify post id
  res.status(200).json(req.post)
});

router.delete('/:id', logger, validatePostId, (req, res) => {
  // do your magic!
  // this needs a middleware to verify post id
  Posts.remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: `Post with id ${req.params.id} has been deleted`})
    })
    .catch(error => {
      res.status(500).json({ error: "There was an error deleting the post"} )
    })
});

router.put('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify post id
});

// do not forget to export the router

module.exports = router