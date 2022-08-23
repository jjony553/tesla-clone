# Tesla-clone
### Tesla Home Made by React 

## Used
- Skills
```
React hook, Redux, Styled-components
```
- Install
```
//create app
npx create-react-app project --template redux

//css
npm add styled-components

//icons (https://mui.com/material-ui/material-icons/?query=menu&selected=Menu)
npm install @mui/icons-material
npm install @emotion/react 
npm install @emotion/styled

//animate
npm install animate.css --save
https://animate.style/

```
- Scroll Effect
```
//In Parent Component
scroll-snap-type: y mandatory;
overflow-y: scroll;

//In Child Component
scroll-snap-align: start;
scroll-snap-stop: always;
```

## Screen Shot
- Desktop
![desktop](https://user-images.githubusercontent.com/55618626/186060824-12292ee9-79a1-46ba-87da-82a8fa5efe12.gif)



- Responsive
![responsive](https://user-images.githubusercontent.com/55618626/186060836-475522e6-4263-4bd6-9b22-f48c55a8b17a.gif)



- Phone(ios,android)
![phone(ios,android)](https://user-images.githubusercontent.com/55618626/186060850-29ff3be0-3fbc-43d9-9ec3-60bee843d427.gif)


## Folder Structure 
```
│  App.css
│  App.js
│  index.css
│  index.js
│  reportWebVitals.js
│  setupTests.js
│
├─app
│      store.js
│
├─components
│      Header.js
│      Home.js
│      Section.js
│
└─features
    └─car
            CarSlice.js
```
