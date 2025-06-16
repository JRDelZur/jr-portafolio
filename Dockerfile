# Usamos imagen oficial nginx
FROM nginx:alpine

# Copiamos la build al directorio donde nginx sirve contenido
COPY build/ /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Comando por defecto para correr nginx
CMD ["nginx", "-g", "daemon off;"]
