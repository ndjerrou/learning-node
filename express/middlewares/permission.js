module.exports = (req, res, next) => {
  if (req.method === "GET") return next();
  res.send("Fordbidden access");
};
