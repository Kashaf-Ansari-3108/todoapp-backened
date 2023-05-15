const express = require('express');
const router = express.Router();
const {post,get,deleteOne,update,deleteAll} = require('../controllers/todoControllers');

router.get("/sample", (req, res) => {
    res.send("API HITT....!");
});

router.post("/post",post);
router.get("/get",get);
router.delete("/delete/:id",deleteOne);
router.put("/update",update);
router.delete("/deleteAll",deleteAll);


module.exports = router;