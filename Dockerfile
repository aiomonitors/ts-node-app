FROM node:18-alpine

WORKDIR /usr/app

ENV TZ=America/New_York
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start"]