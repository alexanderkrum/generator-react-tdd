# generator-react-tdd [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A lightweight react template. A simple start with linting, formating and testing. 

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-tdd using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-react-tdd
```
## Main command
```bash
yo react-tdd
```

## Existing sub commands (explained below)
```bash
yo react-tdd:atom
yo react-tdd:molucule
yo react-tdd:organism
yo react-tdd:page
```


## Project generation

## 1. Generate an react project
    
    ```yo react-tdd```

Enter the name of the project in capital case
```bash
? Your project name (TEMP): Myproject
``` 

### 1.1
Init the project:

```bash
git init
yarn install
```
### 1.2

    
### 2. Adding components
>I prefer to split my components on their size.
I have chosen to follow the [Atomic design](http://atomicdesign.bradfrost.com/chapter-2/) format.
Based on this design pattern I would sort my components
in folders atom, molecules, organisms and pages. 

#### 2.1 The command structure for components generation is the follow.

```yo react-tdd:<component type>``` 
>For example you want to create an atom. Then you have
 to execute 

```yo react-tdd:atom```

The prompt will reply:

```? Atom module name: ```

Enter the component name with capital case.

### Scripts
#### 1. start development server
```bash
yarn start
```

#### 2. test
```bash
yarn test
```

#### 3. start storybook
```bash
yarn storybook
```

#### 4. test with coverage
```bash
yarn test:ci
```

## License

MIT © [alexanderkrum](https://alexanderkrum.github.io/)


[npm-image]: https://badge.fury.io/js/generator-react-tdd.svg
[npm-url]: https://npmjs.org/package/generator-react-tdd
[travis-image]: https://travis-ci.com/alexanderkrum/generator-react-tdd.svg?branch=master
[travis-url]: https://travis-ci.com/alexanderkrum/generator-react-tdd
[daviddm-image]: https://david-dm.org/alexanderkrum/generator-react-tdd.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/alexanderkrum/generator-react-tdd
[coveralls-image]: https://coveralls.io/repos/alexanderkrum/generator-react-tdd/badge.svg
[coveralls-url]: https://coveralls.io/r/alexanderkrum/generator-react-tdd
