const express = require('express');
const router = express.Router();
const Users = require("./users-model");
const { logger, validateUserId, validateUser, validatePostId, validatePost } = require("../middleware/middleware");

router.post('/', logger, validateUser, (req, res) => {
  // do your magic!
  // this needs a middleware to check that the request body is valid
  // validateUser
  Users.insert(req.body)
    .then((newUser) => {
      res.status(201).json(newUser)
    })
    .catch(error => {
      res.status(500).json({ error: "Error creating user"} )
    })
});

router.get('/', logger, (req, res) => {
  // do your magic!
  Users.get()
    .then(user => {
      res.status(200).json(user)
    })
    .catch(error => {
      res.status(500).json({ error: "Error retrieving user"} )
    })
});

router.get('/:id', logger, validateUserId, (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  res.status(200).json(req.user);
});

router.delete('/:id', logger, validateUserId, (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  Users.remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: `User with id ${req.params.id} has been deleted`})
    })
    .catch(error => {
      res.status(500).json({ error: "There was an error deleting the user"} )
    })

});

router.put('/:id', logger, validateUserId, validateUser, (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  Users.update(req.params.id, req.body)
    .then(() => {
      res.status(201).json(req.body)
    })
    .catch(() => {
      res.status(500).json({ error: "Error creating user"} )
    })
});

router.post('/:id/posts', logger, (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.get('/:id/posts', logger, validateUserId, (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  Users.getUserPosts(req.params.id)
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(error => {
      res.status(500).json({ error: "There was an error deleting the user"} )
    })
});

// do not forget to export the router
module.exports = router