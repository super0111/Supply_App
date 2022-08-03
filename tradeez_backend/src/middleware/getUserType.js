const jwt = require("jsonwebtoken");
const config = process.env;

const getUserType = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, config.TOKEN_SECRET);
  }
};
export default getUserType;
