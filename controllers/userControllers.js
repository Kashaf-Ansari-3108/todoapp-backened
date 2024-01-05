import userModel from '../Models/userSchema.js';
import bcrypt from 'bcryptjs';
import jwt from '../middlewares/jwtMiddleware.js';

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // if user already exist
    const existing = await userModel.findOne({ email });
    if (existing) {
      res.status(400).json({
        message: "User already exist !!..",
      });
      return;
    }
    // If fields are missing
    if (!name || !email || !password) {
      res.status(400).json({ message: "Required fields are missing" });
      return;
    }
    // hash password
    const hashpwd = await bcrypt.hash(password, 10);
    // create user
    const user = new userModel({
      name,
      email,
      password: hashpwd,
    });
    await user.save();
    const token = await jwt.sign(req.body);
    res.status(200).json({
      message: "User created succesfully !!..",
      data: user,
      token,
      status: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong !!..",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // find user
    const user = await userModel.findOne({ email });
    // Verify Password
    const verifyHash = await bcrypt.compare(password, user.password);
    if (!verifyHash) {
      res.status(400).json({ message: "Crendentials error" });
      return;
    }
    if (verifyHash) {
      const tokenObj = {
        ...user,
      };
      const token = await jwt.sign(tokenObj);
      // User get
      res.status(200).json({
        message: "User login succesfully !!..",
        data: user,
        token,
        status: true,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong !!..",
    });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const user = await userModel.find();
    res.status(200).json({
      message: "Users retrieved succesfully !!..",
      data: user,
      status: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong !!..",
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await userModel.find({_id:id});
    res.status(200).json({
      message: "User retrieved succesfully !!..",
      data: user,
      status: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong !!..",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const {id} = req.params;
    const {name,password} = req.body;
    // If fields are missing
    if (!name || !password) {
      res.status(400).json({ message: "Required fields are missing" });
      return;
    }
    // hash password
    const hashpwd = await bcrypt.stringToHash(password, 10);
    //update User
    const user = await userModel.findByIdAndUpdate(id,{name,password:hashpwd},{new:true});
    res.status(200).json({
      message: "User updated succesfully !!..",
      data: user,
      status: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong !!..",
    });
  }
};