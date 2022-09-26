/*
const express = require('express');
const router = express.Router();

var  = require('../modelos/TipDocModel');

module.exports = function()
{
    router.get("/", function (req, res)
    {
        TipDocModel.getTipDocs(function (error, data)
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
            TipDocModel.getTipDoc(id, function (error, data)
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
        var TipDocData =
        {
            id_tip_doc: null,
            tipo_documento: req.body.tipo_documento,
            iniciales_tip_doc: req.body.iniciales_tip_doc
        };

        TipDocModel.insertTipDoc(TipDocData, function(error, data)
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
        var TipDocData =
        { 
            id_tip_doc: req.body.id_tip_doc,
            tipo_documento: req.body.tipo_documento,
            iniciales_tip_doc: req.body.iniciales_tip_doc,
        };

    //usamos la funcion para actualizar
    TipDocModel.updateTipDoc(TipDocData, function (error, data)
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
*/