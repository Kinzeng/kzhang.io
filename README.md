# kzhang.io

This is the code for my portfolio website, which I built using React and a few CSS animations. The server is used for development purposes because I'm hosting the entire thing as a static site on Google Cloud. You can view the website [here](http://kzhang.io).

To help you navigate through the project, here's the file structure:

```
├── kzhang.io
|   ├── __tests__                   // unit tests for components (in progress)
|       ├── ButtonTest.js
|   ├── app                         // source code for client and server
|   |   ├── client                  // source code for client side
|   |   |   ├── components          // reusable components that don't belong to any particular pages
|   |   |   |   ├── Buttons
|   |   |   |   |   ├── Button.js   // basic button component that changes styles when hovered
|   |   |   |   ├── LinkImage.js    // displays an image that links to another page
|   |   |   ├── constants           // any constants that may need to be referred to throughout the website
|   |   |   |   ├── index.js
|   |   |   ├── containers          // components that serve to style the components nested inside
|   |   |   |   ├── App.js          // main component for the app
|   |   |   |   ├── Page.js         // component that expands to the user's viewport size
|   |   |   ├── pages               // components that serve as individual pages in the single scroll page
|   |   |   |   ├── Projects        // components that are used in the Projects page
|   |   |   |   |   ...
|   |   |   |   ├── Skills          // components that are used in the Skills page
|   |   |   |   |   ...
|   |   |   |   ├── About.js        // About page
|   |   |   |   ├── Contact.js      // Contact page
|   |   |   |   ├── Home.js         // Home page
|   |   |   |   ├── index.js        // instantiates the components and exports the an array of the pages for the App component to use
|   |   |   ├── colors.js           // defines constant colors that are reused throughout the application
|   |   |   ├── content.js          // exports content like projects, skills, and links to be used throughout the application
|   |   |   ├── index.js            // the entry point into the client application, renders the React app into the minimal html page
|   |   ├── server                  // source code for development server
|   |   |   ├── index.js            // entry point to run the server
|   |   |   ├── middleware.js       // adds middleware into the Express app
|   ├── .gitignore                  // files to ignore when pushing to github
|   ├── config.js                   // template config file (not currently used)
|   ├── package.json                // contains configurations for npm
|   ├── webpack.config.js           // contains configurations for webpack
```

If you want to run my website locally:
  1. clone this repository onto your machine: `git clone https://github.com/Kinzeng/kzhang.io.git`
  2. cd into the project: `cd kzhang.io`
  3. download dependencies: `npm install`
  4. build the client side code: `npm run build`
  5. start the server: `npm start`
      * if you want to start the server in dev mode (watch for changes): `npm run dev`
  6. navigate to [http://localhost:8080](http://localhost:8080)
