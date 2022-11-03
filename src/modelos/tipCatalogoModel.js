const connection = require('../conexion');

let tipCatalogoModel = {};

//obtener todos los tipos de documentos


tipCatalogoModel.getTipCatalogos = function (callback)
{
    if(connection)
    {   
      /* let sql ="SELECT"
       +"`Id_catalogo_universal`,"
       +"`denominacion_universal`,"
       +"`catalogo_universal`"
       +"FROM `ct_catalogo_universal`" 
       +"ORDER BY `catalogo_universal`"
*/
       let sql = "SELECT " 
        +" cu.`Id_catalogo_universal`,"
        +" cu.`denominacion_universal`,"
        +" a.`denominacion_universal` AS ' Pertenece_a '"
        +" FROM `ct_catalogo_universal` AS cu "
        +" INNER JOIN `ct_catalogo_universal` AS a ON cu.catalogo_universal = a.Id_catalogo_universal"
        +" ORDER BY cu.`catalogo_universal`"
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
 // uno 
 
tipCatalogoModel.getTipCatalogosa = function (cts, callback)
{
    if(connection)
    {   
      /* let sql ="SELECT"
       +"`Id_catalogo_universal`,"
       +"`denominacion_universal`,"
       +"`catalogo_universal`"
       +"FROM `ct_catalogo_universal`" 
       +"ORDER BY `catalogo_universal`"
*/
       let sql = "SELECT " 
        +" cu.`Id_catalogo_universal`,"
        +" cu.`denominacion_universal`,"
        +" a.`denominacion_universal` AS ' Pertenece_a '"
        +" FROM `ct_catalogo_universal` AS cu "
        +" INNER JOIN `ct_catalogo_universal` AS a ON cu.catalogo_universal = a.Id_catalogo_universal"
        +" WHERE cu.`catalogo_universal`= " +connection.escape(cts) +";";
        +" ORDER BY cu.`catalogo_universal`"
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
 
 // obtener contacto por tipo catalogo e id 

 tipCatalogoModel.getTipCatalogo = function (cts, id, callback)
    {
        if(connection)
        {
            /*let sql = "SELECT"
            +"`Id_catalogo_universal`,"
            +"`denominacion_universal`,"
            +"`catalogo_universal`"
            +"FROM `ct_catalogo_universal`" 
            +"WHERE `Id_catalogo_universal`= "*/
            let sql ="SELECT " 
            +" cu.`Id_catalogo_universal`,"
            +" cu.`denominacion_universal`,"
            +" a.`denominacion_universal` AS ' Pertenece_a ',"
            +" cu.`catalogo_universal`"
            +" FROM `ct_catalogo_universal` AS cu "
            +" INNER JOIN `ct_catalogo_universal` AS a ON cu.catalogo_universal = a.Id_catalogo_universal"
            +" WHERE cu.`catalogo_universal`= " + connection.escape(cts) + " AND cu.`Id_catalogo_universal` = "
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

    tipCatalogoModel.insertTipCatalogo = function (TipCatalogoData, callback)
    {
        if(connection)
        {
             let sql = "INSERT INTO ct_catalogo_universal SET ?";
            //let sql = "INSERT INTO `ct_tipos_documentos`(`tipo_documento`, `iniciales_tip_doc`) "
            //+ " VALUES (" + connection.escape(TipDocData.tipo_documento) + ", " + connection.escape(TipDocData.iniciales_tip_doc) + ");"
            console.log("aqui "+sql)

            connection.query(sql, TipCatalogoData, function(error, result)
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
    tipCatalogoModel.updateTipCatalogo = function (TipCatalogoData, callback)
{
    // console.log(" 32 tal ");
    if (connection)
    {
        let sql = "UPDATE `ct_catalogo_universal` SET "
        + " denominacion_universal = "+ connection.escape(TipCatalogoData.denominacion_universal)
        + ", catalogo_universal = "+ connection.escape(TipCatalogoData.catalogo_universal)
        + " WHERE Id_catalogo_universal = "
        + connection.escape(TipCatalogoData.Id_catalogo_universal)+";";
      
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
    

module.exports = tipCatalogoModel;