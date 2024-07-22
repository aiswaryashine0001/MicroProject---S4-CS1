# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the dependencies required for the project.

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Adding a Video Background

To add a video background to your project:

1. **Place the Video in the Assets Folder**

   Copy your video file (e.g., `background.mp4`) to the `src/assets` folder of your React project.

   - The path to the video file should be: `src/assets/background.mp4`

2. **Update Your Component to Use the Video**

   In the component where you want to use the video background (e.g., `App.js`), import the video and set it as the background. Here’s an example:

   ```jsx
   import React from 'react';
   import './App.css'; // Make sure to create a CSS file if not already present

   function App() {
     return (
       <div className="App">
         <video autoPlay muted loop id="background-video">
           <source src={require('./assets/background.mp4')} type="video/mp4" />
           Your browser does not support the video tag.
         </video>
         <div className="content">
           {/* Your content here */}
         </div>
       </div>
     );
   }

   export default App;
