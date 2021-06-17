

module.exports = (sequelize, DataTypes) => {
	const sales = sequelize.define(
		'sales',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			userName: DataTypes.STRING,
			amount: DataTypes.FLOAT,
			date: DataTypes.DATE,
		},
	);
	sales.associate = () => {
		// associations can be defined here
	};
	return sales;
};
