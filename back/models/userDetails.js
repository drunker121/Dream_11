const mongoose = require("mongoose");

const userdetails = new mongoose.Schema({

    type: String,
    name:String,
    email:String,
    password:String,
    confirmPassword: String,
},
{
    collection: 'usersinfo',
});

const condetails = new mongoose.Schema({
    type: String,
    matchid: String,
    tourid: String,
    gametype: String,
    contestselection: String,
    EntrySP: String,
    EntryEP: String,
    team: String,
    amount: String,
    slot: String,
    noofcontest: String,
    refresh: String,
},
{
   collection: 'matchinfo',
});


 // hashing the password

// userdetails.pre('create' , async function (next) {
//     console.log("hi from bcrypt");
//     if (this.isModified('password')){
//         this.password = await bcrypt.hash(this.password , 12);
//         this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
//     }
//     next();
// });

mongoose.model('usersinfo', userdetails);
mongoose.model('matchinfo', condetails);
// module.exports = users;























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