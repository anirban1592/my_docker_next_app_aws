FROM node:22-alpine3.19 AS build

WORKDIR /app

COPY package*.json /

RUN npm install

COPY . .

RUN npm run build

FROM node:22

WORKDIR /app

COPY package*.json .

RUN npm install --omit=dev

COPY --from=build /app/.next ./.next

CMD ["npm","run","start"]



