const mongoose = require("mongoose");

const userdetails = new mongoose.Schema({

    type: String,
    name:String,
    email:String,
    password:String,
},
{
    collection: 'usersinfo',


    // name: {
    //     type: String,
    //     required: true
    // },

    // email: {
    //     type: String,
    //     required: true
    // },

    // password: {
    //     type: String,
    //     required: true
    // },

    // confirmPassword: {
    //     type: String,
    //     required: true
    // }

//   matchid: {
//     type: Number,
//     required: true,
//   },

//   tourid: {
//     type: Number,
//     required: true,
//   },

//   gametype: {
//     type: String,
//     required: true,
//   },

//   contestselection: {
//     type: String,
//     required: true,
//   },

//   EntrySP: {
//     type: Number,
//     required: true,
//   },

//   EntryEP: {
//     type: Number,
//     required: true,
//   },

//   Team: {
//     type: String,
//     required: true,
//   },

//   Amount: {
//     type: Number,
//     rewuired: true,
//   },

//   Slot: {
//     type: Number,
//     required: true,
//   },

//   noofcontest: {
//     type: Number,
//     required: true,
//   },

//   Refresh: {
//     type: Number,
//     required: true,
//   },
});

// const studentdetails = new mongoose.Schema({
//     type: String,
//     name:String,
//     fname:String,
//     roll: String,
//     phnum: String,
//     classs: String,
//     addresss: String,
// },
// {
//     collection: 'studentinfo',
// }
// )

// const teacherdetails = new mongoose.Schema({
//     type: String,
//     name:String,
//     subject: String,
//     classs: String,
//     ph: String,
//     addresss: String,
// },
// {
//     collection: 'teacherinfo',
// }
// )


mongoose.model('usersinfo', userdetails);
// mongoose.model("usersinfo", userdetails);
// mongoose.model('studentinfo', studentdetails);
// mongoose.model('teacherinfo', teacherdetails);
// module.exports = users;