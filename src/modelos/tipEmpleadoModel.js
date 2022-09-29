const connection = require('../conexion');


let tipEmpleadoModel = {};


//obtener todos los tipos de documentos

tipEmpleadoModel.getTipEmpleados= function (callback)
{
    if(connection)
    {
        /*let sql = "SELECT `Id_empleados`" 
        + ", `Id_catalogos_universal`"
        + ", `nombre1_empleados`"
        + ", `nombre2_empleados`"
        + ", `apellido1_empleados`"
        + ", `apellido2_empleados`"
        + ", `tipodocu_empleados`"
        + ", `numdoc_empleados`"
        + ", `cargo_empleados`"
        + "FROM `tb_empleados`"
        + "ORDER BY `Id_empleados`;";*/
       let sql = " SELECT "+
       " e.`Id_empleados`,"+
       " D.`denominacion_universal` AS 'Tipo Documento',"+
       " CONCAT( e.`nombre1_empleados`, ' ',"+
       " e.`nombre2_empleados`,  ' ',"+
       " e.`apellido1_empleados`, ' ',"+
       " e.`apellido2_empleados`) AS 'Persona',"+
       "  e.`numdoc_empleados` AS 'Numero De Documento',"+
       " c.`denominacion_universal` AS 'Cargo Empleado'"+
       " FROM `tb_empleados` AS e"+
       " INNER JOIN `ct_catalogo_universal` AS c ON e.`cargo_empleados` = c.`Id_catalogo_universal`"+
       " INNER JOIN `ct_catalogo_universal` AS D ON e.`Id_catalogos_universal` = D.`Id_catalogo_universal`"
       + "ORDER BY `Id_empleados`;";
      
       
        connection.query(sql, function (error, rows)
        {            if (error)
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
 
 // obtener tipo doc por su id

    tipEmpleadoModel.getTipEmpleado = function (id, callback)
    {
        if(connection)
        {
            /*let sql = "SELECT `Id_empleados`" 
            + ", `Id_catalogos_universal`"
            + ", `nombre1_empleados`"
            + ", `nombre2_empleados`"
            + ", `apellido1_empleados`"
            + ", `apellido2_empleados`"
            + ", `tipodocu_empleados`"
            + ", `numdoc_empleados`"
            + ", `cargo_empleados`"
            + "FROM `tb_empleados`"
            + "WHERE `Id_empleados` = "*/
            let sql = "SELECT"+
            " e.`Id_empleados`,"+
            " D.`denominacion_universal` AS 'Tipo Documento',"+
            " CONCAT( e.`nombre1_empleados`, ' ',"+
            " e.`nombre2_empleados`,  ' ',"+
            " e.`apellido1_empleados`, ' ',"+
            " e.`apellido2_empleados`) AS 'Persona',"+
            "  e.`numdoc_empleados` AS 'Numero De Documento',"+
            " c.`denominacion_universal` AS 'Cargo Empleado'"+
            " FROM `tb_empleados` AS e"+
            " INNER JOIN `ct_catalogo_universal` AS c ON e.`cargo_empleados` = c.`Id_catalogo_universal`"+
            " INNER JOIN `ct_catalogo_universal` AS D ON e.`Id_catalogos_universal` = D.`Id_catalogo_universal`"+
            "WHERE `Id_empleados` = "
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

    tipEmpleadoModel.insertTipEmpleado = function (TipEmpleadoData, callback)
    {
        if(connection)
        {
             let sql = "INSERT INTO `tb_empleados` SET ?";
            //let sql = "INSERT INTO `ct_tipos_documentos`(`tipo_documento`, `iniciales_tip_doc`) "
            //+ " VALUES (" + connection.escape(TipDocData.tipo_documento) + ", " + connection.escape(TipDocData.iniciales_tip_doc) + ");"
            console.log("aqui "+sql)

            connection.query(sql, TipEmpleadoData, function(error, result)
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
    tipEmpleadoModel.updateTipEmpleado = function (TipEmpleadoData, callback)
{
    // console.log(" 32 tal ");
    if (connection)
    {
        let sql = "UPDATE `tb_empleados` SET"
        +" Id_catalogos_universal = "+ connection.escape (TipEmpleadoData.Id_catalogos_universal)
        +", nombre1_empleados = "+ connection.escape(TipEmpleadoData.nombre1_empleados)
        +", nombre2_empleados = "+ connection.escape(TipEmpleadoData.nombre2_empleados)
        +", apellido1_empleados = "+ connection.escape(TipEmpleadoData.apellido1_empleados)
        +", apellido2_empleados = "+connection.escape(TipEmpleadoData.apellido2_empleados)
        +", tipodocu_empleados = "+connection.escape(TipEmpleadoData.tipodocu_empleados)
        +", numdoc_empleados ="+connection.escape(TipEmpleadoData.numdoc_empleados)
        +", cargo_empleados ="+connection.escape(TipEmpleadoData.cargo_empleados) 
        +" WHERE Id_empleados = "
        + connection.escape(TipEmpleadoData.Id_empleados)+";";

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
    

module.exports = tipEmpleadoModel;
