const connection = require('../conexion');

let tipProJugueteModel = {};

//obtener todos los tipos de documentos


tipProJugueteModel.getTipProJuguetes = function (callback) {
    if (connection) {
        /*let sql = "SELECT `Id_produccion`, "
        +" `empleados_Produccion`, "
        +" `juguetes_Produccion`," 
        +" `Fecha_produccion`," 
        +" `Detalles_produccion`,"
        +" `Errores_produccion`, "
        +" `Cantidad_producida`, "
        +" `Material_Utilizado`"
        +" FROM `th_produccion_juguetes`"
        +" ORDER BY `Cantidad_producida` DESC"
        */
        let sql = "SELECT "
            + " pj.`Id_produccion`,"
            + " CONCAT(h.nombre1_empleados, ' ',h.nombre2_empleados, ' ',"
            + " h.apellido1_empleados,' ',h.apellido2_empleados) as 'Nombre_Encargado',"
            + " j.`Nombre_juguete` as 'nombre_juguete',"
            + " pj.`Cantidad_producida`,"
            + " pj.`Fecha_produccion`, "
            + " pj.`Detalles_produccion`,"
            + " pj.`Errores_produccion`, "
            + " pj.Material_Utilizado"
            + " FROM `th_produccion_juguetes` AS pj"
            + " INNER JOIN `tb_empleados` AS h ON pj.`empleados_Produccion` = h.`Id_empleados`"
            + " INNER JOIN `tb_juguetes` AS j ON pj.`juguetes_Produccion` = j.`Id_juguetes`"
            + " order by `Id_produccion`";
        connection.query(sql, function (error, rows) {
            if (error) {
                throw error;
            } else {
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

tipProJugueteModel.getTipProJuguetei = function (id, callback) {
    if (connection) {
        /*let sql = "SELECT `Id_contactos`, `Id_empleados`, `Tipo_contacto`, `Dato_contacto` FROM `am_contactos` WHERE Id_contactos = "*/
        /*let sql = "SELECT  `Id_produccion`,"
        +" `empleados_Produccion`, "
        +" `juguetes_Produccion`,"
        +" `Fecha_produccion`,"
        +" `Detalles_produccion`,"
        +" `Errores_produccion`, "
        +" `Cantidad_producida`, "
        +" `Material_Utilizado`"
        +" FROM `th_produccion_juguetes`"
        +" WHERE Id_produccion = "
        + connection.escape(id) +";";*/

        let sql = "SELECT "
            + " pj.`Id_produccion`,"
            + " CONCAT(h.nombre1_empleados, ' ',h.nombre2_empleados, ' ',"
            + " h.apellido1_empleados,' ',h.apellido2_empleados) as 'Nombre_Encargado',"
            + " j.`Nombre_juguete` as 'nombre_juguete',"
            + " pj.`Cantidad_producida`,"
            + " pj.`Fecha_produccion`, "
            + " pj.`Detalles_produccion`,"
            + " pj.`Errores_produccion`, "
            + " pj.Material_Utilizado"
            + " FROM `th_produccion_juguetes` AS pj"
            + " INNER JOIN `tb_empleados` AS h ON pj.`empleados_Produccion` = h.`Id_empleados`"
            + " INNER JOIN `tb_juguetes` AS j ON pj.`juguetes_Produccion` = j.`Id_juguetes`"
            + " WHERE Id_produccion = "
            + connection.escape(id) + ";";
        // console.log id
        // console.log("31 tal ";)

        connection.query(sql, function (error, row) {
            if (error) {
                throw error;
            } else {
                callback(null, row);
                //comvierte las filas Json a una cadena de texto para Angular
                //callback(null, JSON.stringify(rows));
            }
        });
    }
}

//////////////////////////////////////////////////////////////////////////////

// obtener Informe por fechas cantidad de juguetes producidos

tipProJugueteModel.getTipProJuguete = function (id,Finicio, Ffinal, callback) {
    console.log("aca 258 " + Finicio + " - " + Ffinal + "- " + id);
    if (connection) {

        let sql = " SELECT e.Id_produccion,"
            + " e.Fecha_produccion AS 'Fecha',"
            + " e.`juguetes_Produccion` AS 'ID_juguete',"
            + " CONCAT ( a.denominacion_universal ,' ',"
            + "       `Nombre_juguete`,' ',"
            + "       c.denominacion_universal ) AS 'Juguete' ,"
            + " CONCAT ( k.nombre1_empleados, ' ',"
            + "       b.nombre2_empleados, ' ',"
            + "       g.apellido2_empleados, ' ',"
            + "       h.apellido2_empleados ) AS 'Persona',"
            + "  e.Errores_produccion AS 'Errores', "
            + "  e.Cantidad_producida AS 'Total_Creados',"
            + " ( e.Cantidad_producida - e.Errores_produccion ) AS 'Total_Servibles' "
            + " FROM `th_produccion_juguetes` AS e"
            + " INNER JOIN `tb_juguetes` AS d ON e.`juguetes_Produccion`= d.`Id_juguetes`"
            + " INNER JOIN `ct_catalogo_universal` AS a ON a.Id_catalogo_universal = d.tipo_producto "
            + " INNER JOIN `ct_catalogo_universal` AS c ON c.Id_catalogo_universal = d.color_jugete "
            + " INNER JOIN `tb_empleados` AS k ON e.empleados_Produccion = k.`Id_empleados`"
            + " INNER JOIN `tb_empleados` AS b ON e.empleados_Produccion = b.`Id_empleados`"
            + " INNER JOIN `tb_empleados` AS g ON e.empleados_Produccion = g.`Id_empleados`"
            + " INNER JOIN `tb_empleados` AS h ON e.empleados_Produccion = h.`Id_empleados`"
            + " WHERE `juguetes_Produccion` = " + connection.escape(id)
            + " AND e.`Fecha_produccion` BETWEEN " + connection.escape(Finicio) + "AND " + connection.escape(Ffinal) + ";";
        //console.log id
        console.log("31 tal ")

        connection.query(sql, function (error, row) {
            if (error) {
                throw error;
            } else {
                callback(null, row);
                //comvierte las filas Json a una cadena de texto para Angular
                //callback(null, JSON.stringify(rows));
            }
        });
    }
}
//-----------------------filtra por fechas--------
tipProJugueteModel.getTipProJuguetef = function (Finicio, Ffinal, callback) {
    console.log("aca 258 " + Finicio + " - " + Ffinal);
    if (connection) {

        let sql = " SELECT e.Id_produccion,"
            + " e.Fecha_produccion AS 'Fecha',"
            + " e.`juguetes_Produccion` AS 'ID juguete',"
            + " CONCAT ( a.denominacion_universal ,' ',"
            + "       `Nombre_juguete`,' ',"
            + "       c.denominacion_universal ) AS 'Juguete' ,"
            + " CONCAT ( k.nombre1_empleados, ' ',"
            + "       b.nombre2_empleados, ' ',"
            + "       g.apellido2_empleados, ' ',"
            + "       h.apellido2_empleados ) AS 'Persona',"
            + "  e.Errores_produccion AS 'Errores', "
            + "  e.Cantidad_producida AS 'Total Creados',"
            + " ( e.Cantidad_producida - e.Errores_produccion ) AS 'Total Servibles' "
            + " FROM `th_produccion_juguetes` AS e"
            + " INNER JOIN `tb_juguetes` AS d ON e.`juguetes_Produccion`= d.`Id_juguetes`"
            + " INNER JOIN `ct_catalogo_universal` AS a ON a.Id_catalogo_universal = d.tipo_producto "
            + " INNER JOIN `ct_catalogo_universal` AS c ON c.Id_catalogo_universal = d.color_jugete "
            + " INNER JOIN `tb_empleados` AS k ON e.empleados_Produccion = k.`Id_empleados`"
            + " INNER JOIN `tb_empleados` AS b ON e.empleados_Produccion = b.`Id_empleados`"
            + " INNER JOIN `tb_empleados` AS g ON e.empleados_Produccion = g.`Id_empleados`"
            + " INNER JOIN `tb_empleados` AS h ON e.empleados_Produccion = h.`Id_empleados`"
            + " WHERE e.`Fecha_produccion` BETWEEN " + connection.escape(Finicio) + "AND " + connection.escape(Ffinal) + ";";
        //console.log id
        console.log("31 tal ")

        connection.query(sql, function (error, row) {
            if (error) {
                throw error;
            } else {
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
tipProJugueteModel.insertTipProJuguete = function (TipProJugueteData, callback) {
    if (connection) {
        let sql = "INSERT INTO th_produccion_juguetes SET ?";
        //let sql = "INSERT INTO `ct_tipos_documentos`(`tipo_documento`, `iniciales_tip_doc`) "
        //+ " VALUES (" + connection.escape(TipDocData.tipo_documento) + ", " + connection.escape(TipDocData.iniciales_tip_doc) + ");"
        console.log("aqui " + sql)

        connection.query(sql, TipProJugueteData, function (error, result) {
            if (error) {
                throw error;
            } else {
                callback(null, {"msg": "Registro insertado"});
            }
        });
    }
}

//actualizar un tipo de documento
//TipDocModel.updateTipDoc = function (TipDocData, callback)
tipProJugueteModel.updateTipProJuguete = function (TipProJugueteData, callback) {
    // console.log(" 32 tal ");
    if (connection) {
        let sql = "UPDATE `th_produccion_juguetes` SET"
            + " `empleados_Produccion`= " + connection.escape(TipProJugueteData.empleados_Produccion)
            + ", `juguetes_Produccion`= " + connection.escape(TipProJugueteData.juguetes_Produccion)
            + ", `Fecha_produccion`= " + connection.escape(TipProJugueteData.Fecha_produccion)
            + ", `Detalles_produccion`= " + connection.escape(TipProJugueteData.Detalles_produccion)
            + ", `Errores_produccion`= " + connection.escape(TipProJugueteData.Errores_produccion)
            + ", `Cantidad_producida`= " + connection.escape(TipProJugueteData.Cantidad_producida)
            + ", `Material_Utilizado` = " + connection.escape(TipProJugueteData.Material_Utilizado)
            + " WHERE Id_produccion = "
            + connection.escape(TipProJugueteData.Id_produccion) + ";";
        //console.log(" 37 tal "+ sql);

        connection.query(sql, function (error, result) {
            //se muestra el mensaje correspondiente
            if (error) {
                throw error;
            } else {
                callback(null, {"msg": "Registro Actualizado"});
            }
        });
    }
}


module.exports = tipProJugueteModel;
