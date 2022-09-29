const express = require ('express');
const tipJugetesModel = require('../modelos/tipJuguetesModel');
const router = express.Router();

//let tipJugetesModel = require('../modelos/tipJuguetesModel');

module.exports = function()
{
    router.get("/", function (req, res)
    {
        tipJugetesModel.getTipJugetes(function(error, data)
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
            tipJugetesModel.getTipJugete(id, function(error, data)
            
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
        let tipJugetesModel =
        {
            Id_juguetes: null,
            tipo_producto: req.body.tipo_producto,
            Nombre_juguete: req.body.Nombre_juguete,
            tama_juguete: req.body.tama_juguete,
            color_jugete: req.body.color_jugete
        };

        tipJugetesModel.insertTipJugete(TipjugetesData, function(error, data)
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
        let TipjugetesData =
        { 
            Id_juguetes: req.body.Id_juguetes,
            tipo_producto: req.body.tipo_producto,
            Nombre_juguete: req.body.Nombre_juguete,
            tama_juguete: req.body.tama_juguete,
            color_jugete: req.body.color_jugete
        };

    //usamos la funcion para actualizar
    tipJugetesModel.updateTipJugete(TipjugetesData, function (error, data)
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
