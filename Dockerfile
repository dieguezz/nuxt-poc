FROM node:7.10.0

RUN npm install
RUN npm run build
CMD ["npm", "start"]
