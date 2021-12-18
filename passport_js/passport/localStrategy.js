const LocalStrategy = require('passport-local').Strategy;
const passport = require("passport");
const bcrypt = require('bcrypt');

const {User} = require('../models');
module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField:'userId', //html name 속성값
        passwordField:'userPw',
    },async (userId,userPw,done)=>{
        try{
            const exUser = await User.findOne({ where:{userId}});
            const user = {
                userId:exUser.dataValues.userId,
                userLevel:exUser.dataValues.userLevel,
            }
            if (exUser) {
                const result = await bcrypt.compare(userPw,exUser.dataValues.userPw);
                if (result) {
                    done(null,user);
                } else {
                    done(null,false, {message:'비밀번호가 일치하지않습니다.'});
                }
            } else {
                done(null,false, {message:'가입되지 않는 아이디입니다.'})
            }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }));
};
