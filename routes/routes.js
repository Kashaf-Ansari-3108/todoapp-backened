import express from 'express';
const router = express.Router();
import {
  post,
  get,
  deleteOne,
  update,
  deleteAll
} from '../controllers/todoControllers.js';
import {
  createUser, login
} from '../controllers/userControllers.js';

router.get("/sample", (req, res) => {
  res.send("API HITT....!");
});

// Todo Routes
router.post("/post", post);
router.get("/get", get);
router.delete("/delete/:id", deleteOne);
router.put("/update", update);
router.delete("/deleteAll", deleteAll);

// User Routes
router.post("/createUser", createUser);
router.post("/login", login);

export default router;
