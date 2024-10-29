FROM node:14

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code (excluding node_modules due to .dockerignore)
COPY . .

# Expose the frontend port
EXPOSE 5173

# Start the React development server
CMD ["npm","run","dev"]