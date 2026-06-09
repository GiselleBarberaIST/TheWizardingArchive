# The Wizarding Archive

## Descripción

Plataforma creada con HTML, JS y CSS para tener de un vistazo a los principales personajes de Harry Potter, y lo más importante de sus historias

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Docker

## Requisitos previos

- Navegador web moderno
- Docker (opcional, para ejecutar la aplicación en contenedor)

## Instalación

1. Clonar el repositorio:
   git clone https://github.com/GiselleBarberaIST/TheWizardingArchive

2. Ingresar al directorio del proyecto:
   cd the-wizarding-archive

## Ejecución local

Abrir el proyecto mediante Live Server o cualquier servidor web local.

## Construcción de la imagen Docker

Construir la imagen Docker:
docker build -t the-wizarding-archive .

## Ejecución del contenedor

Ejecutar el contenedor:

docker run -d -p 8080:80 --name wizarding-archive the-wizarding-archive

Una vez iniciado el contenedor, acceder a la aplicación desde:
http://localhost:8080