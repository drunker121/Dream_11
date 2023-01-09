require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5000;
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const RefreshModel = require("./models/refreshToken");

const JWT_ACCESS_TOKEN = process.env.JWT_ACCESS_TOKEN;
const JWT_REFRESH_TOKEN = process.env.JWT_REFRESH_TOKEN;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    withCredentials: true,
  })
);

const mongodb = require("./mongodb");
// const refreshToken = require('./models/refreshToken');
mongodb();

app.listen(PORT, () => {
  console.log(`hello from port ${PORT}`);
});

require("./models/userDetails");

const User = mongoose.model("usersinfo");
const Match = mongoose.model("matchinfo");

app.get("/", (req, res) => {
  res.json({ message: `successfully running on port  ${PORT}` });
});

app.post("/register", (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  User.findOne({ email: email }, async (error, user) => {
    if (user) {
      res.send({ status: "user already exist" });
    } else {
      try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const hashedcPassword = await bcrypt.hash(req.body.confirmPassword, 10);
        await User.create({
          type: "user",
          name,
          email,
          password: hashedPassword,
          confirmPassword: hashedcPassword,
        });
        res.send({ status: "registered successfully" });
      } catch (error) {
        res.send({ status: "something wrong occured" });
      }
    }
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      // let token;
      const isMatch = bcrypt.compare(password, user.password);

      if (isMatch) {
        const accessToken = jwt.sign(
          { name: user.name, email: user.email, _id: user._id },
          JWT_ACCESS_TOKEN,
          { expiresIn: 30000 }
        );
        const refreshToken = jwt.sign(
          { name: user.name, email: user.email, _id: user._id },
          JWT_REFRESH_TOKEN,
          { expiresIn: 30000 }
        );
        RefreshModel.create({ token: refreshToken }).then((result, error) => {
          if (error) return res.send({ status: "incorrect password" });
        });
        // res.cookie("jwtoken" , token , {
        //     expires: new Date(Date.now() + 25892000000),
        //     httpOnly: true
        // });

        res
          .status(202)
          .cookie("accessToken", accessToken, {
            expiresIn: new Date(new Date().getTime() + 30000),
            sameSite: "strict",
            httpOnly: true,
          })
          .cookie("refreshToken", accessToken, {
            expiresIn: new Date(new Date().getTime() + 30000),
            sameSite: "strict",
            httpOnly: true,
          })
          .send({ status: "login successful", user: user });
      } else {
        res.send({ status: "incorrect password" });
      }
    } else {
      res.send({ status: "user not found" });
    }
  });
});

app.post("/home", async (req, res) => {
  const {
    matchid,
    tourid,
    gametype,
    contestselection,
    EntrySP,
    EntryEP,
    team,
    amount,
    slot,
    noofcontest,
    refresh,
  } = req.body;
  try {
    await Match.create({
      type: "contest",
      matchid,
      tourid,
      gametype,
      contestselection,
      EntrySP,
      EntryEP,
      team,
      amount,
      slot,
      noofcontest,
      refresh,
    });
    res.send({ status: "contest added" });
  } catch (error) {
    res.send({ status: "something went wrong" });
  }
});

// app.post('/add_teacher', async (req, res) => {
//     const {name, subject, classs, ph, addresss} = req.body;
//     try {
//         await Teacher.create({

//             type: "teacher",
//             name,
//             subject,
//             classs,
//             ph,
//             addresss,
//         });
//         res.send({status: 'teacher added'});
//     } catch (error) {
//         res.send({status: 'something wrong occured'});
//     }
// })

// app.get('/student/edit/:id', async (req, res) => {
//     const {id} = req.params;
//     try {
//         const dt = await Student.findOne({_id: id});
//         res.status(200).json(dt);
//     } catch (error) {
//         res.status(404).json({message: 'student not found'});
//     }
// })

// app.put('/student/edit/:id', async (req, res) => {
//     const {id} = req.params;
//     try {
//         await Student.updateOne({_id: id}, req.body);
//         res.send({status: 'Student updated'});
//     } catch (error) {
//         console.log('Error while changing student', error);
//     }
// })

// app.delete('/student/:id', async (req, res) => {
//     try {
//         await Student.deleteOne({_id: req.params.id});
//         res.send({status: 'student deleted'});
//     } catch (error) {
//         console.log('error while deleting student', error);
//     }
// })

// app.get('/students', async (req, res) => {
//     try {
//         const dt = await Student.find({});
//         res.status(200).json(dt);
//         console.log(dt);
//     } catch (error) {
//         console.log('error');
//         res.status(404).json({message: 'student not found'});
//     }
// })
