FROM node:18-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn && yarn install \
  --frozen-lockfile \
  --non-interactive

COPY . .

RUN npx tsc
RUN yarn build
RUN npx prisma generate
# RUN npx prisma migrate dev --name init

EXPOSE 8000

CMD ["yarn", "start"]
