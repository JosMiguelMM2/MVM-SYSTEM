
const express = require ('express');
const router = express.Router();

let tipEmpaqueModel = require('../modelos/tipEmpaqueModel');

module.exports = function()
{
    router.get("/", function (req, res)
    {
        tipEmpaqueModel.getTipEmpaques(function(error, data)
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
            tipEmpaqueModel.getTipEmpaque(id, function (error, data)
            
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
        let TipEmpaqueData =
        {
            Id_Empaque: null,
            Tipo_Empaque: req.body.Tipo_Empaque,
            Juguete_Empaque: req.body.Juguete_Empaque,
            Empleado_Empaque: req.body.Empleado_Empaque
        };

        tipEmpaqueModel.insertTipEmpaque(TipEmpaqueData, function(error, data)
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
        let TipEmpaqueData =
        { 
            Id_Empaque: req.body.Id_Empaque,
            Tipo_Empaque: req.body.Tipo_Empaque,
            Juguete_Empaque: req.body.Juguete_Empaque,
            Empleado_Empaque: req.body.Empleado_Empaque
        };

    //usamos la funcion para actualizar
    tipEmpaqueModel.updateTipEmpaque(TipEmpaqueData, function (error, data)
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

