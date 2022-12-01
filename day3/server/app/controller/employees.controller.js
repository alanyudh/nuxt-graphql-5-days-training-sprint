const db = require("../models");
const Employees = db.employees;
const Users = db.user;
const { QueryTypes, fn, col } = require('sequelize');
const { query } = require("express");
const { Op } = require('sequelize')

exports.getTodayByIdSq = (req, res) => {
    console.log('execute by sq');
    let date = new Date();
    const id = req.params.id;

    Users.findAll({
        attributes: [
            'id',
            'fullname',
            'divisi'
        ],
        where: {
            'id': id,
        },
        include: [
            {
                model: Employees,
                attributes: [
                    'status',
                    'timestamp'
                ],
                where: {
                    date: {
                        [Op.gte]: date.toISOString().slice(0, 10)
                    },
                },
                required: false
            }
        ]
    })
        .then(result => {
            let employees = [];
            result.forEach(item => {
                rStatus = "Belum Masuk";
                rDate = "0000-00-00"
                rStatusId = null;

                if (item.employees.length > 0) {
                    rStatusId = item.employees[0].status;
                    if (item.employees[0].status == 1) {
                        rStatus = "Kerja"
                    } else if (item.employees[0].status == 2) {
                        rStatus = "Istirahat"
                    } else if (item.employees[0].status == 3) {
                        rStatus = "Pulang"
                    }
                    //date
                    if (item.employees[0].timestamp != null) {
                        rDate = new Date(item.employees[0].timestamp).toLocaleString("en-US", { timeZone: "Asia/Jakarta", hour12: false });
                    }
                }

                employees.push({
                    id: item.id,
                    fullname: item.fullname,
                    email: item.email,
                    divisi: item.divisi,
                    txtstatus: rStatus,
                    status: rStatusId,
                    timestamp: rDate
                })
            });
            res.status(200).send(employees);
        })
};
exports.getEmpAll = (req, res) => {
    console.log('Execute with Sq');
    let date = new Date();
    Users.findAll({
        attributes: [
            'id',
            'fullname',
            'divisi'
        ],
        include: [
            {
                model: Employees,
                attributes: [
                    'status',
                    'timestamp'
                ],
                where: {
                    date: {
                        [Op.gte]: date.toISOString().slice(0, 10)
                    },
                },
                required: false
            }
        ]
    }).then(result => {
        //console.log(result);
        let employees = [];
        result.forEach(item => {
            rStatus = "Belum Masuk";
            rDate = "0000-00-00"


            if (item.employees.length > 0) {
                if (item.employees[0].status == 1) {
                    rStatus = "Kerja"
                } else if (item.employees[0].status == 2) {
                    rStatus = "Istirahat"
                } else if (item.employees[0].status == 3) {
                    rStatus = "Pulang"
                }
                //date
                if (item.employees[0].timestamp != null) {
                    rDate = new Date(item.employees[0].timestamp).toLocaleString("en-US", { timeZone: "Asia/Jakarta", hour12: false });
                }
            }

            employees.push({
                id: item.id,
                fullname: item.fullname,
                email: item.email,
                divisi: item.divisi,
                status: rStatus,
                timestamp: rDate
            })
        });
        res.status(200).send(employees);
    })
};
exports.getAll = (req, res) => {
    let date = new Date();
    db.sequelize.query('SELECT users.id, users.email, users.fullname, users.divisi, MAX(emp."timestamp") as timestamp, MAX(emp.status) as status FROM users LEFT JOIN (select * from employees where DATE(date) = (:date)) as emp ON users.id = emp."userId" GROUP BY users.id',
        {
            replacements: { date: date.toISOString().slice(0, 10) },
            type: QueryTypes.SELECT
        })
        .then(result => {
            let employees = [];
            result.forEach(item => {
                rStatus = item.status || "Belum Masuk";
                if (item.status == 1) {
                    rStatus = "Kerja"
                } else if (item.status == 2) {
                    rStatus = "Istirahat"
                } else if (item.status == 3) {
                    rStatus = "Pulang"
                }
                rDate = new Date(item.timestamp).toLocaleString("en-US", { timeZone: "Asia/Jakarta", hour12: false });
                if (item.timestamp == null) {
                    rDate = "0000-00-00"
                }
                employees.push({
                    id: item.id,
                    fullname: item.fullname,
                    email: item.email,
                    divisi: item.divisi,
                    status: rStatus,
                    timestamp: rDate
                })
            });
            res.status(200).send(employees);
        })
};
exports.getAllByFilter = (req, res) => {
    let date = new Date();
    let query = 'SELECT users.id, users.email, users.fullname, users.divisi, MAX(emp."timestamp") as timestamp, MAX(emp.status) as status FROM users LEFT JOIN (select * from employees where DATE(date) = (:date)) as emp ON users.id = emp."userId" WHERE emp.status = :status GROUP BY users.id';
    if (req.params.id == 0) {
        query = 'SELECT users.id, users.email, users.fullname, users.divisi, MAX(emp."timestamp") as timestamp, MAX(emp.status) as status FROM users LEFT JOIN (select * from employees where DATE(date) = (:date)) as emp ON users.id = emp."userId" WHERE emp.status IS NULL GROUP BY users.id';
    }
    console.log(query);
    db.sequelize.query(query,
        {
            replacements: {
                date: date.toISOString().slice(0, 10),
                status: req.params.id
            },
            type: QueryTypes.SELECT
        })
        .then(result => {
            let employees = [];
            result.forEach(item => {
                rStatus = item.status || "Belum Masuk";
                if (item.status == 1) {
                    rStatus = "Kerja"
                } else if (item.status == 2) {
                    rStatus = "Istirahat"
                } else if (item.status == 3) {
                    rStatus = "Pulang"
                }
                rDate = new Date(item.timestamp).toLocaleString("en-US", { timeZone: "Asia/Jakarta", hour12: false });
                if (item.timestamp == null) {
                    rDate = "0000-00-00"
                }
                employees.push({
                    id: item.id,
                    fullname: item.fullname,
                    email: item.email,
                    divisi: item.divisi,
                    status: rStatus,
                    timestamp: rDate
                })
            });
            res.status(200).send(employees);
        })
};
exports.getLogs = (req, res) => {
    db.sequelize.query('SELECT * FROM employees Where "userId" = :userId ORDER BY date DESC',
        {
            replacements: { userId: req.params.id },
            type: QueryTypes.SELECT
        })
        .then(result => {
            let logs = [];
            result.forEach(item => {
                worked = new Date(item.worked).toLocaleString("en-US", { timeZone: "Asia/Jakarta", hour12: false });
                if (item.worked == null) {
                    worked = "0000-00-00"
                }
                rbreak = new Date(item.break).toLocaleString("en-US", { timeZone: "Asia/Jakarta", hour12: false });
                if (item.break == null) {
                    rbreak = "0000-00-00"
                }
                rcontinue = new Date(item.continue).toLocaleString("en-US", { timeZone: "Asia/Jakarta", hour12: false });
                if (item.continue == null) {
                    rcontinue = "0000-00-00"
                }
                finished = new Date(item.finished).toLocaleString("en-US", { timeZone: "Asia/Jakarta", hour12: false });
                if (item.finished == null) {
                    finished = "0000-00-00"
                }
                logs.push({
                    id: item.id,
                    status: item.status,
                    date: new Date(item.date).toISOString().slice(0, 10),
                    worked: worked,
                    break: rbreak,
                    continue: rcontinue,
                    finished: finished
                })
            });
            res.status(200).send(logs);
        }).catch(err => {
            res.status(500).send({
                message: "Error get List"
            });
        });
};
exports.getTodayById = (req, res) => {
    let date = new Date();
    const id = req.params.id;

    db.sequelize.query('SELECT users.id, users.email, users.fullname, users.divisi, MAX(emp."timestamp") as timestamp, MAX(emp.status) as status FROM users LEFT JOIN (select * from employees where DATE(employees.date) = :date) as emp ON users.id = emp."userId" WHERE users.id = :userId GROUP BY users.id',
        {
            replacements: {
                date: date.toISOString().slice(0, 10),
                userId: id
            },
            type: QueryTypes.SELECT
        })
        .then(result => {
            let employees = [];

            result.forEach(item => {
                rStatus = item.status || "Belum Masuk";
                rDate = new Date(item.timestamp).toISOString().replace(/T/, ' ').replace(/\..+/, '');
                if (item.timestamp == null) {
                    rDate = "0000-00-00"
                }

                if (item.status == 1) {
                    rStatus = "Kerja"
                } else if (item.status == 2) {
                    rStatus = "Istirahat"
                } else if (item.status == 3) {
                    rStatus = "Pulang"
                }
                employees.push({
                    id: item.id,
                    fullname: item.fullname,
                    email: item.email,
                    divisi: item.divisi,
                    txtstatus: rStatus,
                    status: item.status,
                    timestamp: rDate
                })
            });
            res.status(200).send(employees);
        })
};

exports.UpdateStatus = (req, res) => {
    const id = req.body.id;
    console.log(`Id Use: ${id}`);
    var date = new Date();
    var currentDate = date.toISOString().slice(0, 10);
    db.sequelize.query('SELECT * FROM employees WHERE "userId" = :userId AND date(date) = :date LIMIT 1',
        {
            replacements: {
                date: currentDate,
                userId: id
            },
            type: QueryTypes.SELECT
        }).then(emp => {
            if (emp == "") {
                const employees = {
                    status: 1,
                    date: date,
                    timestamp: date,
                    userId: id,
                    worked: date
                };
                Employees.create(employees)
                    .then(data => {
                        res.send(data);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message:
                                err.message || "Some error occurred while creating the update."
                        });
                    });
            } else {
                const data = {
                    status: req.body.status,
                    timestamp: date
                };
                if (req.body.status == 1) {
                    data.continue = date;
                } else if (req.body.status == 2) {
                    data.break = date;
                } else if (req.body.status == 3) {
                    data.finished = date;
                }
                Employees.update(data, {
                    where: { id: emp[0].id }
                })
                    .then(num => {
                        if (num == 1) {
                            res.send({
                                message: "Status was updated successfully."
                            });
                        } else {
                            res.send({
                                message: `Cannot update Status with id=${id}. Maybe Status was not found or req.body is empty!`
                            });
                        }
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: "Error updating Status with id=" + id
                        });
                    });
            }
        }).catch(err => {
            res.status(500).send({
                message: "Error updating Status with id=" + id
            });
        });
};