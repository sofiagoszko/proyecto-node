# Pre-Entrega de Proyecto

- Alumna: Sofia Lara Goszko
- Comisión: 26134 

## Requerimiento #1: Configuración Inicial

1. Crea un directorio donde alojarás tu proyecto e incluye un archivo `index.js` como punto de entrada.
2. Inicia Node.js y configura npm usando el comando 
```
npm init -y

```
3. Agrega la siguiente propiedad en el archivo `package.json` para habilitar ESModules.
```
"type": "module" 
```
4. Configura un script llamado `start` para ejecutar el programa con el comando npm run start.

## Requerimiento #2: Lógica de Gestión de Productos

Con la base del proyecto lista, implementar las funcionalidades principales usando la API FakeStore. 

El sistema debe ser capaz de interpretar los comandos ingresados en la terminal y ejecutar las siguientes acciones:

### Consultar Todos los Productos

``` 
 npm run start GET products
```  

El programa debe realizar una petición asíncrona a la API y devolver la lista completa de productos en la consola.

### Consultar un Producto Específico

```
npm run start GET products/<productId>
```

El programa debe obtener y mostrar el producto correspondiente al productId indicado.

Ejemplo: `npm run start GET products/15`

### Crear un Producto Nuevo

```
npm run start POST products <title> <price> <category>
```

El programa debe enviar una petición POST a la API para agregar un nuevo producto con los datos proporcionados (title, price, category) y devolver el resultado en la consola.

Ejemplo: `npm run start POST products T-Shirt-Rex 300 remeras`

### Eliminar un Producto

```
npm run start DELETE products/<productId>
```

El programa debe enviar una petición DELETE para eliminar el producto correspondiente al productId y devolver la respuesta en la consola.

Ejemplo: `npm run start DELETE products/7`