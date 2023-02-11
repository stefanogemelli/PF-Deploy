//modelo de tabla de productos
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => { 
  sequelize.define("Products", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    // verificar que se cree la FK tienda_id
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1,50]
        }
    },
    price: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        validate: {
            min:1
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len:[10, 100]
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        validate: {
            min:0,
        }
    },
    qualification: {
        type: DataTypes.FLOAT,
        validate: {
            min: 0.5,
            max: 5.0
        }
    }, 
    specie: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1,10]
        }
    },
    breed: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1,20]
        }
    },
    //desde aca para abajo dependera del producto que tipo de propiedad tendra, asi que no es necesario que todas estas propiedades este presente en un producto.
    weight: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
            min: 0.0
        }
    },
    color: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1,10]
        }
    },
    size: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [1,3]
        }
    }
  });
};