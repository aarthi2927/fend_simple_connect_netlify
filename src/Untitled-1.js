

To create a simple website using React, Node.js, Express, and MongoDB, follow the steps below. The website will have two pages with the content you specified:
Home Page - "Hi all, welcome to the home page"
Next Page - "Hi all, welcome to the next page"
We will also cover how to deploy the website at the end.
Prerequisites:
Node.js installed (you can download it from here).
MongoDB installed or you can use a cloud version like MongoDB Atlas.
Code editor like Visual Studio Code.
Steps
Step 1: Set up the Backend (Node.js + Express)
Create a folder for your project.
bash
Copy code
mkdir simple-website
cd simple-website
Initialize a Node.js project.
bash
Copy code
npm init -y
Install dependencies.
You will need Express, Mongoose (to interact with MongoDB), and CORS.
bash
Copy code
npm install express mongoose cors
Create the backend server.
In your project folder, create a file called server.js.
js
Copy code
// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
// Middleware
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose.connect('mongodb://localhost/simple-website', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB:', err));
// Routes
app.get('/', (req, res) => {
  res.send('Hi all, welcome to the home page');
});
app.get('/next', (req, res) => {
  res.send('Hi all, welcome to the next page');
});
// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
In this code:
We're using Express to create a server.
Mongoose connects to MongoDB (you can use MongoDB Atlas if you prefer).
We define two routes: / (Home page) and /next (Next page).
Run the server.
Start the server by running the following command:
bash
Copy code
node server.js
Your backend is now running and listening on http://localhost:5000.
Step 2: Set up the Frontend (React)
Create a React app.
In your project folder, create the frontend app using create-react-app.
bash
Copy code
npx create-react-app client
cd client
Install Axios.
Axios is used to make HTTP requests to the backend.
bash
Copy code
npm install axios
Create React components.
Inside the src folder, open App.js and modify it as follows:
js
Copy code
// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/next">Next Page</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/next" exact component={NextPage} />
        </Switch>
      </div>
    </Router>
 );};
const HomePage = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then((response) => setMessage(response.data))
      .catch((error) => console.error(error));
  }, []);
  return <div>{message}</div>;
};
const NextPage = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get('http://localhost:5000/next')
      .then((response) => setMessage(response.data))
      .catch((error) => console.error(error));
  }, []);
  return <div>{message}</div>;
};
export default App;
In this code:
React Router is used to navigate between pages.
Axios makes a request to the backend to fetch data for the home and next pages.
Run the React app.
In the client folder, start the React app by running:
bash
Copy code
npm start
This will open your React app at http://localhost:3000, where you can navigate between the home page and the next page.
Step 3: Connect Frontend and Backend
Make sure that both your backend and frontend are running. The frontend React app should be making requests to the backend server.
Start the backend server (if it's not already running):
bash
Copy code
node server.js
Start the React app (if it's not already running):
bash
Copy code
npm start
Step 4: Deploy the Website
Now that your website is working locally, you can deploy it.
Backend Deployment (Node.js + Express)
Deploy the backend to Heroku.
Create a Procfile in the root of your project:
makefile
Copy code
web: node server.js
Create a Git repository:
bash
Copy code
git init
git add .
git commit -m "Initial commit"
Log in to Heroku and create an app:
bash
Copy code
heroku login
heroku create
Deploy to Heroku:
bash
Copy code
git push heroku master
Your backend will now be live on Heroku.
Frontend Deployment (React)
Build the React app.
bash
Copy code
npm run build
Deploy to Netlify.

Create a new site on Netlify.
Link your Git repository or upload the contents of the build folder.
Your React app will be live on Netlify.

//fetch
//
// 
 src/App.js
  import React, { useEffect, useState } from 'react'; 
  import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'; 
  const App = () => { return ( <Router> <div> <nav> <Link to="/">Home</Link> | <Link to="/next">Next Page</Link> </nav> <Switch> <Route path="/" exact component={HomePage} /> <Route path="/next" exact component={NextPage} /> 
  </Switch> </div> </Router> ); };
   const HomePage = () => { const [message, setMessage] = useState(''); 
    useEffect(() => 
      { 
        // Fetch data from the backend using fetch 
      fetch('http://localhost:5000/') 
      .then(response => response.text()) 
      .then(data => setMessage(data))
       .catch(error => console.error('Error fetching home page message:', error))
       ; }, []); 
       return <div>{message}</div>; 
      }; 
      const NextPage = () => {
         const [message, setMessage] = useState('');
         useEffect(() => 
          { 
          // Fetch data from the backend using fetch 
          fetch('http://localhost:5000/next') .then(response => response.text()) 
          .then(data => setMessage(data)) 
          .catch(error => console.error('Error fetching next page message:', error));
         }, []); 
         return <div>{message}</div>; };
          export default App;







