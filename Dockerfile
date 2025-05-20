FROM node:24.0.1-alpine

# Establece directorio de trabajo
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

# Expone el puerto
EXPOSE 3000

# Comando por defecto
CMD ["npm", "start"]
