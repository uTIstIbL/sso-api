const jwt = require('jsonwebtoken');

module.exports = {
  friendlyName: 'Verifyjwt',
  description: '',

  inputs: {
    token: {
      type: "string", required: true
    }, // 預設產生一組 uuid/v4 作為 token
  },

  exits: {
    success: {
      description: 'All done.',
    },
  },

  fn: async function (inputs,exits) {
    try {
      let decoded = await jwt.verify(inputs.token, sails.config.custom.jwtSecret);
      return exits.success(decoded);
    } catch (err) {
      return exits.success(err);
    }
  }


};

