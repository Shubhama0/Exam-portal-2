import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "username is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    // blogs: [
    //   {
    //     type: mongoose.Types.ObjectId,
    //     ref: "Blog",
    //   },
    // ],
  },
  { timestamps: true }
);

const userModel = mongoose.model("testuser", userSchema);

export default userModel;
