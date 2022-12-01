module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employees", {
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        status: { //status = 1
            type: Sequelize.INTEGER
        },
        date: {
            type: Sequelize.DATE
        },
        timestamp: {
            type: Sequelize.DATE
        },
        worked: {
            type: Sequelize.DATE
        },
        break: {
            type: Sequelize.DATE
        },
        continue: {
            type: Sequelize.DATE
        },
        finished: {
            type: Sequelize.DATE
        }
    });

    return Employee;
};