const joi = require("joi");

const loginValidation = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});
const registerValidation = joi.object({
  firstname: joi.string().required(),
  lastname: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
});

const getMonitorByIdValidation = joi.object({
  monitorId: joi.string().required(),
});

const getMonitorsByUserIdValidation = joi.object({
  userId: joi.string().required(),
});

const monitorValidation = joi.object({
  _id: joi.string(),
  userId: joi.string().required(),
  name: joi.string().required(),
  description: joi.string().required(),
  url: joi.string().uri().required(),
  isActive: joi.boolean(),
  interval: joi.number(),
});

const editUserParamValidation = joi.object({
  userId: joi.string().required(),
});

const editUserBodyValidation = joi.object({
  firstname: joi.string(),
  lastname: joi.string(),
  profilePicUrl: joi.string(),
});

const createAlertParamValidation = joi.object({
  monitorId: joi.string().required(),
});

module.exports = {
  loginValidation,
  registerValidation,
  getMonitorByIdValidation,
  getMonitorsByUserIdValidation,
  monitorValidation,
  editUserParamValidation,
  editUserBodyValidation,
  createAlertParamValidation,
};
