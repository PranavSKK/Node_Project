const User = require("../models/user");

async function handleAllUsers(req,res){
    const allDbUsers = await User.find({})
    console.log(req.headers);
    res.setHeader("X-myname", "pk");
    return res.json(allDbUsers);
};

async function handleGetUserById(req,res){
    const user = await User.findById(req.params.user_id);
    // const id = req.params.user_id;
    // const user = users.find((user) => user.id == id);
    if(!user){
        return res.status(404).json({"error": "User not found"});
    }
    return res.json(user);
};

async function handleUpdateUserById(req,res){
     // const body = req.body;
    // const id = req.params.user_id;
    // const user = users.find((user) => user.id == id);
    // user.firstName = body.firstName;
    await User.findByIdAndUpdate(req.params.user_id, {lastName:"Changed"});
    return res.json({"status": "Updated Successfully"});
};

async function handleDeleteUserById(req,res){
    // const id = req.params.user_id;
    // userIndex = users.findIndex((user) => user.id == id);
    // if(users.splice(userIndex, 1)) {
    //     return res.json({"status": "User Deleted"});
    // }else{
    //     return res.json({"status": "User Not Deleted"});
    // }
    await User.findByIdAndDelete(req.params.user_id);
    return res.json({"status": "deleted Successfully"})
};

async function handleCreateNewUser(req,res){
    const body = req.body;

    if(!body || !body.firstName || !body.email || !body.lastName){
        return res.status(400).json({"msg": "all fields required"});
    }
    // users.push({...body, id: users.length + 1});
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    //     return res.status(201).json({'status': "Success", "id":users.length });
    // });
    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        jobTitle: body.jobTitle,
        gender: body.gender
    });

    console.log(result)
    return res.status(201).json({'msg':"successfully created user"});
};

module.exports = {
    handleAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
}