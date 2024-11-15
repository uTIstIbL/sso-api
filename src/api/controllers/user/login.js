module.exports = {
  friendlyName: 'Login',
  description: 'Login user.',

  inputs: {
    username: {type: "string", required: true, unique: true}, // 帳號
    password: {type: "string", required: true, encrypt: true}, // 密碼
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
    // 取得帳號並驗證帳號是否存在
    const _findUser = await User.findOne({
      where:{ username: inputs.username }
    }).decrypt()

    if (!_findUser) {
      return exits.err(101);
    }

    // 比對密碼
    if(!(inputs.password === _findUser.password)){
      return exits.err(102);
    }

    // 驗證成功，簽發 JWT Token
    let jwtToken = await sails.helpers.issuejwt(inputs.mail);

    // 回傳
    return exits.success({
      token: jwtToken,
    });

  }
};