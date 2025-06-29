import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  console.log("Cookies on verifyToken:", req.cookies); // powinno być obiekt, nie undefined
  if (!req.cookies) {
    return res.status(400).json({ message: "Brak ciasteczek!" });
  }
  
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Not authenticated!" });

  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(403).json({ message: "Token is invalid!" });
    }

    req.userId = payload.userId;
    next();
  });
};
