const connection = require('../conexion');


let tipJuguetesModel = {};


//obtener todos los tipos de documentos

tipJuguetesModel.getTipJuguetes= function (callback)
{
    if(connection)
    {
        /*let sql = "SELECT"+ 
        "`Id_juguetes`, "+
        "`tipo_producto`," +
        "`Nombre_juguete`, "+
        "`tama_juguete`, "+
        "`color_jugete`" +
        "FROM `tb_juguetes`"+
        "ORDER BY `Nombre_juguete`";*/

       let sql = "SELECT "
       +" j.`Id_juguetes`, "
       +" D.`denominacion_universal` AS 'Tipo Jugete',"
       +" j.`Nombre_juguete`, "
       +" j.`tama_juguete`, "
       +" a.`denominacion_universal` AS 'Color Jugete' "      
       + " FROM `tb_juguetes` AS j"
       + " INNER JOIN `ct_catalogo_universal` AS D ON j.`tipo_producto` = D.`Id_catalogo_universal` "
       + " INNER JOIN `ct_catalogo_universal` AS a ON j.`color_jugete` = a.`Id_catalogo_universal` "
       + " ORDER BY `Nombre_juguete` "

      
       
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
    tipJuguetesModel.getTipJuguete = function (id, callback)
    {
        if(connection)
        {
            /*let sql = "SELECT"+ 
            "`Id_juguetes`, "+
            "`tipo_producto`," +
            "`Nombre_juguete`, "+
            "`tama_juguete`, "+
            "`color_jugete`" +
            "FROM `tb_juguetes`"+
            "where `Id_juguetes` = "*/
            let sql = "SELECT "
            +" j.`Id_juguetes`, "
            +" D.`denominacion_universal` AS 'Tipo Jugete',"
            +" j.`Nombre_juguete`, "
            +" j.`tama_juguete`, "
            +" a.`denominacion_universal` AS 'Color Jugete' "           
            +" FROM `tb_juguetes` AS j"
            +" INNER JOIN `ct_catalogo_universal` AS D ON j.`tipo_producto` = D.`Id_catalogo_universal` "
            +" INNER JOIN `ct_catalogo_universal` AS a ON j.`color_jugete` = a.`Id_catalogo_universal` "
            +" where `Id_juguetes`= "
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

    tipJuguetesModel.insertTipJuguete = function (TipjuguetesData, callback)
    {
        if(connection)
        {
             let sql = "INSERT INTO `tb_juguetes` SET ?";
            //let sql = "INSERT INTO `ct_tipos_documentos`(`tipo_documento`, `iniciales_tip_doc`) "
            //+ " VALUES (" + connection.escape(TipDocData.tipo_documento) + ", " + connection.escape(TipDocData.iniciales_tip_doc) + ");"
            console.log("aqui "+sql)

            connection.query(sql, TipjuguetesData, function(error, result)
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
    
    tipJuguetesModel.updateTipJuguete = function (TipjuguetesData, callback)
{
     console.log(" 32 tal ");
     console.log(" acá vamos   24 - " + TipjuguetesData.tipo_producto +"  --  " +TipjuguetesData.Nombre_juguete);
    if (connection)
    {
        let sql = "UPDATE `tb_juguetes` SET"+ 
          " `tipo_producto`= "+ connection.escape(TipjuguetesData.tipo_producto)+
        ", `Nombre_juguete`= "+ connection.escape(TipjuguetesData.Nombre_juguete)+
        ", `tama_juguete`= "+ connection.escape(TipjuguetesData.tama_juguete)+
        ", `color_jugete`= " + connection.escape(TipjuguetesData.color_jugete)+
        " WHERE `Id_juguetes`= "+
        connection.escape(TipjuguetesData.Id_juguetes)+";";

        console.log(" 37 tal "+ sql);
        

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
    

module.exports = tipJuguetesModel;
