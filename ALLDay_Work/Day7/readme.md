# Day 7,8 and 9
1. React Overview, Virtual DOM concepts, JSX concepts
create-react-app (React Project generation and Build Tool)
2. React Components (Class, Functional), Properties, Event Handling
3. React State, Controlled Components


# what is React 
- Open Source
- Js library
- used to create single page application
# why React
- Virtual DOM
- jsx
- very light.

# to create react app:-
- 4 ways to create it
    - using CDN
        - basic application with have React app
        - needs to add CDN:-   
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script> -- for react
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> -- for react DOM
        <script crossorigin src="https://unpkg.com/@babel/standalone/babel.min.js"></script> --for babel :- to help us in using JS with html
        - run the file
    - using create-react-app:- npx create-react-app my-app
    -  using vite
        - npm install -g create-vite
        create-vite xyz --template react

    - using wiuthout boiler plate
        -npm init
        npm install react react react-dom
        npm install typescript @types/react @types/react-dom -D
        create the folder and add the code
        
# Component in React:-
- smallest unit of the code
- reusable and should be able to create pages when we combine it 

# Add the Styling
- Material Ui can be used to Styling the application
- install
    npm install @mui/material @emotion/react @emotion/styled
    npm install @mui/icons-material
        
# creating React App
Step 1: install Vite
 - npm install -g create-vite
Step 2: Create the boilerplate
 - create-vite TodoList --template react
Step 3: Add Material UI
  - npm install @mui/material @emotion/react @emotion/styled
  - npm install @mui/icons-material
Step 4: Add the UI components

# Virtual DOM
- Dom Created by React to ensure the fast rendring of the UI

# Props:-
- Passing of The data from parent to child element

# Event Handling
- if you are using onClick method the function should dose not have the Paranthisis
Ex
  <Button variant="outlined" onClick = {handleClick}>Start the Counter</Button>
- if you want to pass the params then the function call should be callable
  <Button variant="outlined" onClick = {()=>handleClick("Check the Code")}>Start the Counter</Button>

# useState Hook
- use the mantain the current state of a component;



