function logger(req, res, next) {
  console.log("Method: ", `"${Object.keys(req.route.methods)}"`)
  console.log("Path: ", `"${req.route.path}"`)
  var timestamp = Number(new Date())
  var date = new Date(timestamp).toDateString();
  console.log("Timestamp: ", date)
  next()
}

function validateUserId(req, res, next) {
  next()
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