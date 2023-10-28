const connection = require("../database/db");


const trail = {

    getdata1: (req, res) => {
        connection.query('SELECT * FROM test1', (err, result,) => {
            if (!err)
                res.send(result);
            else
                console.log(err);
        })

    },

    getdata2: (req, res) => {
        connection.query('SELECT * FROM test2', (err, result,) => {
            if (!err)
                res.send(result);
            else
                console.log(err);
        })

    },

    postdata1: (req, res) => {
        const sql = ("INSERT INTO test1 (firstname,lastname,phone) VALUES ?")
        const values = [
            [req.body.firstname, req.body.lastname, req.body.phone]
        ]
        connection.query(sql, [values], (err, result) => {
            if (err) throw err;
            res.send('Data inserted successfully table 1');
        });
    },

    postdata2: (req, res) => {
        const sql = ("INSERT INTO test2 (firstname,lastname,email) VALUES ?")
        const values = [
            [req.body.firstname, req.body.lastname, req.body.email]
        ]
        connection.query(sql, [values], (err, result) => {
            if (err) throw err;
            res.send('Data inserted successfully table 2');
        });
    },

    otp:(req,res)=>{
        const min = 1000;
        const max = 9999;
        const random4DigitNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log (random4DigitNumber);        
        res.send('OTP generated');

    }
}


module.exports = trail;    
