require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const logger = require('./lib/');
const router = require('./routers');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const {sequelize} = require('./models');
const cors = require('cors');
/* passport 설정  */
const passport = require("passport");
const passportConfig = require('./passport/');
const session = require('express-session');
const cookieParser = require('cookie-parser');

passportConfig();
app.use(cookieParser())
app.use(session({
    resave:false,
    saveUninitialized: false,
    secret:'process.env.COOKIE_SECRET',
    cookie:{
        httpOnly:true,
        secure:false,
    }
}));

/* session 과 passport 설정 */
app.use(passport.initialize()); // passport 구동
app.use(passport.session()); // 세션 연결

// Setting 
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false,}))
app.use(logger.prod);
app.use(cors());


app.set('view engine','html');
nunjucks.configure('views',{
    express:app,
})

//DB Connection Check
sequelize.sync({ force:false, })
.then(()=>{
    console.log('DataBase Connection Success !')
})
.catch(err=>{
    console.log(err)
})

app.use(bodyParser.json());

// Router
app.use('/',router);
app.use((req,res) => {
    res.status(404).send('Not found!');
})

app.listen(PORT,()=>{
    console.log(`start server port number : ${PORT}`);
});