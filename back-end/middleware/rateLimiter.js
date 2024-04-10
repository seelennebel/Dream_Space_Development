const setRateLimit = require("express-rate-limit");


const rateLimitMiddleware = setRateLimit({
  windowMs: 1000,
  max: 50,
  message: "LIMIT EXCEEDED",
  headers: true,
});

module.exports = rateLimitMiddleware;





