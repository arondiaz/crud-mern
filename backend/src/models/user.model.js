import moongose from "mongoose";

const userSchema = new moongose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //to save the created at and updated at on db
  }
);

export default moongose.model("User", userSchema);
