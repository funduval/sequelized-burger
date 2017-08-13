

module.exports = {
    up: function(queryInterface, Sequelize) {
        return queryInterface.createTable('burgers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            eaten: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            }
        });
    },
    down: function(queryInterface, Sequelize) {
        return queryInterface.dropTable('burgers');
    }
};
