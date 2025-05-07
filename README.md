# React TODO App with localStorage

A simple, frontend-only TODO application built with React that stores all state in localStorage.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks (All, Active, Completed)
- Clear all completed tasks
- Persistent storage using localStorage
- Responsive design
- Optional due dates for tasks
- Sort tasks by due date
- Theme toggle (Light/Dark mode)

## How it Works

This application uses React's state management along with the browser's localStorage API to create a persistent TODO list application. All data is stored locally in the user's browser, so no backend or database is required.

### Key Components

1. **State Management**: Uses React's `useState` hook to manage the application state
2. **Persistence**: Uses `localStorage` to save and retrieve TODO items
3. **Filtering**: Allows filtering tasks by their completion status
4. **Due Dates**: Allows adding optional due dates to tasks and sorting by due date
5. **Theming**: Supports light and dark themes with persistent user preference

### localStorage Implementation

The app uses a custom React hook called `useLocalStorage` to handle localStorage operations:

1. The hook provides a state variable and setter function similar to React's `useState`
2. It automatically loads data from localStorage on initial render
3. It automatically saves data to localStorage whenever the state changes
4. It handles errors gracefully and provides fallback values
5. It even synchronizes state across browser tabs via the storage event

### Due Dates Feature

The app allows users to:
- Add an optional due date when creating a task
- View due dates for each task in the list
- Sort tasks by due date (earliest first)

### Theme Toggle Feature

The app includes a theme toggle that:
- Switches between light mode (default) and dark mode
- Persists the user's theme preference in localStorage
- Automatically applies the saved theme on page load
- Provides a visually distinct UI for each theme

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:12000](http://localhost:12000) to view it in your browser.

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

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
