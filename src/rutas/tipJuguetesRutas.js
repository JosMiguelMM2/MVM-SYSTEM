const express = require ('express');
const router = express.Router();

let tipJuguetesModel = require('../modelos/tipJuguetesModel');

module.exports = function()
{
    router.get("/", function (req, res)
    {
        tipJuguetesModel.getTipJuguetes(function(error, data)
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
            tipJuguet0000000000000esModel.getTipJuguete(id, function(error, data)
            
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
        let TipjuguetesData =
        {
            Id_juguetes: null,
            tipo_producto: req.body.tipo_producto,
            Nombre_juguete: req.body.Nombre_juguete,
            tama_juguete: req.body.tama_juguete,
            color_jugete: req.body.color_jugete
        };

        tipJuguetesModel.insertTipJuguete(TipjuguetesData, function(error, data)
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
    console.log(" 38");
        let TipjuguetesData =
        { 
            Id_juguetes: req.body.Id_juguetes,
            tipo_producto: req.body.tipo_producto,
            Nombre_juguete: req.body.Nombre_juguete,
            tama_juguete: req.body.tama_juguete,
            color_jugete: req.body.color_jugete
        };


console.log(" acá vamos   39 - " + TipjuguetesData.tipo_producto +"  --  " +TipjuguetesData.Nombre_juguete);
    //usamos la funcion para actualizar
    tipJuguetesModel.updateTipJuguete(TipjuguetesData, function (error, data)
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
//arreglo
