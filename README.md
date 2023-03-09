# MVM-SYSTEM

## Bienvenidos 
MVM es un proyecto desarrollado como proyecto de universidad, este se crea un pagina de software con el uso de las siguientes herramientas:

## Base de datos: 
MySQL, para hacer uso de ella hay un modelo con algunos archivos pregrabados que puedes modificar en la carpeta 
>/Otros en los archivos bdjugetes o ‘bdjugetesa’

## Back-end 
Se uso el entorno de ejecución node en su versión 16.17.0, las demás versiones mas recientes causan problemas con la ejecución de otros componentes. El back-end  se puede acceder para su ejecución al archivo app.js, si se tiene editores de texto se hace uso de terminal de comandos y se escribe:

> node app.js 

Si se tiene instalado nodemon se escribe en la terminal:

> nodemon app.js

####  Nodemon:
Si se quiere usar la libreria para node de nodemon, se coloca en la terminal:
> npm install -g nodemon

Para que ello funcione la terminal debe estar en la dirección de la carpeta con el comando 

> pwd 

Si se está en la carpeta correcta se mostrara en pantalla la dirección cuya finalización será:

> \MVM-SYSTEM

Una vez ello se requiere que la base de datos este activa y comunicándose con el back-end  para ello se va a la carpeta:
\src\confing.json

La información correspondiente se sustituye dependiendo del uso del equipo.



    {
      "host": "localhost",
      "user": "root",
      "password": "",
      "database": "bdjugetesa"
    }
    
 ####Instrucciones del fronted se encuentran en la carpeta:
> /Frot-End
