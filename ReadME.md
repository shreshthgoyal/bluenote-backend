[![Netlify Status](https://api.netlify.com/api/v1/badges/df10f2d5-f2d7-4f3e-a5bf-62eb8d738bce/deploy-status)](https://app.netlify.com/sites/bluenote/deploys)

<!-- PROJECT LOGO -->
<br />
<p align="center">
    <img src="https://i.ibb.co/C78p1Kq/Blue-note.png" alt="Logo" width="80" height="80">

  <h1 align="center">BLUE-NOTE</h1>

  <p align="center">
  Pen Down..Thoughts Up! 🖋
   <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      </li>
     <li><a href="#url">Hosted Link</a></li>
    <li><a href="#features">Features</a>
    <ul>
    <li> <a href="#frontend-features">Frontend Features</a></li>
    <li> <a href="#backend-features">Backend Features</a></li>
    </ul>
    </li>
    <li><a href="#technologies-used">Technologies, Libraries and Packages Used</a>
    <ul>
    <li> <a href="#frontend-tech-used">Frontend</a></li>
    <li> <a href="#backend-tech-used">Backend</a></li>
    </ul></li>
    <li><a href="#local-setup">Local Setup</a>
    <ul>
    <li> <a href="#frontend-setup">Frontend</a></li>
    <li> <a href="#backend-setup">Backend</a></li>
    </ul></li>
  </ol>
</details>


<div id="about-the-project" />

<!-- ABOUT THE PROJECT -->
# About The Project

A website for taking notes. The website allows you to login either as a user and taking notes and reading them.

A user can register themselves using a valid email id and a strong password. This website implements CRUD routes. User can Create, Read and Update notes. 

>Delete route is under development right now.

<div id="url" />

# Hosted Link
Frontend is deployed on netlify cloud-service and Backend is deployed on Heroku cloud-platform.

[https://bluenote.netlify.app/](https://bluenote.netlify.app/)

<div id="features" />

<!-- GETTING STARTED -->
# Features

<div id="frontend-features" />

## Frontend Features
### **User**
---
   - Website is made responsive and funcitonal for mobile users also. So users on any device can get access to our website.
   - User's session is stored in the browser hence he retains his login in the browser.
   - Users can sign in themselves and create Notes.
   - Users can read all the Notes by the User.
   - Users can update their Notes.
   - Users can log out of the website and hence terminate their session from the browser.


<div id="frontend-features" />

## Backend Features

### **Routes**
---
  - **User Routes**
     - Register : To register the User
     - Login    : To sign in the User
    
   - **Events**
     - Getall : Get all notes by the User.
     - Create : To create a note for the User.
     - Update : To update a note by the User.
     - Delete : To delete a particular note by the User.

### **Security**
---
- SQL Injection
  - User is logged in to site through E-mail Verification system.
  - We used parameterized queries and input validation to prevent SQL Injection attacks.
- User Authentication
  - We added Password Validation for users to enter strong passwords.
  - Passwords are not stored as plain-texts they are hashed and salted then stored in the database.
  - No critical information like the password of the user is sent into the session.
 - Cross-Site Scripting Attacks
   - We enabled CORS to permit loading of resources from other sites.
   - We enabled Helmet in our backend which prevents our website from XSS attacks upto some extent.
   - Helmet provieds our site with Content-Security-Policy (CSP) which also prevents XSS attacks.

> I enabled compression middleware to compress response bodies for all request that traverse through the middleware. 

<div id="technologies-used" />

# Technologies, Libraries and Packages Used

<div id="frontend-tech-used" />

- ## Frontend
1. HTML
2. CSS
3. JavaScript
4. Particle.js
5. FontAwesome
6. SweetAlerts2

<div id="backend-tech-used" />

- ## Backend
1. NodeJS
2. ExpressJS
3. Nodemon
4. Bcrypt
5. JsonWebToken
6. CORS
7. pg
8. Password-Validator
9. Router
10. Dotenv
11. Helmet
12. Compression


<div id="local-setup" />

# Local Setup

<div id="frontend-setup" />

+ ## Frontend

1. Fork the repository.
2. Clone the repository
    ```sh
    git clone https://github.com/shreshthgoyal/bluenote-frontend.git
    ```
3. Open the folder in which you cloned the repository.
4. Open all the files in your code editor
   ```sh
    code .
   ```
5. Open index.html to go to the landing page of the website.

<div id="backend-setup" />

+ ## Backend

1. Fork the repository.
2. Clone the repository
   ```sh
    git clone https://github.com/shreshthgoyal/bluenote-backend.git
    ```
3. Open the folder in which you cloned the repository.
4. Run this command to install all the packages
    ```sh
    npm install
    ```
5. Create a new .env file to store required enviorment variables.
6. Create your own secret key to hash and salt passwords and store it in SECRET_KEY in your .env file.
7. Create your own PostgresSQL Database locally or on ElephantSQL. All the PSQL queries are present in database folder.
8. Once hosted add the hosted URL in DB_URL in your .env file.
9. Now on your terminal run this command to start your server
```sh 
npm run
```

