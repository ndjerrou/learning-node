const Joi = require("joi");
module.exports = (req, res, next) => {
  // joi
  console.log("validatePayload middleware in action...");
  const schema = Joi.object({
    name: Joi.string().min(6).max(30).required(),
    price: Joi.number().required(),
    desc: Joi.string().min(10).max(255),
  });

  const { error } = schema.validate(req.body);
  if (error)
    return res
      .status(400)
      .send(`Invalid request : ${error.details[0].message}`);

  next();
};
