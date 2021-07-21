# AdvancedSecurity
Web Page AdSecurity

## Desarrollo
Se recomienda utilizar la herramienta gitpod para realizar cualquier modificacion, la misma probee de los componentes necesarios para la ejecucion del proyecto,
accediendo al proyecto a travez de la siguiente url:
~~~
gitpod.io/#https://github.com/advancedSec/AdvancedSecurity
~~~

## Ejecutar proyecto
Abrir una terminal de consola de gitpod o VS code y ejecutar el siguiente comando
~~~
npm install
~~~
Este comando instalara todos los paquetes necesarios del proyecto que se encuentran en el package.json

  ### Recomendable
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
