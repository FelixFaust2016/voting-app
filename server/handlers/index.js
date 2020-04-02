module.exports = {
  ...require("./auth"),
  ...require("./poll")
};

module.exports.notFound = (req, res, next) => {
  const err = new Error("not found");
  err.status = 404;
  next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
  res.status(err.status || 400).json({
    message: err.message || "Something went wrong"
  });
};
