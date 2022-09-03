import express, { Express } from 'express';
import { UserController } from '../controllers/userController';

const router = express.Router();

router.get("/users/:id", new UserController().getUser)
router.post("/users", new UserController().createUser)
router.put("/users", new UserController().updateUser)
router.delete("/users/:id", new UserController().DeleteUser)

export = router