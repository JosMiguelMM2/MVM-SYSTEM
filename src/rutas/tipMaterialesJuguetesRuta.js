const express = require ('express');
const router = express.Router();

let tipMaterialJugueteModel = require('../modelos/tipMaterialJugueteModel');

module.exports = function()
{
    router.get("/", function (req, res)
    {
        tipMaterialJugueteModel.getTipMaterialJuguetes(function(error, data)
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
            tipMaterialJugueteModel.getTipMaterialJuguete(id, function (error, data)
            
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
        let TipMaterialJugueteData =
        {
            Id_materiales_productos:null,
            Id_juguetes: req.body.Id_juguetes,
            Id_material: req.body.Id_material,
            Descripcion: req.body.Descripcion,
            cantidad: req.body.cantidad
        };

        tipMaterialJugueteModel.insertTipMaterialJuguete(TipMaterialJugueteData, function(error, data)
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
        let TipMaterialJugueteData =
        { 
            Id_materiales_productos: req.body.Id_material,
            Id_juguetes: req.body.Id_juguetes,
            Id_material: req.body.Id_material,
            Descripcion: req.body.Descripcion,
            cantidad: req.body.cantidad
        };

    //usamos la funcion para actualizar
    tipMaterialJugueteModel.updateTipMateralJuguete(TipMaterialJugueteData, function (error, data)
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