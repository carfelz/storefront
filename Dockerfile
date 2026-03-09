# Development Dockerfile for Storefront
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
# Depending on package manager, copy lockfiles
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Check package manager and install dependencies
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Expose Next.js default port
EXPOSE 8000

# Start development server
CMD ["npm", "run", "dev"]
