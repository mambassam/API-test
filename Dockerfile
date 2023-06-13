FROM node:alpine

COPY package.json ./

RUN npm install

EXPOSE 3000
# the below command is what happens you run the container
CMD ["node" "server.js"]