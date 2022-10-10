const connection = require('../conexion');

let tipEmpaqueModel = {};

//obtener todos los tipos de documentos


tipEmpaqueModel.getTipEmpaques = function(callback)
{
    if(connection)
    {   
        let sql = "SELECT `Id_Empaque`,"
            +"`Tipo_Empaque`," 
            +"`Juguete_Empaque`,"
            +"`Empleado_Empaque` "
            +"FROM `empaquetamiento` "
            +"ORDER BY `Tipo_Empaque`"
        
        /*let sql = "SELECT "+
        " ct.`Id_contactos`,"+
        " g.`tipodocu_empleados` AS 'Numero Documento',"+
        " CONCAT(h.nombre1_empleados, ' ',"+
        " i.apellido1_empleados) as 'Persona',"+
        " D.`denominacion_universal` AS 'Tipo Contacto', "+
        " ct.`Dato_contacto`    "  +
        " FROM `am_contactos` AS ct "+
        " INNER JOIN `ct_catalogo_universal` AS D ON ct.`Tipo_contacto` = D.`Id_catalogo_universal` "+
        " INNER JOIN `tb_empleados` AS g ON ct.`Id_empleados` = g.`Id_empleados`"+
        " INNER JOIN `tb_empleados` AS h ON ct.`Id_empleados` = h.`Id_empleados`"+
        " INNER JOIN `tb_empleados` AS i ON ct.`Id_empleados` = i.`Id_empleados`"+
        " ORDER BY h.`nombre1_empleados`;";*/
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

    tipEmpaqueModel.getTipEmpaque = function (id, callback)
    {
        if(connection)
        {
            let sql = "SELECT "
            +" `Id_Empaque`,"
            +" `Tipo_Empaque`, "
            +" `Juguete_Empaque`,"
            +" `Empleado_Empaque`" 
            +" FROM `empaquetamiento`" 
            +" WHERE `Id_Empaque` = "
            + connection.escape(id) +";";

            /*let sql = "SELECT" +
            " ct.`Id_contactos`,"+
            " g.`tipodocu_empleados` AS 'Numero Documento',"+
            " CONCAT(h.nombre1_empleados, ' ',"+
            " i.apellido1_empleados) as 'Persona',"+
            " D.`denominacion_universal` AS 'Tipo Contacto', "+
            " ct.`Dato_contacto`   "  +     
            " FROM `am_contactos` AS ct "+
            " INNER JOIN `ct_catalogo_universal` AS D ON ct.`Tipo_contacto` = D.`Id_catalogo_universal`" +
            " INNER JOIN `tb_empleados` AS g ON ct.`Id_empleados` = g.`Id_empleados`"+
            " INNER JOIN `tb_empleados` AS h ON ct.`Id_empleados` = h.`Id_empleados`"+
            " INNER JOIN `tb_empleados` AS i ON ct.`Id_empleados` = i.`Id_empleados`"+
            " WHERE Id_contactos = "
            + connection.escape(id) +";";
*/
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

    //TipDocModel.insertTipDoc = function (TipDocData, callback)
    tipEmpaqueModel.insertTipEmpaque = function (TipEmpaqueData, callback)
    {
        if(connection)
        {
             let sql = "INSERT INTO empaquetamiento SET ?";
            //let sql = "INSERT INTO `ct_tipos_documentos`(`tipo_documento`, `iniciales_tip_doc`) "
            //+ " VALUES (" + connection.escape(TipDocData.tipo_documento) + ", " + connection.escape(TipDocData.iniciales_tip_doc) + ");"
            console.log("aqui "+sql)

            connection.query(sql, TipEmpaqueData, function(error, result)
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
    tipEmpaqueModel.updateTipEmpaque = function (TipEmpaqueData, callback)
{
    // console.log(" 32 tal ");
    if (connection)
    {
        let sql = "UPDATE `empaquetamiento` SET "
            +" Tipo_Empaque = " + connection.escape(TipEmpaqueData.Tipo_Empaque)
            +" ,Juguete_Empaque = " + connection.escape(TipEmpaqueData.Juguete_Empaque)
            +" ,Empleado_Empaque = " + connection.escape(TipEmpaqueData.Empleado_Empaque)
            +" WHERE Id_Empaque = " + connection.escape(TipEmpaqueData.Id_Empaque) +";";
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
    

module.exports = tipEmpaqueModel;