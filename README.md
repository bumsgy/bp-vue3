# Vue 3.x Boiler Plate
## 적용 Plugin
| Plugin     | 설명                  | Url |
|------------|-----------------------| ------ |
| Vue 3.x    | 프레임웍              | https://v3.ko.vuejs.org/ |
| Vite       | 번들러                | https://vitejs.dev/ |
| javascript | 작성언어              | https://developer.mozilla.org/ko/docs/Web/JavaScript |
| ESLint     | 코드 품질             | https://eslint.org/ |
| Prettier   | 코드 포맷터           | https://prettier.io/ |
| Jest       | 테스트 프레임웍       | https://jestjs.io/ |
| Cypress    | E2E 테스트 프레임웍   | https://www.cypress.io/ |
| Pinia      | 상태관리              | https://pinia.esm.dev/ |

## Project Setup
### Module install
```sh
npm install
```
or
```sh
yarn install
```

### Compile and Hot-Reload for Development
```sh
npm run dev
```
or
```sh
yarn dev
```


## ESLint 적용
### Intellij 설정
1. 설정 > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint
2. Manual ESLint configuration 선택
   1. ESLint package 선택 > node_module 밑의 eslint 경로 선택( @eslint X )
   2. Working directory 설정 > 현프로젝트 선택
3. Configuration file 설정 > configuration file > .eslintrc.json 선택
4. Prettier는 Disable로 선택.
   - eslint 설정에 prettier가 포함되어 있음
   - prettier 파일은 생성하지 않아도 됨.

# Not yet

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Compile and Minify for Production
```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g., in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
