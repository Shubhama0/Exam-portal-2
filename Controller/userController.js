import userModel from "../Models/userModels.js";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
//create user register user
export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //validation
    if (!name || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please Fill all fields",
      });
    }
    //exisiting user
    const exisitingUser = await userModel.findOne({ email });
    if (exisitingUser) {
      return res.status(401).send({
        success: false,
        message: "user already exisits",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    //save new user
    const user = new userModel({ name, email, password: hashedPassword });
    await user.save();
    return res.status(201).send({
      success: true,
      message: "New User Created",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error In Register callback",
      success: false,
      error,
    });
  }
};

// get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(200).send({
      userCount: users.length,
      success: true,
      message: "all users data",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Get ALl Users",
      error,
    });
  }
};

//login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(401).send({
        success: false,
        message: "Please provide email or password",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "email is not registerd",
      });
    }
    //password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invlid name or password",
      });
    }

    //jwt
    const token = await JWT.sign({ _id: user._id }, "Shubham74", {
      expiresIn: "7d",
    });

    return res.status(200).send({
      success: true,
      messgae: "login successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Login Callcback",
      error,
    });
  }
};

//update

export const updateController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //const user = await userModel.findById(req.user._id);
    const user = await userModel.findOne({ email });
    const hsdpas = await bcrypt.hash(password, 10);
    const hashedPassword = password ? hsdpas : undefined;
    const updatedUser = await userModel.findByIdAndUpdate(
      //req.user._id,   getting error
      user._id,

      {
        name: name || user.name,
        password: hashedPassword || user.password,
        email: email || user.email,
      },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Profile Updated SUccessfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error WHile Update profile",
      error,
    });
  }
};
