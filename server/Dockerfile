FROM node:14

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend code (excluding node_modules due to .dockerignore)
COPY . .

# Expose the port defined in .env
EXPOSE ${PORT}

# Start the server
CMD ["npm","run","dev"]