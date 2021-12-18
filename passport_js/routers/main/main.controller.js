let main = (req,res,next) => {
    let userid = req.session.passport;
    res.render('index.html',{
        userid,
    })
}

module.exports.main = main;