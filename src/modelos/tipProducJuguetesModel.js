const connection = require('../conexion');

let tipProducJuguetesModel = {};

//obtener todos los tipos de documentos


tipProducJuguetesModel.getTipProducJuguetess = function(callback)
{
    if(connection)
    { 
        let sql = "SELECT `Id_produccion`,"+
        " `Id_empleados`, "+
        " `Id_juguetes`," +
        " `Fecha_produccion`," +
        " `Detalles_produccion`,"+
        " `Errores_produccion`, "+
        " `Cantidad_producida` "+
        " FROM `th_produccion_juguetes` "+
        " ORDER BY `Cantidad_producida`"
        
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

    tipProducJuguetesModel.getTipProducJuguetes = function (id, callback)
    {
        if(connection)
        {
            let sql = "SELECT "+
            " `Id_empleados`, "+
            " `Id_juguetes`," +
            " `Fecha_produccion`," +
            " `Detalles_produccion`,"+
            " `Errores_produccion`, "+
            " `Cantidad_producida` "+
            " FROM `th_produccion_juguetes` "+
            " WHERE  `Id_produccion` = "
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

    //TipDocModel.insertTipDoc = function (TipDocData, callback)
    tipProducJuguetesModel.insertTipProducJuguetes = function (TipProducJuguetesData, callback)
    {
        if(connection)
        {
             let sql = "INSERT INTO th_produccion_juguetes SET ?";
            //let sql = "INSERT INTO `ct_tipos_documentos`(`tipo_documento`, `iniciales_tip_doc`) "
            //+ " VALUES (" + connection.escape(TipDocData.tipo_documento) + ", " + connection.escape(TipDocData.iniciales_tip_doc) + ");"
            console.log("aqui "+sql)

            connection.query(sql, TipProducJuguetesData, function(error, result)
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
    tipProducJuguetesModel.updateTipProducJuguetes = function (TipProducJuguetesData, callback)
{
    // console.log(" 32 tal ");
    if (connection)
    {
        let sql = "UPDATE `th_produccion_juguetes` SET" +
        " `Id_empleados`= "+ connection.escape(TipProducJuguetesData.Id_empleados)+
        ", `Id_juguetes`= "+ connection.escape(TipProducJuguetesData.Id_juguetes)+
        ", `Fecha_produccion`= "+ connection.escape(TipProducJuguetesData.Fecha_produccion)+
        ", `Detalles_produccion`= "+ connection.escape(TipProducJuguetesData.Detalles_produccion)+
        ", `Errores_produccion`= "+ connection.escape(TipProducJuguetesData.Errores_produccion)+
        ", `Cantidad_producida`= "+ connection.escape(TipProducJuguetesData.Cantidad_producida)+
        " WHERE Id_produccion = "+
         connection.escape(TipProducJuguetesData.Id_produccion)+";";
      
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
    

module.exports = tipProducJuguetesModel;
