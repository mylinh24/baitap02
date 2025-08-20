'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
            id : {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            email : {
                type: Sequelize.STRING
            },
            password : {
                type: Sequelize.STRING
            },
            firstName : {
                type: Sequelize.STRING
            },
            lastName : {
                type: Sequelize.STRING
            },
            address : {
                type: Sequelize.STRING
            },
            phoneNumber : {
                type: Sequelize.STRING
            },
            gender: {
                type: Sequelize.BOOLEAN
            },
            image : {
                type: Sequelize.STRING
            },
            roleId : {
                type: Sequelize.STRING
            },
            positionId : {
                type: Sequelize.STRING
            },
            createAt : {
                allowNull : false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            updatedAt : {
                allowNull : false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};