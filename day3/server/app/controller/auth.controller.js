const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    // Save User to Database
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then(() => {
            res.send({ message: "User was registered successfully!" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
exports.addUser = (req, res) => {
    // Save User to Database
    User.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then(user => {
            // user role = 1
            user.setRoles([1]).then(() => {
                res.send({ message: "User was registered successfully!" });
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.signin = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                User.create({
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 8),
                    role: 1
                })
                    .then(user => {
                        var passwordIsValid = bcrypt.compareSync(
                            req.body.password,
                            user.password
                        );

                        if (!passwordIsValid) {
                            return res.status(401).send({
                                accessToken: null,
                                message: "Invalid Password!"
                            });
                        }

                        var token = jwt.sign({ id: user.id }, config.secret, {
                            expiresIn: 86400 // 24 hours
                        });
                        res.status(200).send({
                            id: user.id,
                            fullname: user.fullname,
                            email: user.email,
                            divisi: user.divisi,
                            role: user.role,
                            accessToken: token
                        });
                    })
            } else {
                var passwordIsValid = bcrypt.compareSync(
                    req.body.password,
                    user.password
                );

                if (!passwordIsValid) {
                    return res.status(401).send({
                        accessToken: null,
                        message: "Invalid Password!"
                    });
                }

                var token = jwt.sign({ id: user.id }, config.secret, {
                    expiresIn: 86400 // 24 hours
                });
                res.status(200).send({
                    id: user.id,
                    fullname: user.fullname,
                    email: user.email,
                    divisi: user.divisi,
                    role: user.role,
                    accessToken: token
                });
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};