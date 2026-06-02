# unidad3_node

# 1.  crear el proyecto en node
    -Crear un proyecto con nodeJS, con el siguiente comando
     en el terminal :

    npm init -y
    
# 1.1.- Cuando descargamos el proyecto de otro lado:
    Vamos a usar el siguiente comando para instalar dependencias de NodeMules

    npm i 

# 2.- instalar Express(para trabajar Javascript como servidor)
    -Realizar la instalacion de un paquete
     de desarrollo:

    npm i (o install) express (npm i express)

# 3.- Crear estructura de carpetas para el proyecto
    -Primero definimos la carpeta madre (src)
    -Crear el main de la aplicación, que es el app.js
    -Creamos 2 carpetas, una es para el ruter (definir rutas) y
     la otra es para los middleware (puente)

    src/
    ----app.js  <- Este es el main de la aplicación
    ----routes/
        ----users.js
    ----middlewares/
        ----logger.js

# 4.- Crear logger en carpeta middlewares/
    Creamos el puentes de la aplicación
    ----logger.js

# 5.- Creacion de una  ruta
    Crearemos un usuario con datos parseados(meterlos a la mala) en la ruta
    La ruta la usaremos para manejar las URL.

    users.js

# 6.- Creación del main
    Definimos el cerebro de la aplicación
    
    app.js

# 7.- 