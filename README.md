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
    - Users can search for books using the title. The search results will be displayed on the Search Results Page.

- **Filter Functionality:**
    - Users can filter books using genre/topic. The results will be displayed on the homepage.
  
- **Responsive Design:**
    - The layout is responsive, ensuring the app works well on mobile devices, tablets, and desktop browsers.

- **Pagination:**
    - Implement pagination for large book lists to improve user experience.

## Live Demo

Check out the live version of the app:
- **Link:** [Book Picker on Netlify](https://bookpicker.netlify.app/)

## Technologies

- **Frontend:** React, HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Tailwind CSS, Bootstrap 5, Sass (SCSS)
- **State Management:** React Hooks, Context API
- **Package Manager:** npm
- **Version Control:** Git & GitHub
- **Other Tools:** Axios (for API requests), React Router (for navigation)

## Folder Structure:
```plaintext
   book-picker/
        ├── public/
        │   ├── index.html
        ├── src/                                 
        │   ├── assets/                          # Contains images, icons, and other static assets
        │   │   ├── images/
        |   │   │   ├── BookPickerLogo.png
        │   ├── components/                      # Reusable
        │   │   ├── BookDetails.jsx
        │   │   ├── BookItem.jsx
        │   │   ├── Footer.jsx
        │   │   ├── Input.jsx
        │   │   ├── Navbar.jsx
        │   │   ├── Pagination.jsx
        │   ├── context/
        │   │   ├── WishlistContext.jsx
        │   ├── pages/                            # Full-page views         
        │   │   ├── HomePage.jsx
        │   │   ├── SignupPage.jsx
        │   │   ├── WishListPage.jsx
        │   │   ├── Login.jsx
        │   ├── styles/                           # CSS files for styling components and pages
        │   │   ├── HomePage.css
        │   │   ├── BookDetails.css
        │   │   ├── BookItem.css
        │   │   ├── WishListPage.css
        │   │   ├── Footer.css
        │   │   ├── LoginSingup.css
        │   │   ├── Navbar.css
        │   ├── util/  
        │   │   ├── Validation.js
        │   ├── App.jsx                          # Main app structure with routes
        │   ├── index.js                         # Entry point for the app 
        └── node_modules/                        # External dependencies

```
## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/book-picker.git

2. **Navigate to the project directory:**
   ```bash
   cd book-picker

4. **Clone the repository:**
   ```bash
   npm install

6. **Run the application::**
   ```bash
   npm start

   The app will be available at http://localhost:3000.
##  Usage
   1. **HomePage:** Displays a list of books.
   2. **BookDetails:** Shows detailed information about a selected book
   3. **WishListPage:** Allows users to view their favorite books.
   4. **SearchResults:** Displays books that match the user’s search query.
## Future Enhancements
1. **User Authentication**: Add login/logout functionality so users can save their favorites across devices.
2. **Backend Integration**: Extend the project with axios to fetch real-time book data.


## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- **`npm test`**: Launches the test runner in interactive watch mode.

- **`npm run build`**: Builds the app for production in the `build` folder.

- **`npm run eject`**: If you want full control over the configuration files.

For more details, see the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## License:
 - This project is licensed under the MIT License. Feel free to fork, modify, and contribute to this project.
## Contributing
   - Fork the repository.
   - Create a new branch (git checkout -b feature-branch).
   - Make your changes.
   - Commit your changes (git commit -m 'Add some feature').
   - Push to the branch (git push origin feature-branch).
   - Open a pull request.
 
