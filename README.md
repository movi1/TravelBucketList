# the-last-project-cfg
## Pack & Go

Welcome to the Travel Bucket List  project! 
This application helps you organize and track your travel dreams and adventures. 
Whether you're an avid traveler or someone with a growing wanderlust, this app is designed to make your travel aspirations come to life.

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js and npm - [Download and Install Node.js](https://nodejs.org/)
- Git - [Download and Install Git](https://git-scm.com/)

 ### Collaborators Clone the Repository:
```
git clone https://github.com/your-username/the-last-project-cfg.git
```
---

##  Navigate to the project folder:

```
cd the-last-project-cfg
```
### Install Dependencies:

+ Inside project folder, install dependencies:
```
npm install
```
## Open the Project in Your Code Editor If you're using Visual Studio Code:
```
code .
```
## Set Up Environment Variables
### In the backend folder, locate the .env.example file, copy it, and rename the copy to .env. 

### Open the .env file and fill in the required information for your database connection:
---
DB_HOST=localhost

DB_USER=myuser

DB_PASSWORD=mypassword

DB_DATABASE=mydatabase

PORT=3306

---

## or run this comand :
```
npm run create:env
```
# Install Database and Start the Project
## In the root directory of the project, run the following commands:

```
npm run install:database
```

---
### Start the Development Server:

+ After installing dependencies, collaborators can start the development server:
```
npm start
```
---

### Make changes

### Committing Changes 

* Check the status (optional):

```
git status
```
---
* Add, commit, and push changes to the main repository:

```
git add .
git commit -m "Descriptive commit message"
git push 
```

## Color and Font Legend

## Colors Used

### General Colors
- **Light Gray:** #f4f4f4
- **Charcoal:** #22333b
- **Dark Khaki:** #5e503f
- **Camel:** #C6AC8F
- **White:** #ffffff
- **Black:** #0A0908
- **Champagne:** #eae0d5
- **Google Blue:** #4285f4
- **Gainsboro Gray:** #f0f0f0
- **Shadowy Black:** rgba(0, 0, 0.5, 0.5)
- **Shadowy Brown:** rgb(94, 80, 63)

## Responsive Design
- Mobile View (max-width: 600px)
- Tablet View (min-width: 601px) and (max-width: 1024px)
- Laptop and Desktop View (min-width: 1025px)
### Fonts:
The application uses the following fonts:

- **Raleway**: This font is used for Navbar Links.
- **EB Garamond**: This font is used for the title, subtitle, and buttons.

## Folder Structure

The project follows a modular structure with the following main components:

- **components:**
  - **about-us:**
    - **about-us.jsx:** React component for displaying information about the project or team.
    - **about-us.css:** Stylesheet for the about-us component.
    
  - **bucket-list:**
    - **bucket-list.jsx:** React component for managing the user's travel bucket list.
    - **bucket-list.css:** Stylesheet for the bucket-list component.

  - **footer:**
    - **footer.jsx:** React component for the footer section of the application.
    - **footer.css:** Stylesheet for the footer component.

  - **header:**
    - **header.jsx:** React component for the application's header and navigation.
    - **header.css:** Stylesheet for the header component.

  - **home:**
    - **home.jsx:** React component for the homepage or landing page.
    - **home.css:** Stylesheet for the home component.

  - **map:**
    - **CountryDetails.jsx:** React component for displaying details about a specific country.
    - **MapComponent.jsx:** React component for the main map functionality.
    - **MapSearch.jsx:** React component for searching on the map.
    - **MapSearch.css:** Stylesheet for the map search component.

  - **tests:**
    - Test files for unit or integration testing.





