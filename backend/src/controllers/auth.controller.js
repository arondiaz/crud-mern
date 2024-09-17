import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

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
    //response to show when fetch from frontend
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = (req, res) => {
  res.send("iniciando sesion :)");
};
