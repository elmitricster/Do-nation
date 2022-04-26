FROM nginx:stable-alpine as production-stage
COPY  ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./build /usr/share/nginx/html
EXPOSE 5500
CMD ["nginx", "-g", "daemon off;"]
