#!/bin/bash

# Dependencies
pnpm install

# Docker
docker-compose up -d

# Prisma
npx prisma migrate reset --force --skip-seed
npx prisma db push
npx prisma generate
npx prisma db seed

# Application
mkdir -p logs
pnpm start