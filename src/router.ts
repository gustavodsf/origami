import { Router } from "express";

import { UserController } from "./controller/UserController";

const userController = new UserController();
const router = Router();

// ----------------------------------------------------------------
// USER
// ----------------------------------------------------------------
router.get('/user', userController.getUserListGet);
router.post('/user', userController.getUserListPost);

export { router };