# AdvancedSecurity
Web Page AdSecurity
Version 1.1

## Desarrollo
Se recomienda utilizar la herramienta gitpod para realizar cualquier modificacion, la misma probee de los componentes necesarios para la ejecucion del proyecto y actualizacion del repositorio accediendo al proyecto a travez de la siguiente url:
~~~
gitpod.io/#https://github.com/advancedSec/AdvancedSecurity
~~~

## Ejecutar proyecto
Abrir una terminal de consola de gitpod o VS code y ejecutar el siguiente comando para instalar las dependencias necesarias para el proyecto
~~~
npm install
~~~
Estructura de archivos a modificar para agregar/eliminar elementos a la web:
```
src
  |--index.html
  |--main.css
  |--main.js
  |--img
```
- **index.html:** Contenido html estatico de la web adsecurity
- **main.css:** Contenido de estilos de adsecurity
- **main.js:** Contenido dinamico de sitio adsecurity
- **img** Carpeta que almacenas las imagenes


  #### Recomendaciones
  Si quieres ver los cambios que realizas en el navegador, es recomendable tener la extension "Live Server" de visual studio code, e ir:
  ~~~
  dist/index.html
  ~~~
  y ejecutar el "live server", previamente compilando el codigo con la instruccion
  ~~~
  npx webpack -d
  ~~~
  Si no compilas, no veras los cambios reflejados en la web

## Pre-requisitos (ambientes locales)
- Visual studio code
- Node js (version 14.X)
- npm

## Compilar proyecto
Una vez se realicen los cambios necesarios en los archivos, se compila con el comando:
~~~
npx webpack -d
~~~
El compilado se genera en la carpeta ``dist``

## COMANDOS GIT
Una vez realices las modificaciones es necesario actualizar(pushear) el repositorio para que de esta manera ``VERCEL`` pueda optener la actualización de la compilacion en la carpeta ``dist``

- ``git status``: revisas las modificaciones dentro del repositorio
- ``git add *``: añades al ``HEAD`` de git los cambios realizados
- ``git commit -m "hacer un comentario respecto al cambio realizado, no importa lo largo que sea"``: realizar el commit de los cambios
- ``git push origin main``: pushear los cambios a la rama main del proyecto y con esto ``VERCEL`` podra tomar el cambio de la carpeta ``dist``

