const { authJwt } = require("../middleware");
const controller = require("../controller/user.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post(
        "/api/user/update",
        [authJwt.verifyToken],
        controller.update
    );
    app.post(
        "/api/user/profile",
        [authJwt.verifyToken],
        controller.getUserById
    );
};