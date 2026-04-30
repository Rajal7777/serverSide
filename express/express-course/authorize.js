const authorize = (req, res, next) => {
  //req.query contains data sent in the URL after a ?.
  // http://localhost:5000/?user=jhon
  const { user } = req.query;

  //check query sting is 'jhon'
  if (user === "jhon") {
    req.user = { name: "jhon", id: 3 };
    console.log("authorized");
    next();
  } else {
    res.status(401).send("unauthorize");
  }
};

module.exports = authorize;
