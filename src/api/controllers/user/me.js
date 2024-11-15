module.exports = {
  friendlyName: 'Me',
  description: 'Me user.',

  inputs: { 
    id: { type: 'number', autoIncrement: true, }, 
  },

  exits: {
    success: {
      responseType: 'ok'
    },  
    err: {
      responseType: 'err'
    }
  },


  fn: async function (inputs,exits) {
   const Yourinfo = await User.findOne({
     username: exits.username,
     nickname: exits.nickname,
     gender: exits.gender,
     mail: exits.mail,
     phone: exits.phone
   })

    // All done.
    return exits.success({
       Yourinfo
    });

  }
};