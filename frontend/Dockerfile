# Use Node.js image to build and run the React app
FROM node:18

WORKDIR /app

# Copy React app source
COPY package*.json ./
RUN npm install

COPY . .

# Expose the React dev server port
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]

