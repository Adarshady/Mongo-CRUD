const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: 'string',
      required: true,
    },
    last_name: {
      type: 'string',
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    mobile: {
      type: 'number',
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model('Users', userSchema);

const validation = (Users) => {
  const schema = Joi.object()
    .keys({
      first_name: Joi.string()
        .regex(/^[aA-zZ\s]+$/)
        .required(),
      last_name: Joi.string().required(),
      email: Joi.string().email().required(),
      mobile: Joi.number().min(10**9).required(),
    })
    .unknown();
    
  // .unknown()

  return schema.validate(Users, { abortEarly: false });
};

//creating a mongoose object with model information

// const Student = mongoose.model('Student',{
//   stdid: {
//         type: 'string',
//         // required: true,
//       },
//       stdname: {
//         type: 'string',
//         required: 'Student name is required',
//       },
//       stdemail: {
//         type: 'string',
//         required: true,
//       }

// })

// mongoose.model('Users', userSchema)
module.exports = userModel;
module.exports.validation = validation;
