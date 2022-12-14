# Working Joe

Aplication realizada para la Universidad de Palermo.

## Requerimientos tecnicos
* Tener un dispositivo Android conectado o un Emulador corriendo
* Tener ´react-native-cli´ instalado
* Instalar dependencias y correr comandos con ´yarn´, no mezclar manejadores de paquetes. 

## Descripcion sistema
Se necesita un sistema para gestionar equipos de manera virtual.

Se definirán dos roles para la aplicación: líderes y miembros. Los usuarios líderes deben tener las funcionalidades propias del líder, mientras que para los miembros no deben estar o estar deshabilitadas. Los líderes tienen todas las funcionalidades de los miembros.

Los líderes definen qué miembros integrarán sus equipos, definen y modifican el proyecto y las tareas a realizar, supervisan a sus miembros y su avance.

Los miembros de equipos informan cuando empiezan a trabajar en una tarea, cuando finalizan y un detalle de lo realizado. Pueden visualizar a todos los usuarios de la aplicación, quiénes están en línea, visualizar todos los proyectos y solicitar unirse.

La aplicación debe calcular la cantidad de horas que trabaja cada miembro del equipo por semana en cada proyecto, así como también la cantidad de horas totales invertidas en el proyecto. 

Los líderes pueden saber qué cantidad de horas se trabaja por semana y el detalle de las tareas realizadas en cada período de todos los miembros. Cada miembro puede ver sus horas trabajadas y avance semanal propio. 

Para comenzar el proceso, un líder debe crear un proyecto y agregar las tareas que considere necesarias. 

Los miembros pueden buscar los proyectos, ver su descripción y miembros  y solicitar unirse o los líderes pueden agregar personas ya sea en el rol de líder o miembro.

Los líderes también pueden dar de baja a algún miembro del proyecto.

Los líderes pueden aceptar o denegar la solicitud de otros miembros de unirse al proyecto. 

Los miembros cargan su avance al iniciar el cronómetro diciendo en qué tarea colaboran, indicando el inicio de la actividad, el fin y el detalle de lo realizado. Para esto, al indicar el inicio o fin del período de actividad se deberá seleccionar un proyecto de todos los que participa, luego seleccionará una de las tareas predefinidas por el líder y por último seleccionará una subtarea de las definidas por los miembros del equipo. En caso de no haber una subtarea correspondiente, se podrá crear una nueva. 

Cada usuario puede ver si otros usuarios están activos en ese momento. 

La aplicación debe mostrar un cronómetro desde el momento que se inicia un período de actividad hasta que se finaliza (para saber cuánto tiempo se lleva de actividad). Este cronómetro debe permitir el uso completo de la aplicación mientras esté funcionando. 

## DER
![image](https://user-images.githubusercontent.com/32619895/207658120-592a5348-8c21-42d1-8829-d90fe243fa4f.png)

## Pantallas
![image](https://user-images.githubusercontent.com/32619895/207658190-47ae5874-4d18-40c9-b694-a425d10b1c32.png)
![image](https://user-images.githubusercontent.com/32619895/207658266-fd24a51c-4d10-4cab-a2e4-03e4a62b35a3.png)

## Screenshots (Primera version)

| Datos Usuario  |Proyectos   |Check-in/out   | Login  | Registro|
|---|---|---|---|---|
| ![image](https://user-images.githubusercontent.com/32619895/137207652-1c8e6c50-95e6-43ef-8b3b-5bccd9c66f3c.png)  |![image](https://user-images.githubusercontent.com/32619895/137207717-bb914c2c-13c0-41c3-a8c1-cae4a9e28c84.png)   |  ![image](https://user-images.githubusercontent.com/32619895/137207801-4cfe5cb7-4fa0-4975-913e-791dbfdd46e0.png) |![image](https://user-images.githubusercontent.com/32619895/137207858-bae494db-9e7c-4a78-97e3-f20510ed80b8.png)   | ![image](https://user-images.githubusercontent.com/32619895/137207886-4a570cad-beb6-499f-b28a-fde7d0f10160.png) |


## Requerimiento Funcional
![image](https://user-images.githubusercontent.com/32619895/207658359-409fe4b8-995b-4a8c-b9b5-652806f04688.png)

# Correr Proyecto Localmente

* `npm install` => Instalar las dependencias, solo correr una sola vez o cuando instalamos una dependencia nueva (o actualizamos)
* `pod install` => Se corre dentro de la carpeta `ios` (Solo con MacOS)
* `npm run ios` => Ejecutar en iOS (Solo con un disposivo MacOS)
* `npm run android` => Tener emulador conectado o dispositivo real en modo debug
