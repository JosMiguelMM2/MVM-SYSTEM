
const express = require ('express');
const router = express.Router();

let tipMaterialesModel = require('../modelos/tipMaterialesModel');

module.exports = function()
{
    router.get("/", function (req, res)
    {
        tipMaterialesModel.getTipMaterialess(function(error, data)
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
            tipMaterialesModel.getTipMateriales(id, function (error, data)
            
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


// ruta informe 2
router.get("/:ininicial/:infinal", function (req, res)
{
    let ininicial= req.params.ininicial;
    let infinal = req.params.infinal;
    let id = req.params.id
    console.log("aca 159 "+ ininicial + " - " + infinal  );
    //if(!isNaN(Finicio))
   // {
    tipMaterialesModel.getInforme2 (ininicial , infinal, function (error, data)
        
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
    //}
        

});
 //////////////////////////////////////////////////////////////////////////////
    // añadir

    router.post("/", function (req, res)
    {
        let TipMaterialDada =
        {
            Id_material: null,
            clase_material:req.body.clase_material,
            color_material:req.body.color_material,
            cantidad_peso:req.body.cantidad_peso,
            nombre_material:req.body.nombre_material
        };

        tipMaterialesModel.insertTipMateriales(TipMaterialDada, function(error, data)
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
        let TipMaterialDada =
        { 
            Id_material: req.body.Id_material,
            clase_material:req.body.clase_material,
            color_material:req.body.color_material,
            cantidad_peso:req.body.cantidad_peso,
            nombre_material:req.body.nombre_material
        };
       console.log("159 "+ TipMaterialDada.nombre_material)
    //usamos la funcion para actualizar
    tipMaterialesModel.updateTipMateriales(TipMaterialDada, function (error, data)
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
