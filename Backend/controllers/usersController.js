const Users = require('../models/users');

exports.getUsers = async(req,res)=>{
    try{
        const result = await Users.find({});
        
        if(result){
            res.status(200).json({result});
        }else{
            res.status(400).json({msg:'Records not found!'});
        }
    }catch(e){
        
        res.status(500).json({msg:'Internal server error'});
    }
}

exports.postUsers = async (req, res) => {
    try {
        const user = new Users(req.body); // use req.body directly
        await user.save();

        console.log("✅ New user added:");
        

        res.status(201).json({ msg: "New User Registered Successfully!" });
    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

exports.updateUsers = async (req, res) => {
    try {
        const{id,firstName,lastName,email,Contact,gender,skill} = req.body;
        const user=await Users.findByIdAndUpdate({_id:id},{
            $set:{
             skill:skill 
            }
        },{new:true})

        res.status(200).json({ msg: "User Updated Successfully!",user });
    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const{id} = req.params;
        const result=await Users.findByIdAndDelete({_id:id})

        res.status(200).json({ msg: "User Deleted Successfully!",result });
    } catch (e) {
        console.error(e);
        res.status(500).json({ msg: 'Internal server error' });
    }
};

