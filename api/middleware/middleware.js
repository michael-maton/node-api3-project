
const Users = require("../users/users-model");
const Posts = require("../posts/posts-model");

function logger(req, res, next) {
  console.log("Method: ", `"${Object.keys(req.route.methods)}"`)
  console.log("Path: ", `"/${req.params.id}"`)
  var timestamp = Number(new Date())
  var date = new Date(timestamp).toDateString();
  console.log("Timestamp: ", date)
  next()
}

async function validateUserId(req, res, next) {
  console.log('checking user id')
  try {
    const user = await Users.getById(req.params.id)
    if (user) {
      req.user = user
      next()
    } else {
      res.status(404).json(`User with id ${req.params.id} not found`)
    }
  } catch (error) {
    res.status(500).json('ouch')
  }
}

function validateUser(req, res, next) {
  next()
}

function validatePostId(req, res, next) {
  next()
}

function validatePost(req, res, next) {
  next()
}

// do not forget to expose these functions to other modules
module.exports = { logger, validateUserId, validateUser, validatePostId, validatePost }