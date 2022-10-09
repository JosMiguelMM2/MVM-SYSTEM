const connection = require('../conexion');

let tipProJugueteModel = {};

//obtener todos los tipos de documentos


tipProJugueteModel.getTipProJuguetes = function(callback)
{
    if(connection)
    {   
        /*let sql = "SELECT `Id_produccion`," 
        +" `Id_empleados`,"
        +" `Id_juguetes`, "
        +" `Fecha_produccion`,"
        +" `Detalles_produccion`," 
        +" `Errores_produccion`,"
        +" `Cantidad_producida`," 
        +" `Material_Utilizado`"
        +" FROM `th_produccion_juguetes` "
        +" ORDER BY `Cantidad_producida` DESC ";
        */
        let sql = "SELECT " 
        +" pj.`Id_produccion`,"  
        +" CONCAT(h.nombre1_empleados, ' ',"
        +" i.apellido1_empleados) as 'Nombre Encargado',"
        +" j.`Nombre_juguete` as 'nombre jugete',"
        +" pj.`Cantidad_producida`,"
        +" pj.`Fecha_produccion`, "
        +" pj.`Detalles_produccion`,"
        +" pj.`Errores_produccion`, "
        +" pj.`Material_Utilizado` "
        +" FROM `th_produccion_juguetes` AS pj"
        +" INNER JOIN `tb_empleados` AS h ON pj.`Id_empleados` = h.`Id_empleados`"
        +" INNER JOIN `tb_empleados` AS i ON pj.`Id_empleados` = i.`Id_empleados`"
        +" INNER JOIN `tb_juguetes` AS j ON pj.`Id_empleados` = j.`Id_juguetes`"
        +" order by `Cantidad_producida`";
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

    tipProJugueteModel.getTipProJuguetei = function (id, callback)
    {
        if(connection)
        {
            /*let sql = "SELECT `Id_contactos`, `Id_empleados`, `Tipo_contacto`, `Dato_contacto` FROM `am_contactos` WHERE Id_contactos = "*/
            /*let sql = "SELECT " 
            +" `Id_empleados`,"
            +" `Id_juguetes`, "
            +" `Fecha_produccion`,"
            +" `Detalles_produccion`," 
            +" `Errores_produccion`,"
            +" `Cantidad_producida`," 
            +" `Material_Utilizado`"
            +" FROM `th_produccion_juguetes` "
            +" WHERE Id_produccion = "
            + connection.escape(id) +";";
            */
            let sql = "SELECT " 
        +" pj.`Id_produccion`,"  
        +" CONCAT(h.nombre1_empleados, ' ',"
        +" i.apellido1_empleados) as 'Nombre Encargado',"
        +" j.`Nombre_juguete` as 'nombre jugete',"
        +" pj.`Cantidad_producida`,"
        +" pj.`Fecha_produccion`, "
        +" pj.`Detalles_produccion`,"
        +" pj.`Errores_produccion`, "
        +" pj.`Material_Utilizado` "
        +" FROM `th_produccion_juguetes` AS pj"
        +" INNER JOIN `tb_empleados` AS h ON pj.`Id_empleados` = h.`Id_empleados`"
        +" INNER JOIN `tb_empleados` AS i ON pj.`Id_empleados` = i.`Id_empleados`"
        +" INNER JOIN `tb_juguetes` AS j ON pj.`Id_empleados` = j.`Id_juguetes`"
        +" WHERE Id_produccion = "
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
 
 // obtener Informe por fechas cantidad de juguetes producidos

 tipProJugueteModel.getTipProJuguete = function (Finicio,Ffinal, callback)
 {
     if(connection)
     {
        
         let sql = "SELECT " 
        +" e.`Id_juguetes`," 
        +" d.`Nombre_juguete`,"  
        +" COUNT(e.`Cantidad_producida`) As 'Cantidad Pedidos',"
        +" SUM( `Cantidad_producida`) AS 'total producido'"
        +" FROM `th_produccion_juguetes` AS e "
        +" INNER JOIN `tb_juguetes` AS d ON e.`Id_juguetes`= d.`Id_juguetes`"
        +" WHERE e.`Fecha_produccion` BETWEEN "+"'"+ connection.escape(Finicio)+"'"+" AND " +"'"+ connection.escape(Ffinal)+"'"
        +" GROUP BY `Id_juguetes`;"
            
         //console.log id
          console.log("31 tal ")

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
    tipProJugueteModel.insertTipProJuguete = function (TipProJugueteData, callback)
    {
        if(connection)
        {
             let sql = "INSERT INTO th_produccion_juguetes SET ?";
            //let sql = "INSERT INTO `ct_tipos_documentos`(`tipo_documento`, `iniciales_tip_doc`) "
            //+ " VALUES (" + connection.escape(TipDocData.tipo_documento) + ", " + connection.escape(TipDocData.iniciales_tip_doc) + ");"
            console.log("aqui "+sql)

            connection.query(sql, TipProJugueteData, function(error, result)
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
    tipProJugueteModel.updateTipProJuguete = function (TipProJugueteData, callback)
{
    // console.log(" 32 tal ");
    if (connection)
    { 
        let sql = "UPDATE `th_produccion_juguetes` SET"
        +" `Id_empleados`= "+ connection.escape(TipProJugueteData.Id_empleados)
        +", `Id_juguetes`= "+ connection.escape(TipProJugueteData.Id_juguetes)
        +", `Fecha_produccion`= "+ connection.escape(TipProJugueteData.Fecha_produccion)
        +", `Detalles_produccion`= "+ connection.escape(TipProJugueteData.Detalles_produccion)
        +", `Errores_produccion`= "+ connection.escape(TipProJugueteData.Errores_produccion)
        +", `Cantidad_producida`= " + connection.escape(TipProJugueteData.Cantidad_producida)
        +", `Material_Utilizado` = "+ connection.escape(TipProJugueteData.Material_Utilizado)
        +" WHERE Id_produccion = "
        + connection.escape(TipProJugueteData.Id_produccion)+";";
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
    

module.exports = tipProJugueteModel;
