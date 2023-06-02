const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         // type: DataTypes.UUID, //fasdafesf-awd21323
         // defaultValue: DataTypes.UUIDV4,
         // primaryKey: true,
         // allowNull: false // que este campo no venga vacio
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
         // validate: {
         //    isEmail: true //REGEX
         // }
      },
      password:{
         type : DataTypes.STRING,
         allowNull: false,
         // validate:{
         //    is: ["^[a-z]+$",'i']
         // }
      }
   }, { timestamps: false });
 
};
