
const express = require('express');
const router = express.Router();

var  tipEmpleadoModel = require('../modelos/tipEmpleadoModel');

module.exports = function()
{
    router.get("/", function (req, res)
    {
        tipEmpleadoModel.getTipEmpleados(function(error, data)
        {
            res.status(200).json(data);
        });
        
    });

     //////////////////////////////////////////////////////////////////////////////
     // ID

    router.get("/:id", function (req, res)
    {
        var id = req.params.id;

        if(!isNaN(id))
        {
            tipEmpleadoModel.getTipEmpleado(id, function (error, data)
            {
            if(typeof data !== 'undefined' && data.length > 0)
            {
                res.status(200).json(data);
            }
            else{
                res.json(404,
                    {
                        "msg": "registro no existe"
                    });
            }
            });
        }
            else // si hay error
            {
                res.status(500).json({"msg": "error"});
            }

    });

 //////////////////////////////////////////////////////////////////////////////
    // añadir

    router.post("/", function (req, res)
    {
        var TipEmpleadoData =
        {
            Id_empleados: null,
            Id_catalogos_universal: req.body.Id_catalogos_universal,
            nombre1_empleados: req.body.nombre1_empleados,
            nombre2_empleados: req.body.nombre2_empleados,
            apellido1_empleados: req.body.apellido1_empleados,
            apellido2_empleados: req.body.apellido2_empleados,
            tipodocu_empleados: req.body.tipodocu_empleados,
            numdoc_empleados: req.body.numdoc_empleados,
            cargo_empleados: req.body.cargo_empleados
        };

        tipEmpleadoModel.insertTipEmpleado(TipEmpleadoData, function(error, data)
        {
            if(data)
            {
                res.status(200).json(data);
            }
            else
            {
                res.status(500).send({error: "boo:("});
            }
        });
    });
 //////////////////////////////////////////////////////////////////////////////
//Muestra y captura los datos para el mÃ©todo CRUL update (actualizar), usando el verbo put


router.put("/", function (req, res)
    {
    //almacenamos los datos de la peticiÃn en un objeto
    //console.log(" 38");

        var TipEmpleadoData =
        {
            Id_empleados: req.body.Id_empleados,
            Id_catalogos_universal: req.body.Id_catalogos_universal,
            nombre1_empleados: req.body.nombre1_empleados,
            nombre2_empleados: req.body.nombre2_empleados,
            apellido1_empleados: req.body.apellido1_empleados,
            apellido2_empleados: req.body.apellido2_empleados,
            tipodocu_empleados: req.body.tipodocu_empleados,
            numdoc_empleados: req.body.numdoc_empleados,
            cargo_empleados: req.body.cargo_empleados
        };

    //usamos la funcion para actualizar
    tipEmpleadoModel.updateTipEmpleado(TipEmpleadoData, function (error, data)
    {
    //se muestra el mensaje correspondiente
        if (data && data.msg)
            { 
                res.status(200).json(data);
            }
        else    
            { 
                res.status(500).send(
            {
                error: "boo:("
        });
    }
    });
});

    return router;
}
