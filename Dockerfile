FROM node:18-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn && yarn install \
  --frozen-lockfile \
  --non-interactive

RUN yarn build

COPY . .
EXPOSE 8000

CMD ["yarn", "start"]
