import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

//Fetch functions
export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 8);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    //created variable userSaved for save all data included the created at and updated at, this information are without the schema model. (timestamps)
    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });

    res.cookie("token", token);

    //response to show when fetch from frontend
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });

    if (!userFound) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credencials" });
    }

    const token = await createAccessToken({ id: userFound._id });

    res.cookie("token", token);

    //response to show when fetch from frontend
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    console.log(error);
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.status(200).send();
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.decoded.id);
  if (!userFound) res.status(404).json({ message: "User not found" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};
