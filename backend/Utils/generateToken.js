import jwt from "jsonwebtoken";

const generateToken = (user) => {
  const payload = {
    id: user.id,
    username: user.username,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d", // Token expires in 7 days
  });

  return token;
};

export default generateToken;
