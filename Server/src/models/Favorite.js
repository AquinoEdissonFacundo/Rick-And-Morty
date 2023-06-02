const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
sequelize.define('Favorite', {
   id :{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
   }, 
   name:{
   type: DataTypes.STRING,
   // validate:{
   //    isUrl: true
   // }
   },
   status:{
      type: DataTypes.STRING
   },
   species: {
      type:DataTypes.STRING,
   },
   gender:{
      type: DataTypes.STRING,
      // validate:{
      //    isIn:[['male','Female',]]
      // }
   }
}, { timestamps: false });

};
