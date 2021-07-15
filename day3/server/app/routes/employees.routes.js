const { authJwt } = require("../middleware");
const controller = require("../controller/employees.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get(
        "/api/employees",
        [authJwt.verifyToken],
        controller.getAll
    );
    app.get(
        "/api/employees/sq",
        [authJwt.verifyToken],
        controller.getEmpAll
    );
    app.get(
        "/api/employees/bystatus/:id",
        [authJwt.verifyToken],
        controller.getAllByFilter
    );
    app.get(
        "/api/employees/getTodayById/:id",
        [authJwt.verifyToken],
        controller.getTodayById
    );
    app.get(
        "/api/employees/getTodayByIdSq/:id",
        [authJwt.verifyToken],
        controller.getTodayByIdSq
    );
    app.get(
        "/api/employees/getLogs/:id",
        [authJwt.verifyToken],
        controller.getLogs
    );
    app.post(
        "/api/employees/update",
        [authJwt.verifyToken],
        controller.UpdateStatus
    );
};