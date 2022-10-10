//informe 2

SELECT p.Id_material AS 'ID DEL MATERIAL',
	   pj.Fecha_produccion,
       p.cantidad_peso,
       CONCAT( 'Material ',  p.nombre_material, ', cantidad usada  ', pj.Material_Utilizado, ', 
              detalles de produccion ', pj.Detalles_produccion ) AS 'Datos material',
       CONCAT('Color ', ca.denominacion_universal, ' clase material ', caq.denominacion_universal ) AS 'Material'
      
	FROM `tb_materiales` AS p
    INNER JOIN `th_produccion_juguetes` AS pj  ON p.Id_material= pj.Id_produccion
    INNER JOIN `ct_catalogo_universal` AS ca ON p.color_material=ca.Id_catalogo_universal
    INNER JOIN `ct_catalogo_universal` AS caq ON p.clase_material=caq.Id_catalogo_universal
    WHERE 
    pj.Fecha_produccion BETWEEN '2002-05-01' AND '2060-08-05';


consulta de informe 1 


//informe 1
SELECT e.Id_produccion,
        e.Fecha_produccion AS 'Fecha',
        e.`juguetes_Produccion` AS 'ID juguete',
        CONCAT ( a.denominacion_universal ,' ',
             `Nombre_juguete`,' ',
              c.denominacion_universal ) AS 'Juguete' ,
        CONCAT ( k.nombre1_empleados, ' ',
              b.nombre2_empleados, ' ',
              g.apellido2_empleados, ' ',
              h.apellido2_empleados ) AS 'Persona',
        e.Errores_produccion AS 'Errores', 
         e.Cantidad_producida AS 'Total Creados',
        ( e.Cantidad_producida - e.Errores_produccion ) AS 'Total Servibles' 
        FROM `th_produccion_juguetes` AS e
        INNER JOIN `tb_juguetes` AS d ON e.`juguetes_Produccion`= d.`Id_juguetes`
        INNER JOIN `ct_catalogo_universal` AS a ON a.Id_catalogo_universal = d.tipo_producto 
        INNER JOIN `ct_catalogo_universal` AS c ON c.Id_catalogo_universal = d.color_jugete 
        INNER JOIN `tb_empleados` AS k ON e.empleados_Produccion = k.`Id_empleados`
        INNER JOIN `tb_empleados` AS b ON e.empleados_Produccion = b.`Id_empleados`
        INNER JOIN `tb_empleados` AS g ON e.empleados_Produccion = g.`Id_empleados`
        INNER JOIN `tb_empleados` AS h ON e.empleados_Produccion = h.`Id_empleados`
        WHERE `juguetes_Produccion` = d.Id_juguetes
        AND e.`Fecha_produccion` BETWEEN '2002-05-01' AND '2060-08-05';



Catalogo 
--
SELECT 
    cu.`Id_catalogo_universal`,
    cu.`denominacion_universal`,
    a.`denominacion_universal` AS ' Pertenece a '
FROM `ct_catalogo_universal` AS cu 
INNER JOIN `ct_catalogo_universal` AS a ON cu.catalogo_universal = a.Id_catalogo_universal
ORDER BY cu.`catalogo_universal`
------------------------------------------------------------
Organizacion de Empleados MySQL
---------------------------------------------
SELECT
         e.`Id_empleados`,
         D.`denominacion_universal` AS 'Tipo Documento',
         CONCAT( e.`nombre1_empleados`, ' ',
        e.`nombre2_empleados`,  ' ',
        e.`apellido1_empleados`, ' ',
        e.`apellido2_empleados`) AS 'Persona',
        e.`numdoc_empleados` AS 'Numero De Documento',
        c.`denominacion_universal` AS 'Cargo Empleado'
        FROM `tb_empleados` AS e
	INNER JOIN `ct_catalogo_universal` AS c ON e.`cargo_empleados` = c.`Id_catalogo_universal`
        INNER JOIN `ct_catalogo_universal` AS D ON e.`Id_catalogos_universal` = D.`Id_catalogo_universal`
        ORDER BY `nombre1_empleados`;
//WHERE `Id_empleados`=3

-----------------------------------------------------------------------------------
----- Contactos 
SELECT 
        ct.`Id_contactos`,
        g.`tipodocu_empleados` AS 'Numero Documento',
	CONCAT(h.nombre1_empleados, ' ',
    i.apellido1_empleados) as 'Persona',
        D.`denominacion_universal` AS 'Tipo Contacto', 
        ct.`Dato_contacto`
       
FROM `am_contactos` AS ct 
INNER JOIN `ct_catalogo_universal` AS D ON ct.`Tipo_contacto` = D.`Id_catalogo_universal` 
INNER JOIN `tb_empleados` AS g ON ct.`Id_empleados` = g.`Id_empleados`
INNER JOIN `tb_empleados` AS h ON ct.`Id_empleados` = h.`Id_empleados`
INNER JOIN `tb_empleados` AS i ON ct.`Id_empleados` = i.`Id_empleados`
WHERE `Id_contactos` = 2
//ORDER BY h.`nombre1_empleados`
-------------------------------------------------------------------
jugetes
----------------
SELECT 
    j.`Id_juguetes`, 
    D.`denominacion_universal` AS 'Tipo Jugete',
    j.`Nombre_juguete`, 
    j.`tama_juguete`, 
    a.`denominacion_universal` AS 'Tipo Jugete' 
    
FROM `tb_juguetes` AS j
INNER JOIN `ct_catalogo_universal` AS D ON j.`tipo_producto` = D.`Id_catalogo_universal` 
INNER JOIN `ct_catalogo_universal` AS a ON j.`color_jugete` = a.`Id_catalogo_universal` 
ORDER BY `Nombre_juguete`

//where `Id_juguetes`= 3
-----------------------------------------
materiales
---
SELECT 
    `Id_material`, 
    `nombre_material`,
    a.`denominacion_universal` AS 'Clase de material' , 
    c.`denominacion_universal` AS 'color del material' ,
    `cantidad_peso` as 'Peso gr'
     
FROM `tb_materiales` AS M
INNER JOIN `ct_catalogo_universal` AS a ON M.clase_material = a.`Id_catalogo_universal`
INNER JOIN `ct_catalogo_universal` AS c ON M.color_material = c.`Id_catalogo_universal`
ORDER BY `nombre_material`
//WHERE `Id_material` = 3

--------------------------------------------
produccion jugetes
SELECT 
    `Id_produccion`,  
    CONCAT(h.nombre1_empleados, ' ',
    i.apellido1_empleados) as 'Nombre Encargado',
    j.`Nombre_juguete` as 'nombre jugete',
     `Cantidad_producida`,
    `Fecha_produccion`, 
    `Detalles_produccion`,
    `Errores_produccion` 
   
FROM `th_produccion_juguetes` AS pj
INNER JOIN `tb_empleados` AS h ON pj.`Id_empleados` = h.`Id_empleados`
INNER JOIN `tb_empleados` AS i ON pj.`Id_empleados` = i.`Id_empleados`
INNER JOIN `tb_juguetes` AS j ON pj.`Id_empleados` = j.`Id_juguetes`
order by `Cantidad_producida` 
//WHERE  `Id_produccion` = 6
Informe 1 
 SELECT e.Id_produccion,
    e.Fecha_produccion AS 'Fecha',
    e.`juguetes_Produccion` AS 'ID juguete',
    CONCAT ( a.denominacion_universal ," ",
            `Nombre_juguete`," ",
            c.denominacion_universal ) AS 'Juguete' ,
    CONCAT ( k.nombre1_empleados, " ",
             b.nombre2_empleados, " ",
             g.apellido2_empleados, " ",
             h.apellido2_empleados ) AS 'Persona',
    	e.Errores_produccion AS 'Errores', 
        e.Cantidad_producida AS 'Total Creados',
    ( e.Cantidad_producida - e.Errores_produccion ) AS 'Total Servibles' 
    FROM `th_produccion_juguetes` AS e
    INNER JOIN `tb_juguetes` AS d ON e.`juguetes_Produccion`= d.`Id_juguetes`
    INNER JOIN `ct_catalogo_universal` AS a ON a.Id_catalogo_universal = d.tipo_producto 
    INNER JOIN `ct_catalogo_universal` AS c ON c.Id_catalogo_universal = d.color_jugete 
    INNER JOIN `tb_empleados` AS k ON e.empleados_Produccion = k.`Id_empleados`
    INNER JOIN `tb_empleados` AS b ON e.empleados_Produccion = b.`Id_empleados`
    INNER JOIN `tb_empleados` AS g ON e.empleados_Produccion = g.`Id_empleados`
    INNER JOIN `tb_empleados` AS h ON e.empleados_Produccion = h.`Id_empleados`
    WHERE `juguetes_Produccion` = 7 and e.`Fecha_produccion` BETWEEN '2019-12-31' AND '2022-12-31';
Informe 2
   SELECT 
        e.`Id_juguetes`, 
        d.`Nombre_juguete`, 
        SUM( `Material_Utilizado`) AS 'total de materiales' 
    FROM `th_produccion_juguetes` AS e 
    INNER JOIN `tb_juguetes` AS d ON e.`Id_juguetes`= d.`Id_juguetes` 
    WHERE e.`Fecha_produccion` BETWEEN '2013-03-15' AND '2025-08-15' 
    GROUP BY `Id_juguetes`;
----------------------------------------
material jugete
SELECT 
        mj.`Id_materiales_productos`, 
    	j.`Nombre_juguete` as 'nombre jugete',
        n.`nombre_material` as 'Material',
        mj.`Descripcion`,
        mj.`cantidad`
FROM `tp_materiales_juguetes` AS mj
INNER JOIN `tb_juguetes` AS j ON mj.`Id_materiales_productos` = j.`Id_juguetes`
INNER JOIN `tb_materiales` AS n ON mj.`Id_material` = n.`Id_material`
ORDER BY j.`Nombre_juguete` 
//WHERE `Id_materiales_productos` = 6
----------------------------------------------------------------------------------
otra cosa 
SELECT 
`Id_juguetes`, 
 CONCAT ( a.denominacion_universal ," ",
`Nombre_juguete`," ",
b.denominacion_universal , " ",
c.denominacion_universal ) AS 'juguete'
FROM `tb_juguetes` AS j 
INNER JOIN `ct_catalogo_universal` AS a ON a.Id_catalogo_universal = j.tipo_producto
INNER JOIN `ct_catalogo_universal` AS b ON b.Id_catalogo_universal = j.tama_juguete
INNER JOIN `ct_catalogo_universal` AS c ON c.Id_catalogo_universal = j.color_jugete



