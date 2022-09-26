/*const connection = require('../conexion');


var tipEmpleadoModel = {};


//obtener todos los tipos de documentos

tipEmpleadoModel.getTipEmpleados= function (callback)
{
    if(connection)
    {
        var sql = "SELECT `Id_empleados`, `Id_catalogos_universal`, `nombre1_empleados`, `nombre2_empleados`, `apellido1_empleados`, `apellido2_empleados`, `tipodocu_empleados`, `numdoc_empleados`, `cargio_empleados` FROM `tb_empleados` ORDER BY `Id_empleados`

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
 
 // obtener tipo doc por su id

    TipDocModel.getTipDoc = function (id, callback)
    {
        if(connection)
        {
            var sql = "SELECT id_tip_doc, tipo_documento, iniciales_tip_doc FROM ct_tipos_documentos WHERE id_tip_doc = "
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
                }
            });
        }
    }
 //////////////////////////////////////////////////////////////////////////////
    //añadir registro

    TipDocModel.insertTipDoc = function (TipDocData, callback)
    {
        if(connection)
        {
             var sql = "INSERT INTO ct_tipos_documentos SET ?";
            //var sql = "INSERT INTO `ct_tipos_documentos`(`tipo_documento`, `iniciales_tip_doc`) "
            //+ " VALUES (" + connection.escape(TipDocData.tipo_documento) + ", " + connection.escape(TipDocData.iniciales_tip_doc) + ");"
            console.log("aqui "+sql)

            connection.query(sql, TipDocData, function(error, result)
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
    TipDocModel.updateTipDoc = function (TipDocData, callback)
{
    // console.log(" 32 tal ");
    if (connection)
    {
        var sql = "UPDATE ct_tipos_documentos SET"
        +" tipo_documento = "+ connection.escape(TipDocData.tipo_documento)
        +", iniciales_tip_doc = "+ connection.escape(TipDocData.iniciales_tip_doc)
        +" WHERE id_tip_doc = "
        + connection.escape(TipDocData.id_tip_doc)+";";

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
    

module.exports = TipDocModel;
*/