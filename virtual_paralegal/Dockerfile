# Use a lightweight Nginx image
FROM nginx:alpine

# Copy the static web files to the default Nginx public folder
COPY . /usr/share/nginx/html

# Expose port 8080 for Cloud Run
EXPOSE 8080

# Cloud Run sets the PORT env variable to 8080 by default. 
# We update the default Nginx config to listen on that port instead of 80.
CMD /bin/sh -c "sed -i 's/listen  *80;/listen 8080;/g' /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"
