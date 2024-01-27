import express from "express";

import {
  getAllUsers,
  registerController,
  loginController,
  updateController,
} from "../Controller/userController.js";

//router object
const router = express.Router();

// GET ALL USERS || GET
router.get("/all-users", getAllUsers);

// CREATE USER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Update protected
//router.put("/update", requireSignIn, updateController);
router.put("/update", updateController);

export default router;
