const express = require('express');
const router = express.Router();
const User = require("./users-model");
const { logger, validateUserId, validateUser, validatePostId, validatePost } = require("../middleware/middleware");

router.post('/', (req, res) => {
  // do your magic!
  // this needs a middleware to check that the request body is valid
});

router.get('/', logger, (req, res) => {
  // do your magic!
  User.get()
    .then(user => {
      res.status(200).json(user)
    })
    .catch(error => {
      res.status(500).json({ error: "Error retrieving user"} )
    })
});

router.get('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
});

router.delete('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
});

router.put('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
});

// do not forget to export the router
module.exports = router