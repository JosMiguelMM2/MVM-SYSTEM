const connection = require('../conexion');

let tipMaterialJugueteModel = {};

//obtener todos los tipos de documentos


tipMaterialJugueteModel.getTipMaterialJuguetes = function(callback)
{
    if(connection)
    {   
        /*let sql = "SELECT `Id_materiales_productos`,"
        +" `Id_juguetes`,"
        +" `Id_material`," 
        +" `Descripcion`," 
        +" `cantidad` "
        +" FROM `tp_materiales_juguetes` ";
        */
        let sql ="SELECT"
		+" mj.`Id_materiales_productos`,"
        +" j.`Nombre_juguete` as 'nombre_juguete',"
        +" n.`nombre_material` as 'Material',"
        +" mj.`Descripcion`,"
        +" mj.`cantidad`      "
        +" FROM `tp_materiales_juguetes` AS mj"
        +" INNER JOIN `tb_juguetes` AS j ON mj.Id_juguetes= j.`Id_juguetes`"
        +" INNER JOIN `tb_materiales` AS n ON mj.`Id_material` = n.`Id_material`"
        +" ORDER BY mj.Id_materiales_productos";
        connection.query(sql, function (error, rows)
        {
            if (error)
            {
                throw error;
            }
            else
            {
                //debuelve las filas como un Json
                //callback(null, rows);
                //comvierte las filas Json a una cadena de texto para Angular
                callback(null, JSON.stringify(rows));
            }
        });
    }
}

 //////////////////////////////////////////////////////////////////////////////
 
 // obtener contacto por su id

    tipMaterialJugueteModel.getTipMaterialJuguete = function (id, callback)
    {
        if(connection)
        {
         /*let sql = "SELECT `Id_materiales_productos`,"
            +" `Id_juguetes`,"
            +" `Id_material`," 
            +" `Descripcion`," 
            +" `cantidad` "
            +" FROM `tp_materiales_juguetes` "
            +" WHERE `Id_materiales_productos` = "
            + connection.escape(id) +";";
            */
            let sql = "SELECT"
            +" mj.`Id_materiales_productos`,"
            +" j.`Nombre_juguete` as 'nombre_juguete',"
            +" n.`nombre_material` as 'Material',"
            +" mj.`Descripcion`,"
            +" mj.`cantidad`"
            +" FROM `tp_materiales_juguetes` AS mj"
            +" INNER JOIN `tb_juguetes` AS j ON mj.Id_juguetes= j.`Id_juguetes`"
            +" INNER JOIN `tb_materiales` AS n ON mj.`Id_material` = n.`Id_material`"
            + " WHERE `Id_materiales_productos` = "
            + connection.escape(id) +";";
            // console.log id
            // console.log("31 tal ";)

            connection.query(sql, function (error, row)
            {
                if (error)
                {
                throw error;
                }
                else{
                callback(null, row);
                //comvierte las filas Json a una cadena de texto para Angular
                //callback(null, JSON.stringify(rows));
                }
            });
        }
    }
 //////////////////////////////////////////////////////////////////////////////
    //añadir registro

    //TipDocModel.insertTipDoc = function (TipDocData, callback)
    tipMaterialJugueteModel.insertTipMaterialJuguete = function (TipMaterialJugueteData, callback)
    {
        if(connection)
        {
             let sql = "INSERT INTO tp_materiales_juguetes SET ?";
            //let sql = "INSERT INTO `ct_tipos_documentos`(`tipo_documento`, `iniciales_tip_doc`) "
            //+ " VALUES (" + connection.escape(TipDocData.tipo_documento) + ", " + connection.escape(TipDocData.iniciales_tip_doc) + ");"
            console.log("aqui "+sql)

            connection.query(sql, TipMaterialJugueteData, function(error, result)
            {
                if(error)
                {
                    throw error;
                }
                else
                {
                    callback(null,{"msg": "Registro insertado"});
                }
            });
        }
    }

    //actualizar un tipo de documento
    //TipDocModel.updateTipDoc = function (TipDocData, callback)
    tipMaterialJugueteModel.updateTipMateralJuguete = function (TipMaterialJugueteData, callback)
{
    // console.log(" 32 tal ");
    if (connection)
    {
        let sql = "UPDATE `tp_materiales_juguetes` SET "
        +" `Id_juguetes`="+ connection.escape(TipMaterialJugueteData.Id_juguetes)
        +", `Id_material`="+ connection.escape(TipMaterialJugueteData.Id_material)
        +", `Descripcion`="+ connection.escape(TipMaterialJugueteData.Descripcion)
        +", `cantidad`="+ connection.escape(TipMaterialJugueteData.cantidad)
        +" WHERE Id_materiales_productos = "
        + connection.escape(TipMaterialJugueteData.Id_materiales_productos)+";";
      
        //console.log(" 37 tal "+ sql);

        connection.query(sql, function (error, result)
        {
        //se muestra el mensaje correspondiente
        if(error)
        {
            throw error;
        }
        else
         {
             callback(null, {"msg": "Registro Actualizado"});
         }
        });
    }
}
    

module.exports = tipMaterialJugueteModel;
