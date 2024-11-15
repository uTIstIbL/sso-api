module.exports = {
  friendlyName: 'Auth',
  description: 'Auth app.',

  inputs: {
    token: {
      type: 'string',
      required: true
    },
    jwtSecret: {
      type: 'string',
      required: true
    },
  },

  exits: {
    success: {
      responseType: 'ok'
    },
    err: {
      responseType: 'err'
    }
  },

  fn: async function (inputs, exits) {
    // 驗證 app 是否有效
    const _getApp = await App.findOne({
      and: [{
        token: inputs.token
      },
      {
        jwtSecret: inputs.jwtSecret
      }
      ]});

    if (!_getApp) {
      return exits.err(901);
    }

    // app 有效，開始驗證 JWT
    const jwt = await sails.helpers.verifyjwt(inputs.token);

    if (jwt.hasOwnProperty('name') && jwt.name === 'JsonWebTokenError') {
      return exits.err(902);
    }

    // All done.
    return exits.success(jwt);

  }
};