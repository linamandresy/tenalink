# backend/Dockerfile

# Build stage
FROM golang:1.23 AS build

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY . ./
RUN go build -o tenalink-backend

# Run stage
FROM debian:bookworm-slim

WORKDIR /app

COPY --from=build /app/tenalink-backend ./

EXPOSE 8080

CMD ["./tenalink-backend"]
