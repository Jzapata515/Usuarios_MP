# Usuarios_MP
Para correr la app en un contenedor Docker siga los pasos:

    - Paso 1: Clonar repositorio

        git clone -b develop https://github.com/Jzapata515/Usuarios_MP.git e

    -Paso 2: Crear imagen

        docker build -t usuarios .

    -Paso 3: Correr el contenedor

        docker run -p 4000:4000 usuarios

Para correr la app en su máquina local (Deberá tener instalado nodejs v20):

    - Paso 1: Clonar repositorio

        git clone -b develop https://github.com/Jzapata515/Usuarios_MP.git

    - Paso 2: Validar que el puerto 4000 esté libre

    - Paso 3: Instalar dependencias

        npm install
    
    - Paso 4: Correr la aplicación

        npm start

Para hacer pruebas de los endpoints se agregó una coleccion en postman en la ruta:

    "/src/recursos/CRUD de USUARIOS MP.postman_collection.json"

