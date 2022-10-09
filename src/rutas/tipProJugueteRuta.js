const express = require ('express');
const router = express.Router();

let tipProJugueteModel = require('../modelos/tipProJugueteModel');

module.exports = function()
{
    router.get("/", function (req, res)
    {
        tipProJugueteModel.getTipProJuguetes(function(error, data)
        {
            res.status(200).json(data);
        });
        
    });

     //////////////////////////////////////////////////////////////////////////////
     // ID

    router.get("/:id", function (req, res)
    {
        let id = req.params.id;

        if(!isNaN(id))
        {
            tipProJugueteModel.getTipProJuguetei(id, function (error, data)
            
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
     // fechas

     router.get("/:Finicio/:Ffinal", function (req, res)
     {
         let Finicio = req.params.Finicio;
         let Ffinal = req.params.Ffinal;
         if(!isNaN(Finicio))
         {
             tipProJugueteModel.getTipProJuguete(Ffinal,Finicio, function (error, data)
             
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
        let TipProJugueteData =
        {
            Id_produccion: null,
            Id_empleados: req.body.Id_empleados,
            Id_juguetes: req.body.Id_juguetes,
            Fecha_produccion: req.body.Fecha_produccion,
            Detalles_produccion: req.body.Detalles_produccion,
            Errores_produccion: req.body.Errores_produccion,
            Cantidad_producida: req.body.Cantidad_producida,
            Material_Utilizado: req.body.Material_Utilizado
        };

        tipProJugueteModel.insertTipProJuguete(TipProJugueteData, function(error, data)
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
        let TipProJugueteData =
        { 
            Id_produccion: req.body.Id_produccion,
            Id_empleados: req.body.Id_empleados,
            Id_juguetes: req.body.Id_juguetes,
            Fecha_produccion: req.body.Fecha_produccion,
            Detalles_produccion: req.body.Detalles_produccion,
            Errores_produccion: req.body.Errores_produccion,
            Cantidad_producida: req.body.Cantidad_producida,
            Material_Utilizado: req.body.Material_Utilizado
        };

    //usamos la funcion para actualizar
    tipProJugueteModel.updateTipProJuguete(TipProJugueteData, function (error, data)
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

