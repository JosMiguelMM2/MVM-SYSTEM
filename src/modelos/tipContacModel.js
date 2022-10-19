
const connection = require('../conexion');

let tipContacModel = {};

//obtener todos los tipos de documentos


tipContacModel.getTipContacs = function(callback)
{
    if(connection)
    {   
        /*let sql = "SELECT `Id_contactos`"
        + ", `Id_empleados`"
        + ", `Tipo_contacto`"
        + ", `Dato_contacto`"  
        + "FROM `am_contactos`"
        + "ORDER BY `Id_empleados`";
        */
        let sql = "SELECT "+
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
        " ORDER BY h.`nombre1_empleados`;";
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

    tipContacModel.getTipContac = function (id, callback)
    {
        if(connection)
        {
            /*let sql = "SELECT `Id_contactos`, `Id_empleados`, `Tipo_contacto`, `Dato_contacto` FROM `am_contactos` WHERE Id_contactos = "*/
            let sql = "SELECT" +
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

            // console.log id
            // console.log("31 tal ";)

            connection.query(sql, function (error, row)
            {
                if (error)
                {
                throw error;
                }
                else{
                //callback(null, row);
                //comvierte las filas Json a una cadena de texto para Angular
                callback(null, JSON.stringify(rows));
                }
            });
        }
    }
 //////////////////////////////////////////////////////////////////////////////
    //añadir registro

    //TipDocModel.insertTipDoc = function (TipDocData, callback)
    tipContacModel.insertTipContac = function (TipContacData, callback)
    {
        if(connection)
        {
             let sql = "INSERT INTO am_contactos SET ?";
            //let sql = "INSERT INTO `ct_tipos_documentos`(`tipo_documento`, `iniciales_tip_doc`) "
            //+ " VALUES (" + connection.escape(TipDocData.tipo_documento) + ", " + connection.escape(TipDocData.iniciales_tip_doc) + ");"
            console.log("aqui "+sql)

            connection.query(sql, TipContacData, function(error, result)
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
    tipContacModel.updateTipContac = function (TipContacData, callback)
{
    // console.log(" 32 tal ");
    if (connection)
    {
        let sql = "UPDATE `am_contactos` SET "
        +" Id_empleados = "+ connection.escape(TipContacData.Id_empleados)
        +", Tipo_contacto = "+ connection.escape(TipContacData.Tipo_contacto)
        +", Dato_contacto = "+ connection.escape(TipContacData.Dato_contacto)
        +" WHERE Id_contactos = "
        + connection.escape(TipContacData.Id_contactos)+";";
      
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
    

module.exports = tipContacModel;
