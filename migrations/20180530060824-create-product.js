'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('product', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID
            },
            product_name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            sku: {
                type: Sequelize.STRING,
                allowNull: false
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE(3),
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)')
            }
        },{
            charset: 'utf8',
            collate: 'utf8_unicode_ci'
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('product');
    }
};
