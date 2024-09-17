import User from "../models/user.model.js";

//Fetch functions
export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const newUser = new User({
      username,
      email,
      password,
    });

    //created variable userSaved for save all data included the created at and updated at, this information are without the schema model. (timestamps)
    const userSaved = await newUser.save();
    res.json(userSaved);
  } catch (error) {
    console.log(error);
  }
};

export const login = (req, res) => {
  res.send("iniciando sesion :)");
};
