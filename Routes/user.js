import express from 'express';
import { login, profile, register, users, updateUser, deleteUser } from '../Controllers/user.js';
import { Authenticated } from "../Middlewares/auth.js";

const router = express.Router();

// Register user
router.post('/register', register); // => /api/user/register

// Login user
router.post('/login', login);

// Get all users
router.get('/all', users);

// Get user profile
router.get("/profile", Authenticated, profile);

// Update user by ID
router.put("/update/:id", updateUser); // => /api/user/update/:id

// Delete user by ID
router.delete("/delete/:id", deleteUser); // => /api/user/delete/:id

export default router;