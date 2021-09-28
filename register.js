const express = require('express');
const User = require("./model/User");
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRound = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

router.post(
    "/",
    async(require, response) => {
        const { name, email, password } =require.body;

        try{
            // email을 비교하여 user가 이미 존재하는지 확인
            let user = await User.findOne({email});
            if (user){
                return response
                .status(400)
                .json({
                    errors: [{
                        msg: "User already exists"
                    }]
                });
            }
            user = new User({
                name,
                email,
                password,
            });
            /*// 암호화
            bcrypt.hash(myPlaintextPassword, saltRound, function(err, hash){
                // 해시를 Password DB에 저장
            });
            bcrypt.compare(myPlaintextPassword, hash, function(err, result){
                // result == true
            });
            bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result){
                // result == false
            });*/
        } catch(error){
            console.error(error.message);
            response.status(500).send("Server Error");
        }
    }
);

module.exports = router;