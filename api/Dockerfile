FROM node:alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install -g nodemon
RUN npm install
COPY /server.js .
EXPOSE 3000
CMD nodemon

#docker container run --rm -d --name postgres --net test-net -v $(pwd)/database:/docker-entrypoint-initdb.d -v pg-data:/var/lib/postgresql/data -e POSTGRES_USER=postgres -e POSTGRES_DB=postgres postgres:11.5-alpine