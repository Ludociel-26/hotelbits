# Usar la imagen de Node.js
FROM node:latest

# Establece el directorio de trabajo en el contenedor
WORKDIR /home/app

# Copiar los archivos del proyecto al contenedor
COPY package.json package-lock.json ./
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto 4000
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]