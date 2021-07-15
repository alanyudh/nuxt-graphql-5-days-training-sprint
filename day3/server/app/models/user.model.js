module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING
        },
        fullname: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        divisi: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.INTEGER
        }
    });

    return User;
};