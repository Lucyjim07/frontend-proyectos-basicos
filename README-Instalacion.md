# Como crear un proyecto React desde 0

Este documento contiene los pasos para crear un proyecto de React sin el uso de herramientas o instalación de templates como `create-react-app` o `vite`

## Prerequisitos

Tener instaladas las dependencias y herramientas de desarrollo e instalación, como también un editor de código. Para este proyecto se usa:

- NodeJs `node -v`
- NPM `npm -v`
- Visual Studio Code
- Terminal

## Pasos para crear una App React desde cero, instalando todas las dependencias

El proyecto `01-instalar-react` fue creado con los pasos indicados a continuación

1. Crear una carpeta que contendrá nuestro proyecto
2. Dentro de esa carpeta que contendrá el proyecto, usar el comando `npm init` para crear el archivo package.json que contendrá todas las dependencias
3. Instalar dependencias de configuración de Vite

```bash
$ npm install -D vite
$ npm install -D @vitejs/plugin-react
```

- Ya existen plugin que ayudan a configurar la aplicación por eso se usa `vite` como dependencia de desarrollo y `@vitejs/plugin-react` como dependencia para configurar la aplicación de React.

4. Instalar dependencias de React

```bash
$ npm install react react-dom
```

- react-dom contienen los funciones para manipular el DOM en el navegador.
- react es la bilbioteca de react que contiene por ejemplo useState, useEffect, etc.
- Los paquetes de react y react-dom contienen todo lo necesario para crear una aplicación de React.

5. Crear los archivos de configuración de vite en la raíz del proyecto, el archivo se llama `vite.config.js`. Toda esta información se puede encontrar en le sitio web de [Vite](https://vitejs.dev/guide/)

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

6. Agregar los scripts para la ejecución de la aplicación en el archivo `package.json`

```JSON
{
  "scripts": {
    "dev": "vite", // inicia el servidor de desarrollo : `vite dev`, `vite serve`.
    "build": "vite build", // crea la carpeta dist para enviar a producción.
    "preview": "vite preview" // pre visualiza la aplicación en ambiente de producción.
  }
}
```

7. Crear los archivos de inicio del proyecto, uno para HTMl que se llamará `index.html`, este archivo debe estar en la raíz del proyecto y otro para javascript que se puede llamar `index.jsx` o `main.jsx` que debe estar dentro de una carpeta llamada src dentro de la raiz del proyecto.

8. El contenido del archivo HTLM se puede autogenerar usando un atajo de teclado _! + Tab_ y se creará en la carpeta raíz del proyecto

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App React</title>
</head>
<body>

</body>
</html>
```

9. Se modifica el archivo `index.html` para que se vincule con el javascript que contendrá la aplicación de react

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>App React</title>
  </head>
  <body>
    <!-- Sección que se va a capturar para renderizar la aplicación React -->
    <div id="app"></div>

    <!-- Script con la programación de la aplicación en Javascript -->
    <!-- Se carga en la pagina web todo lo que contiene ese archivo de Javascript ubicado en la ruta indicada -->
    <script type="module" src="./src/main.jsx"></script>
  </body>
</html>
```

10. El archivo principal de javacript se creará dentro de la carpeta `src` debajo de la carpeta principal (raíz) del proyecto. El contenido del archivo se detalla a continuación

```js
import { createRoot } from 'react-dom/client';

// obtener el elemento en el que se va a renderizar la aplicación
// este elemento se relaciona al div que existe en el index.html
const element = document.getElementById('app');

// renderizar el componente React dentro del elemento
const root = createRoot(element);
root.render(<h1>Primeros pasos con React!!!</h1>);
```

11. Instalar linter para que ayude a revisar el código mientras se programa

- Instalar dependencias con el siguiente comando 
```bash
$ npx eslint --init
```
- Seleccionar entre las opciones que permiten hacer la configuración del linter lo siguiente
```bash
√ How would you like to use ESLint? · problems    
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · javascript
√ Where does your code run? · browser
The config that you've selected requires the following dependencies:

eslint, globals, @eslint/js, eslint-plugin-react
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
```

- Este proceso de instalación creará un archivo con el nombre `eslint.config.js` en donde se encuentran todas las configuraciones de las reglas que queremos que aplique el linter, el archivo se deberá ver como el siguiente

```js
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: { globals: globals.browser },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
    }
  }
];
```

1.  Mover el componente principal a su propio archivo, esto se hace creando un archivo `App.jsx` en la carpeta `src`, creando una función que se va a exportar. La funcion va a retornar el componente principal de la aplicación que React va a mostrar en el navegador.

```jsx
function App() {
  return <h1>Titulo de la aplicacion con Lucy</h1>;
}

export default App;
```

Este componente principal llamado App será importado como parte del punto de entrada de la aplicación en el archivo `main.jsx`.

```js
import { createRoot } from 'react-dom/client';
// importar componente principal
import { App } from './App';

const element = document.getElementById('app');
const root = createRoot(element);

// renderizar componente en root
root.render(<App />);
```

13. Se puede crear un archivo de estilos para mejorar la apariencia de la aplicación. Por lo general, existe un archivo de estilos por cada componente creado y el nombre es igual que el componente con la diferencia que termina con la extensión `.css`. Para este ejemplo vamos a crear el archivo `App.css` en la misma ruta en la que creamos el componente principal.

Para relacionarlo a la aplicación, lo podemos importar ya sea dentro del componente `App.jsx` o en el archivo `main.jsx`

```jsx
import './App.css';
```

13. Ejecutar el proyecto mediante el script incluido en el archivo `package.json` ejecutando el siguiente comando

```bash
$ npm run dev
```

## Pasos para crear una App React usando Vite

Vite es un empaquetador de aplicaciones web.

El proyecto `02-create-react-vite` fue creado con los pasos indicados a continuación

1. Crear la aplicación con el comando de vite y seguir los pasos solicitados

```bash
$ npm create vite@latest
```

2. Ingresar a la carpeta del proyecto, instalar todas las dependencias y posteriormente ejecutar el proyecto de react

```bash
$ npm install
$ npm run dev
```

## Pasos para instalar lintr

Usar el comando siguiente y seguir los pasos

```bash
$ npx eslint --init
```

## Agregat testing a la aplicación

1. Instalar las dependencias de desarrollo

```bash
$ npm install -D vitest happy-dom
$ npm install -D @testing-library/react
$ npm install -D @testing-library/user-event
```

La dependencia `vitest` contiene métodos que ayudan a crear los test como `describe`, `test`, `expect`
`happy-dom` ayuda a simular el dom
`testing-library/react` es la biblioteca para realizar los test con react
`testing-library/user-event` ayuda a simular las acciones de los usuarios

2. En el archivo `vite.config.js` agregar la configuración para incluir los test

```js
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});
```

3. Crear archivos test con el formato `nombreClaseTest.test.jsx` y agregar un test de prueba

```jsx
import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('Demo test', () => {
    render(<App />);
    // screen.debug()

    expect(
      screen.getByText('Titulo de la aplicacion con Lucy!!!')
    ).toBeDefined();
  });
});
```

4. Agregar un script para ejecutar los test, este script se coloca en el archivo `package.json` y sera el siguiente

```json
  "scripts": {
    ...
    "test": "vitest"
  },
```
