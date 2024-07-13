const mysql= require("mysql");
// Load .env file 
require("dotenv").config(); 

const app=express();
// enable json parsing
app.use(express.json());
// enable parsing of  form urlencoded data.
app.use(express.urlencoded({extended:true}));
// mySql connection setting
    const db =mysql.createConnection({
        host:process.env.HOST,
        user: process.env.USER,
        password:process.env.PASSWORD,
        database:process.env.DATABASE
    });
    db.connect((err)=>{
    if(err) throw(err);
        console.log("Database connected");
    });
    // fetch user
    app.get("/getuser", async function(req,res){
        let query="select * from user";
        db.query(query,(err,result)=>{
            if(err)
            {res.json({msg:err});}
            else
            { res.json({msg:result});}
        })
    });
    // Save user data
    app.post("/saveuser", async function(req,res){
        let query="insert into user set ?";
        console.log(req.body);
        let postData={
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        };
     db.query(query,postData,(err,result)=>{
            if(err)
            {res.json({msg:err});}
            else
            { res.json({msg:"Inserted successfully",Data:result});}
        })
    });

    // update user
    app.post("/updateuser/:id", async function(req,res){
        let query=`update user SET name='${req.body.name}',email='${req.body.email}' where id=${req.params.id}`;
        db.query(query,(err,result)=>{
            if(err)
            {res.json({msg:err});}
            else
            { res.json({msg:"Update successfully",Data:result});}
        })
    });

    // Delete user
    app.post("/deleteuser/:id", async function(req,res){
        let query=`delete from user where id=${req.params.id}`;
        db.query(query,(err,result)=>{
            if(err)
            {res.json({msg:err});}
            else
            { res.json({msg:"Update successfully",Data:result});}
        })
    });

    app.listen(process.env.port, () => {
        console.log(`Node backend listening at http://localhost:${process.env.port}`)
    })