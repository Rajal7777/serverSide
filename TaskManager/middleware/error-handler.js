const { CustomError } = require("../errors/custom-error");

//instanceof checks if it is the property of the class, if it is then it will return true, otherwise false
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: `Something went wrong, try again later` });
};

module.exports = errorHandlerMiddleware;
