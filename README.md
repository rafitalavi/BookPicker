# Book Picker

Book Picker is a React-based web application designed to allow users to browse, search, and save books of interest. The app is tailored to help book enthusiasts discover new reads, view detailed information on specific books, and manage a list of favorites.

## Key Features

- **Browse Books:**
    - Users can browse a curated list of books displayed on the homepage.
  
- **Book Details:**
    - Users can click on any book to view detailed information, including a description, author, and other relevant data on the Book Details Page.

- **WishList:**
    - Users can mark books as favorites, which will then appear on the WishList Page for quick access.
  
- **Search Functionality:**
    - Users can search for books using Title. The search results will be displayed on the Search Results Page.
- **Filter Functionality:**
    - Users can Filter  books using gener/topic. The  results will be displayed on the home page Page.      

- **Responsive Design:**
    - The layout is responsive, ensuring the app works well on mobile devices, tablets, and desktop browsers.


#Live Demo:
    Link:https://bookpicker.netlify.app/

#Technologies

    Frontend: React, HTML5, CSS3, JavaScript (ES6+)
    Styling: Tailwind CSS, Bootstrap 5, Sass (SCSS)
    State Management: React Hooks, Context API (or Redux, if used)
    Package Manager: npm
    Version Control: Git & GitHub
    Other Tools: Axios (for API requests), React Router (for navigation)    

## Folder Structure:
   book-picker/ ├── public/ │ ├── index.html ├── src/ │ ├── assets/ # Contains images, icons, and other static assets │ ├── components/ # Reusable components like Navbar, BookList, etc. │ ├── context/ # Context files for global state management │ ├── pages/ # Full-page views (Home, Book Details, Favorites, etc.) │ │ ├── HomePage.js │ │ ├── BookDetailsPage.js │ │ ├── FavoritesPage.js │ │ ├── SearchResultsPage.js │ ├── styles/ # CSS files for styling components and pages │ │ ├── HomePage.css │ │ ├── BookDetailsPage.css │ │ ├── FavoritesPage.css │ │ ├── SearchResultsPage.css │ │ ├── navbar.css │ │ └── global.css │ ├── App.js # Main app structure with routes │ ├── index.js # Entry point for the app └── node_modules/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
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
