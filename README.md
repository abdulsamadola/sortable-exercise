<h3 align="center">Sortable Frontend Exercise</h3>

<div align="center">

[![GitHub issues](https://img.shields.io/github/issues/abdulsamadola/sortable-exercise)](https://github.com/abdulsamadola/sortable-exercise/issues)
[![GitHub forks](https://img.shields.io/github/forks/abdulsamadola/sortable-exercise)](https://github.com/abdulsamadola/sortable-exercise/network)
[![GitHub stars](https://img.shields.io/github/stars/abdulsamadola/sortable-exercise)](https://github.com/abdulsamadola/sortable-exercise/stargazers)


</div>

## Table of Contents

- [About the Project](#about-the-project)
- [Build with](#build-with)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running](#running)
- [Screenshots](#screenshots)
- [File Structure](#file-structure)
- [Unit Testing](#unit-testing)
- [Running Unit tests](#running-unit-tests)


## About The Project

> **Sortable Frontend Exercise** This exercise will evaluate your skills in front-end web development using different technologies.


### Build with

- [React JS](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [HTML/CSS](hhttps://www.w3schools.com/html/html_css.asp)
- [SASS](https://sass-lang.com/)
- [Redux](https://redux.js.org/)
- [Jest](https://jestjs.io/)
- [Enzyme](https://enzymejs.github.io/enzyme/)
- [Axios](https://github.com/axios/axios)
- [Material Icons](https://material-ui.com/components/material-icons/)

## Getting Started

> This is an list of needed instructions to set up your project locally, to get a local copy up and running follow these instructions.

### Installation

1. **_Clone the repository_**

```sh
$ git clone https://github.com/abdulsamadola/sortable-exercise.git
```

2. **_Navigate to repository directory_**

```sh
$ cd sortable-exercise
```

3. **_Install dependencies_**

```sh
$ npm install 
```
4. **cd client**

```sh
$ yarn install 
### Running

1. **_Running on development mode_**

cd ..
$ npm run start

```

2. **Build for production**

```sh
$ yarn run build
```

### Screenshots

<div align="center">
 
![image](https://github.com/abdulsamadola/sortable-exercise/blob/master/screenshots/1.png)

<hr />

</div>

## File Structure

<pre>
|-- Sortable Frontend Exercise
    |-- .DS_Store
    |-- README.md
    |-- package-lock.json
    |-- package.json
    |-- server.js
    |-- client
        |-- .DS_Store
        |-- .gitignore
        |-- README.md
        |-- package.json
        |-- tsconfig.json
        |-- yarn-error.log
        |-- yarn.lock
        |-- public
        |   |-- favicon.ico
        |   |-- index.html
        |   |-- logo192.png
        |   |-- logo512.png
        |   |-- manifest.json
        |   |-- robots.txt
        |-- src
            |-- index.tsx
            |-- react-app-env.d.ts
            |-- setupTests.ts
            |-- components
            |   |-- App
            |       |-- App.tsx
            |       |-- OrderTable.tsx
            |       |-- __tests__
            |           |-- OrderTable.test.tsx
            |-- services
            |   |-- index.ts
            |   |-- orderService.ts
            |-- store
            |   |-- actions.ts
            |   |-- effects.ts
            |   |-- reducer.ts
            |   |-- types.ts
            |-- styles
            |   |-- App.scss
            |-- utils
                |-- constants.ts
                |-- dateFormat.ts
</pre>

## Unit testing

> Each component in this project has its own unit test file inside \_\_tests\_\_ directory eg. OrderTable.test.tsx

### Running Unit tests

> Run the following command.

```sh
yarn run test
```


