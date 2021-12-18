const passport = require("passport");
const bcrypt = require('bcrypt');
const { User } = require("../../models");
let login = (req,res) =>{
    res.render('./user/login.html');
}

let loginPost = (req,res,next) => {
    passport.authenticate('local',(authError,user,info)=>{
        if(authError){
            console.error(authError);
            return next(authError);
        }

        if(!user){
            return res.redirect(`/?loginError=${info.message}`);
        }

        return req.login(user, (loginError)=>{
            if (loginError){
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        })
    })(req,res,next)
}

let join = (req,res) => {
    res.render('./user/join.html');
}

let logout = (req,res) => {
    req.logout();
    req.session.destroy();
    res.redirect('/')
}

let joinPost = async (req,res,next) =>{
    const { userId,userPw,userName,userAge,userGender,userAddress,userTel,userPhone,userEmail} = req.body;
    try{
        const hash = await bcrypt.hash(userPw,12);
        const insert = await User.create({
            userId,
            userPw:hash,
            userName,
            userAge,
            userGender,
            userAddress,
            userTel,
            userPhone,
            userEmail,
        })

        return res.redirect('/');
    } catch(error) {
        console.error(error);
        return next(error);
    }
}


module.exports = {
    login,
    join,
    loginPost,
    joinPost,
    logout,
}