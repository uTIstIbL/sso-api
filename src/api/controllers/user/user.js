module.exports = {

  friendlyName: 'User',
  description: 'User user.',

  inputs: {},

  exits: {
    success: {
      responseType: 'ok'
    },
    err: {
      responseType: 'err'
    }

  },

  fn: async function (inputs,exits) {
    // 管理權限：尋找所有User
    const Userlist = await User.find({
      id: exits.id,
      username: exits.username,
      nickname: exits.nickname,
      gender: exits.gender,
      mail: exits.mail,
      phone: exits.phones
    }).decrypt()

    return exits.success({
      Userlist
    })
  }
};
