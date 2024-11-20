FROM node:18-alpine AS builder
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:18-alpine
WORKDIR /app

RUN yarn global add serve

COPY --from=builder /app/build /app

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]
