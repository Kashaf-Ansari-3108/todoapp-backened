const express = require('express');
const router = express.Router();
const todoModel = require('../Models/todoSchema');
const todoControllers = require('../controllers/todoControllers');

router.get("/sample", (req, res) => {
    res.send("API HITT....!");
});

router.post("/post",todoControllers.post);
router.get("/get",todoControllers.get);
router.delete("/delete/:id",todoControllers.delete);
router.put("/update",todoControllers.update);
router.delete("/deleteAll",todoControllers.deleteAll);




module.exports = router;