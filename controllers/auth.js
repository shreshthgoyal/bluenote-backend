const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const client = require("../configs/db");

exports.signUp = (req, res) => {
    const { name, email, password } = req.body;

    client
        .query(`SELECT * FROM users WHERE email= $1;`, [email])
        .then((data) => {
            const isValid = data.rows;

            if (isValid.length != 0) {
                res.status(400).json({
                    error: "User already exists",
                });


            }
            else {
                bcrypt.hash(password, 10, (err, hash) => {
                    if (err)
                        res.status(err).json({
                            error: "Server error",
                        });

                    const user = {
                        name,
                        email,
                        password: hash,
                    };
                    client
                        .query(`INSERT INTO users (name, email, password) VALUES ('${user.name}', '${user.email}', '${user.password}');`)
                        .then((data) => {
                            const token = jwt.sign(
                                {
                                    email: email,
                                },
                                process.env.SECRET_KEY
                            );

                            res.status(200).json(
                                {
                                    message: "User added",
                                    token: token,
                                }
                            );
                        })
                        .catch((err) => {
                            res.status(500).json({
                                error: "Database error pls try again",
                            });
                        });
                });
            }
        })
        .catch((err) => {

            console.log(err);
            res.status(500).json({
                error: "Database error occurred!",
            });
        });
};


exports.signIn = (req, res) => {

    const { email, password } = req.body;

    client
        .query(`SELECT * FROM users WHERE email= $1;`, [email])
        .then((data) => {
            userData = data.rows;

            if (userData.length === 0) {
                res.status(400).json({
                    error: "User does not exist, Sign Up first",
                });
            }
            else {
                bcrypt.compare(password, userData[0].password, (err, result) => {
                    if (err) {
                        res.status(500).json({
                            error: "Server error",
                        });
                    } else if (result === true) {
                        const token = jwt.sign(
                            {
                                email: email,
                            },
                            process.env.SECRET_KEY
                        );
                        res.status(200).json({
                            message: "User signed in!",
                            token: token,
                        });
                    }
                    else {
                        res.status(400).json({
                            error: "Enter correct password!",
                        });
                    }
                })
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: "Database error occurred while signing in.",
            });
        });

}