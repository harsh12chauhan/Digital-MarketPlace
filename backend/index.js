const express = require('express');
const cors = require('cors');
const pool = require('./db');
const {body,validationResult} = require('express-validator')
const jwt = require('jsonwebtoken');

const port = 3000;
const app = express();
// const JWT_SECRET = process.env.REACT_APP_API_KEY;
const JWT_SECRET = "HARSHCHAUHAN";

app.use(cors());
app.use(express.json());

// ====================================== USER ROUTES ====================================================================================================


app.post('/register',
[
    body('username','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast 5 characters').isLength({ min: 5 })
],
async(req,res)=>{
    const err = validationResult(req);
    if(!err.isEmpty()){
        return res.status(400).json({ errors: "invalid enteries !!" });
    }
    try {
        const {username,email,password} = req.body;
        const emailExists = await pool.query("SELECT EXISTS (SELECT 1 FROM userdetails WHERE email = $1) AS email_exists",[email]);
        if(emailExists.rows[0].email_exists){
            return res.status(400).json({ errors: "email already exists" });
        }
        // const fetchUser = await pool.query("INSERT INTO userDetails (username,email,password,phone,address) VALUES ($1,$2,$3,$4,$5) RETURNING *",[username,email,password]);  
        // const user = fetchUser.rows[0];
        const data = {
            username:username,
            email:email,
            password:password
        };
        //jwt token 
        const token = jwt.sign(data,JWT_SECRET);
        // response
        res.cookie("token",token,{
            expires:new Date(Date.now() + 25892000000),
            httpOnly:true
            });
            res.send(data);
        } catch (err) {
            console.error(err.message);
        }
    });
    
    // LOGIN USER --------------------------------------------------------------------------------------------------------------------
    app.post('/login',
    [
        body('email', 'Enter a valid email').isEmail(),
        body('password', 'Password cannot be blank').exists(),
    ],
    async(req,res)=>{
        // console.log(req.headers.cookie);
        const{email,password} = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: "invalid enteries !!" });
        }
        try {
            const user = await pool.query("SELECT * FROM userDetails WHERE email=$1 AND password=$2",[email,password]);
            if(user.rows.length == 0){
                return res.status(400).json({ errors: "Invalid credientials" });
            }
            const data = user.rows[0];
            // jwt token
            const token = jwt.sign(data,JWT_SECRET);
            //response
            res.cookie("token",token,{
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });
            res.send(data);
        } catch (err) {
            console.error(err.message);
        }
    });

//CREATE USER (ADMIN) -----------------------------------------------------------------------------------------------------------------
app.post('/createuser',async(req,res)=>{
    const {username,email,password,phone,address} = req.body;
    if(username == undefined || email == undefined || password == undefined || phone == undefined || address == undefined){
        res.send("please add all the details !! ");
    }else{
        try {
            const emailExists = await pool.query("SELECT EXISTS (SELECT 1 FROM userdetails WHERE email =$1) AS email_exists",[email]);
            if(emailExists.rows[0].email_exists){
                res.send(false);
            }else{     
                const createdUser = await pool.query("INSERT INTO userDetails (username,email,password,phone,address) VALUES ($1,$2,$3,$4,$5) RETURNING *",[username,email,password,phone,address]);  
                const user = createdUser.rows[0];
                
                res.send(user);
            }
        } catch (err) {
            console.error(err.message);
        }
    }
});
// UPDATE USER (USER & ADMIN) ---------------------------------------------------------------------------------------------------------------------
app.put('/updateUser/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const findId = await pool.query("SELECT EXISTS (SELECT 1 FROM userdetails WHERE userid = $1) AS id_exists",[id]);
        if(findId.rows[0].id_exists){
            const{username,email,phone,address,password} = req.body;
            if(username != undefined && email != undefined && phone != undefined && address!= undefined && password != undefined){
                await pool.query("UPDATE userdetails SET username = $1, email = $2, phone = $3, address = $4, password = $5 WHERE userid = $6", [username,email, phone, address,password,id]);
                res.send("User Updated !!");
            }else{
                if(username != undefined){
                    await pool.query("UPDATE userdetails SET username = $1 WHERE userid = $2", [username,id]);
                }
                if(email != undefined){
                    await pool.query("UPDATE userdetails SET email = $1  WHERE userid = $2", [email,id]);
                }
                if(phone != undefined){
                    await pool.query("UPDATE userdetails SET phone = $1  WHERE userid = $2", [phone,id]);
                }
                if(address != undefined){
                    await pool.query("UPDATE userdetails SET address = $1 WHERE userid = $2", [address, id]);
                }
                if(password != undefined){
                    await pool.query("UPDATE userdetails SET password = $1 WHERE userid = $2", [password, id]);
                }
                res.send("User Updated !!");
            }
        }else{
            res.send("invalid id");
        }
    } catch (err) {
        console.error(err.message);
    }
});

// DELETE USER (ADMIN) ---------------------------------------------------------------------------------------------------------------------
app.delete('/deleteuser/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        const findId = await pool.query("SELECT EXISTS (SELECT 1 FROM userdetails WHERE userid = $1) AS id_exists",[id]);
        if(findId.rows[0].id_exists){
            await pool.query("DELETE FROM userDetails WHERE userid = $1",[id]);
            res.send("Successfully deleted !");
        }else{
            res.send("Invalid id");
        }
    }catch(err){
        console.error(err.message);
    }
});

// GET ALL USERS (ADMIN)----------------------------------------------------------------------------------------------- 
app.get('/allusers',async(req,res)=>{
    try {
        const allusers = await pool.query("SELECT * FROM userdetails ORDER BY userid");
        res.send(allusers.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// GET USER (USER & ADMIN)----------------------------------------------------------------------------------------------- 
app.get('/user/:id',async(req,res)=>{
    const {id} = req.params
    try {
        const user = await pool.query("SELECT * FROM userdetails WHERE userid=$1",[id]);
        res.send(user.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// BLOCK AND UNBLOCK  USER (ADMIN)----------------------------------------------------------------------------------------------- 
// app.put('/blockuser/:id',async(req,res)=>{
//     const {id} = req.params;
//     try {
//         await pool.query("UPDATE userdetails SET block =  NOT block WHERE userid = $1",[id])
//         res.send("User Blocked")
//     } catch (err) {
//         console.error(err);
//     }
// })


// COUNT TOTAL USERS ---------------------------------------------------------------------------------------------------------
app.get('/countusers',async(req,res)=>{
    try {
        const countP = await pool.query("SELECT COUNT(*) FROM userdetails");
        res.send(countP.rows[0].count);
    } catch (err) {
        console.error(err.message);
    }
});

// =============================================== PRODUCTS ROUTES ==================================================================================

// CREATE PRODUCT -------------------------------------------------------------------------------
app.post('/createProduct',async(req,res)=>{
    const {pname,pdescription,pprice, pquantity,pimage} = req.body;
    if(pname == undefined || pdescription == undefined || pprice == undefined ||  pquantity == undefined || pimage == undefined){
        res.send("please add all the details !! ");
    }else{
        try {
            await pool.query("INSERT INTO productDetails (pname,pdescription,pprice,pquantity,pimage) VALUES($1,$2,$3,$4,$5)",[pname,pdescription,pprice, pquantity,pimage]);
            res.send("product added successfully")
        } catch (err) {
            console.error(err.message);
        }
    }
});

// GET ALL PRODUCTS WITH DETAILS -------------------------------------------------------------------------------------------------
app.get('/allproducts',async(req,res)=>{
    try {
        const allProducts = await pool.query("SELECT * FROM productDetails ORDER BY productid");
        res.send(allProducts.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// UPDATE PRODUCT ---------------------------------------------------------------------------------------------
app.put('/updateproduct/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const findId = await pool.query("SELECT EXISTS (SELECT 1 FROM productDetails WHERE productid = $1) AS id_exists",[id]);
        if(findId.rows[0].id_exists){
            const{pname,pdescription,pprice,pquantity,pimage} = req.body;
            if(pname != undefined && pdescription != undefined && pprice!= undefined && pquantity != undefined && pimage != undefined){
                await pool.query("UPDATE productDetails SET pname = $1, pdescription = $2, pprice = $3, pquantity = $4, pimage = $5 WHERE productid = $6", [pname,pdescription,pprice,pquantity,pimage,id]);
                res.send("User Updated !!");
            }else{
                if(pname != undefined){
                    await pool.query("UPDATE productDetails SET pname = $1 WHERE productid = $2", [pname,id]);
                }
                if(pdescription != undefined){
                    await pool.query("UPDATE productDetails SET pdescription = $1  WHERE productid = $2", [pdescription,id]);
                }
                if(pprice != undefined){
                    await pool.query("UPDATE productDetails SET pprice = $1 WHERE productid = $2", [pprice, id]);
                }
                if(pquantity != undefined){
                    await pool.query("UPDATE productDetails SET pquantity = $1 WHERE productid = $2", [pquantity, id]);
                }
                if(pimage != undefined){
                    await pool.query("UPDATE productDetails SET pimage = $1 WHERE productid = $2", [pimage, id]);
                }
                res.send("product Updated !!");
            }
        }else{
            res.send("invalid id");
        }
    } catch (err) {
        console.error(err.message);
    }
});

// DELETE PRODUCT ----------------------------------------------------------------------------------------------
app.delete('/deleteporduct/:id',async(req,res)=>{
    const {id} = req.params;
    try{
        const findId = await pool.query("SELECT EXISTS (SELECT 1 FROM productDetails WHERE productid = $1) AS id_exists",[id]);
        if(findId.rows[0].id_exists){
            await pool.query("DELETE FROM productDetails WHERE productid = $1",[id]);
            res.send("Successfully deleted !");
        }else{
            res.send("Invalid id");
        }
    }catch(err){
        console.error(err.message);
    }
});

// COUNT TOTAL PRODUCTS ---------------------------------------------------------------------------------------------------------
app.get('/countproducts',async(req,res)=>{
    try {
        const countP = await pool.query("SELECT COUNT(*) FROM productdetails");
        res.send(countP.rows[0].count);
    } catch (err) {
        console.error(err.message);
    }
});

// ================================ ROUTES END =================================================================
app.get('/',(req,res)=>{
    res.send("Hello world !");
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})