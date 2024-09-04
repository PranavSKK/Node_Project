const express = require('express');
const router = express.Router()

const { handleAllUsers, 
        handleGetUserById, 
        handleUpdateUserById, 
        handleDeleteUserById, 
        handleCreateNewUser} = require('../controllers/user');


router.route("/")
.get(handleAllUsers)
.post(handleCreateNewUser)

router.route("/:user_id")
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);


module.exports = router;