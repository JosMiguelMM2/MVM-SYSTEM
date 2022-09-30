
const connection = require('../conexion');

let tipMaterialesModel = {};

//obtener todos los tipos de documentos


tipMaterialesModel.getTipMaterialess = function (callback)
{
    if(connection)
    {   
        /*let sql = "SELECT `Id_material`,"+
        "`clase_material`,"+
        "`color_material`,"+
        "`cantidad_peso`, "+
        "`nombre_material`"+
        "FROM `tb_materiales` "+
        "ORDER BY `nombre_material`;";*/

        let sql = "SELECT "+ 
        " M.`Id_material`, " +
        " M.`nombre_material`," +
        " a.`denominacion_universal` AS 'Clase de material' ," +
        " c.`denominacion_universal` AS 'color del material' ,"+
        " M.`cantidad_peso` as 'Peso gr'"+        
        " FROM `tb_materiales` AS M"+
        " INNER JOIN `ct_catalogo_universal` AS a ON M.clase_material = a.`Id_catalogo_universal`"+
        " INNER JOIN `ct_catalogo_universal` AS c ON M.color_material = c.`Id_catalogo_universal`"+
        " ORDER BY `nombre_material`"
        connection.query(sql, function (error, rows)
        {
            if (error)
            {
                throw error;
            }
            else
            {
                //debuelve las filas como un Json
                callback(null, rows);
                //comvierte las filas Json a una cadena de texto para Angular
                //callback(null, JSON.stringify(rows));
            }
        });
    }
}

 //////////////////////////////////////////////////////////////////////////////
 
 // obtener contacto por su id

    tipMaterialesModel.getTipMateriales = function (id, callback)
    {
        if(connection)
        {
            /*let sql = "SELECT "+
            "`clase_material`,"+
            "`color_material`,"+
            "`cantidad_peso`, "+
            "`nombre_material`"+
            "FROM `tb_materiales` "+
            "WHERE `Id_material` = "+*/

            let sql = "SELECT "+ 
            " M.`nombre_material`," +
            " a.`denominacion_universal` AS 'Clase de material'," +
            " c.`denominacion_universal` AS 'color del material',"+
            " M.`cantidad_peso` as 'Peso gr'"+        
            " FROM `tb_materiales` AS M"+
            " INNER JOIN `ct_catalogo_universal` AS a ON M.clase_material = a.`Id_catalogo_universal`"+
            " INNER JOIN `ct_catalogo_universal` AS c ON M.color_material = c.`Id_catalogo_universal`"+
            " WHERE `Id_material` = "+
            connection.escape(id) +";";

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
                }
            });
        }
    }
 //////////////////////////////////////////////////////////////////////////////
    //añadir registro

        tipMaterialesModel.insertTipMateriales = function (TipMaterialDada, callback)
    {
        if(connection)
        {
             let sql = "INSERT INTO `tb_materiales` SET ?";
            //let sql = "INSERT INTO `ct_tipos_documentos`(`tipo_documento`, `iniciales_tip_doc`) "
            //+ " VALUES (" + connection.escape(TipDocData.tipo_documento) + ", " + connection.escape(TipDocData.iniciales_tip_doc) + ");"
            console.log("aqui "+sql)

            connection.query(sql, TipMaterialDada, function(error, result)
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
    tipMaterialesModel.updateTipMateriales = function (TipMaterialDada, callback)
{
    // console.log(" 32 tal ");
    if (connection)
    {
        let sql = "UPDATE `tb_materiales` SET"
        +" `clase_material`= "+ connection.escape(tipMaterialesModel.clase_material)
        +", `color_material`= "+ connection.escape(tipMaterialesModel.color_material)
        +", `cantidad_peso`= "+ connection.escape(tipMaterialesModel.cantidad_peso)
        + ", `nombre_material`= " + connection.escape(tipMaterialesModel.nombre_material)
        + " WHERE `Id_material` = "
        + connection.escape(TipMaterialDada.Id_material)+";";
      
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
    

module.exports = tipMaterialesModel;
