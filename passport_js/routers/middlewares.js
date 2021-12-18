module.exports.isLoggedIn = (req,res,next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(403).send('로그인 필요');
    }
};

module.exports.isNotLoggedIn = (req,res,next) =>{
    if(!req.isAuthenticated()) {
        next();
    } else {
        const message = encodeURIComponent('로그인이 필요한 상태입니다.');
        res.redirect(`/?error=${message}`);
    }
}

module.exports.isAdminIn = (req,res,next) =>{
    if(req.user.dataValues.userLevel === 1){
        next();
    } else {
        const message = encodeURIComponent('관리자등급 이상만 접근 가능합니다.');
        res.redirect(`/?error=${message}`);
    }
}