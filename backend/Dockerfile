# Use Node.js LTS image as the base
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the backend port (for documentation, Docker Compose will publish it)
EXPOSE 5000

# Start the Express server
CMD ["node", "server.js"]

