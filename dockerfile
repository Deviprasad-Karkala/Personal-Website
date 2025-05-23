FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY . /var/www/html/
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]