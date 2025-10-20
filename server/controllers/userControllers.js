import userModel from "../models/UserModel";

// API FOR REGISTER USER
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    res.send({ name, email, password });

  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
}

export { registerUser };