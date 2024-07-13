const dbConnection = require('../dbConnection');

const finduser = (userEmail) => {
    return new Promise((resolve, reject) => {
        const db = dbConnection();
        let query = `SELECT * FROM user WHERE email='${userEmail}'`;
        db.query(query, (err, result) => {
            if (err) {
                console.log({ msg: err });
                return reject(err);
            } else if (result.length === 0) {
                //return reject(new Error('User not found'));
                return resolve("NULL");
            } else {
                console.log(result[0].id);
                return resolve("FOUND");
            }
        });
    });
};

const saveuser=()=>{
    const db=dbConnection();
    let query="select * from user where id=2";
    db.query(query,(err,result)=>{
                if(err)
                {
                    console.log({msg:err});
                    return err;
                }
                else
                { 
                    console.log(result[0].id);
                }
            });
}

module.exports={finduser,saveuser};
   