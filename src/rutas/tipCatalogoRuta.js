
const express = require ('express');
const router = express.Router();

let tipCatalogoModel = require('../modelos/tipCatalogoModel');

module.exports = function()
{
    router.get("/", function (req, res)
    {
        tipCatalogoModel.getTipCatalogo(function(error, data)
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
            tipCatalogoModel.getTipCatalogo(id, function (error, data)
            
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
        let TipCatalogoData =
        {
            Id_contactos: null,
            Id_empleados: req.body.Id_empleados,
            Tipo_contacto: req.body.Tipo_contacto,
            Dato_contacto: req.body.Dato_contacto
        };

        tipCatalogoModel.insertTipCatalogo(TipCatalogoData, function(error, data)
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
        let TipCatalogoData =
        { 
            Id_contactos: req.body.Id_contactos,
            Id_empleados: req.body.Id_empleados,
            Tipo_contacto: req.body.Tipo_contacto,
            Dato_contacto: req.body.Dato_contacto
        };

    //usamos la funcion para actualizar
    tipCatalogoModel.updateTipCatalogo(TipCatalogoData, function (error, data)
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