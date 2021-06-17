module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('sales', {
		id: {
			type: Sequelize.UUID,
			allowNull: false,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4(),
		},
		userName: {
			type: Sequelize.STRING,
		},
		amount: {
			type: Sequelize.FLOAT,
		},
		date: {
			type: Sequelize.DATE,
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
	}),
	down: queryInterface => queryInterface.dropTable('sales'),
};
