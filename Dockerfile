#################################################################################
#Fecha de Creación:  08-06-2024
#Autor: Juan Pablo Zapata Suste [jzapata129@gmail.com]
#Actualizaciones: 
#Versión: 1.0
#################################################################################
FROM node

# Definición ruta de la app
WORKDIR /app

# Copiar archivo package
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar código fuente
COPY . .

# Exponer app en el puerto 4000
EXPOSE 4000

# Correr Test
CMD [ "npm", "test" ]

# Iniciar app
CMD [ "npm", "start" ]