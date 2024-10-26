# Use uma imagem oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Compila o TypeScript para JavaScript
RUN npm run build

# Expõe a porta 3000
EXPOSE 3000

# Define o comando de inicialização
CMD ["node", "dist/main.js"]
