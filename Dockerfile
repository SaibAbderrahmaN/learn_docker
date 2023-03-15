FROM node:15
WORKDIR /app 
COPY package.json .
RUN npm install
COPY . ./
ENV PORT 6000
EXPOSE $PORT
CMD ["node" ,"index.js"]

