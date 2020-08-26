FROM node:current-slim as build
WORKDIR '/app'
COPY package.json .
RUN  npm install
EXPOSE 80
COPY  . .
RUN  npm run build
CMD [ "npm","run","start:prod" ]

FROM nginx
COPY --from=build /dist /usr/share/nginx/html


