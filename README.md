# Single Page Application 

This project uses [Create React App (typescript template)](https://github.com/facebook/create-react-app).
`React-bootstrap` alongwith `Styled Components` to build UI components.


## Available Scripts

In the project directory, you can run:

### `yarn start:dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Run unit tests written using Jest and React Testing Library.
Above 80% of test coverage is maintained, you can check test coverage using command `yarn run test -- --coverage --watchAll=false`

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance. Additional `express-static-gzip` is used to further
optimize loading of static resources. The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn start`

Use this command to run built project.
