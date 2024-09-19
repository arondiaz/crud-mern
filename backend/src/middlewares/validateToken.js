import jwt from "jsonwebtoken";
import { TOKEN_JWT } from "../config.js";

const authRequired = (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(401).json({ message: "No token authorization" });

  jwt.verify(token, TOKEN_JWT, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });

    req.decoded = decoded;

    next();
  });
};

export default authRequired;
