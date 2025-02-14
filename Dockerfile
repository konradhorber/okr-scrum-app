# Stage 1: Build the project
FROM node:22-alpine AS build
WORKDIR /app

# Copy package and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the code and compile TypeScript
COPY . .
RUN npm run build

# Stage 2: Run the compiled code in production
FROM node:22-alpine
WORKDIR /app

# Copy only production dependencies
COPY package.json package-lock.json* ./
RUN npm install --only=production

# Copy the compiled code from the build stage
COPY --from=build /app/dist ./dist

# Expose the port your app uses (adjust as needed, here it's 3000)
EXPOSE 3000

# Start your app using the compiled code
CMD ["npm", "run", "serve"]