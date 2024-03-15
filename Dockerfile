# Use an official Nginx image as the base image
FROM nginx:alpine

# Copy font files into the container
COPY public/fonts /usr/share/nginx/html/fonts

# Expose port 80 to the outside world
EXPOSE 80
