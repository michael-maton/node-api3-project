const express = require('express');

const router = express.Router();

const { logger, validateUserId, validateUser, validatePostId, validatePost } = require("../middleware/middleware");

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify post id
});

router.delete('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify post id
});

router.put('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify post id
});

// do not forget to export the router

module.exports = router